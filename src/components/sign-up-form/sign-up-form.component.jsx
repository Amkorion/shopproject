import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Паролі не співпадають!");
      return;
    } else if (password.length < 6) {
      alert("Пароль має містити мінімум 6 символів");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

      // TODO alert("Дякуюємо за реєстрацію") на случай если не будет дургого визуала
      //
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Користувач з таким email вже зареєстрований");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Не маєте аккаунту?</h2>
      <span>Зареєструватися за допомогою e-mail</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Ваше імʼя"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Пароль"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Підтвердження паролю"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Зареєструватися</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
