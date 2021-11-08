import React from "react";
import { connect } from "react-redux";
import { login } from "../../Redux/Actions/UserAction";
function Login({ login, data, history }) {
  const handleLogin = () => {
    login();
    if (data.token) {
      window.localStorage.setItem("sid", data.token);
      history.push("/");
    }
    console.log(data);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
const mapStateToprops = (state) => ({
  data: state.user.data,
});
export default connect(mapStateToprops, { login })(Login);
