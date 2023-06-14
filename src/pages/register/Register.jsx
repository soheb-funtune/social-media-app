import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1 className="h1">SOHEB Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolore delectus voluptatibus, inventore officiis in quidem laborum
            repudiandae, reiciendis ab nesciunt corporis amet. Ducimus sunt
            expedita ad enim possimus, eos odit quasi non debitis repellat
            obcaecati similique ex saepe porro recusandae ratione, asperiores
            cumque molestiae perferendis vel labore voluptatum harum. Culpa aut
            necessitatibus neque voluptate?
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="UserName" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
