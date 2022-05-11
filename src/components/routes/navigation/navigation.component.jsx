import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../../assets/086 crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Магазин
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Вийти
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Реєстрація
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
