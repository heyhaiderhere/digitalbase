import { useCallback, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../../Context/AuthProvider";
import { SCOPES } from "../../constants";
import { gapi } from "gapi-script";
const Login = () => {
  const [user, setUser] = useContext(AuthContext);
  const handleOnSuccess = useCallback(({ profileObj, tokenObj }) => {
    const user = {
      profile: profileObj,
      token: tokenObj,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }, []);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: SCOPES.join(" "),
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleOnFailure = useCallback((error) => {
    console.log(error);
  }, []);
  return (
    <div className="login">
      {Object.keys(user).length ? (
        <Navigate to="/" />
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login With Google"
          onSuccess={handleOnSuccess}
          onFailure={handleOnFailure}
          cookiePolicy="single_host_origin"
          accessType="offline"
          scope={SCOPES.join(" ")}
        />
      )}
    </div>
  );
};

export default Login;
