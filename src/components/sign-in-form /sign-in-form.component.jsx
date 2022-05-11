import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      // setCurrentUser(user);
      // TODO нужно будет удалить сет карент юзер
      //! TODO alert("Дякуюємо за реєстрацію") на случай если не будет дургого визуала
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Не вірний пароль");
          break;
        case "auth/user-not-found":
          alert("Не вірний Email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Вже зараєстровані?</h2>
      <span>Увійдіть до свого аккаунту</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Увійти</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Ваш Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
