import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  var errorMessage;
  const [admin, setadmin] = useState();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {user,loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      setadmin(false);
      const res = await axios.post("/auth/login", credentials);

      if(res.data.isAdmin){
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
      }

      else
      {
        dispatch({ type: "LOGIN_FAILURE" });
        setadmin(true);
      }

    } 
    catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    };
  };
  errorMessage = error ? error.split('Error:')[1].split('<br>')[0].trim(): null;
  if(admin==true)
  {
    errorMessage="You are Not Admin";
  }
  

  console.log(errorMessage);
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{errorMessage}</span>}
        {admin && <span>{errorMessage}</span>}
      </div>
    </div>
  );
};

export default Login;