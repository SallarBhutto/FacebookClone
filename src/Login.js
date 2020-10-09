import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/FaceB.png"
        />
        <img
          alt=""
          src="https://d3n8a8pro7vhmx.cloudfront.net/ignitenational/pages/1554/attachments/original/1548868405/facebook-logo-png-1722_copy.png?1548868405"
        />
        <p className="login_credits">clone by Sallar Hussain Bhutto</p>
        <p className="login_credits">via Clever Programmer</p>
      </div>
      <Button type="submit" onClick={singIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
