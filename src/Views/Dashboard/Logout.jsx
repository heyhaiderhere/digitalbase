import { useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Logout = () => {
  const [user, setUser] = useContext(AuthContext);
  useEffect(() => {
    localStorage.clear();
    setUser({});
  }, []);
  return <div>Logout</div>;
};

export default Logout;
