import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1 className="h1">Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolore delectus voluptatibus, inventore officiis in quidem laborum
            repudiandae, reiciendis ab nesciunt corporis amet. Ducimus sunt
            expedita ad enim possimus, eos odit quasi non debitis repellat
            obcaecati similique ex saepe porro recusandae ratione, asperiores
            cumque molestiae perferendis vel labore voluptatum harum. Culpa aut
            necessitatibus neque voluptate?
          </p>
          <span>Don't you have account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
