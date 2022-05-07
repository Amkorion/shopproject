import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Зареєструватися</h1>
      <button onClick={logGoogleUser}>Увійти за допомогою Google</button>
    </div>
  );
};

export default SignIn;
