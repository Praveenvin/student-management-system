import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try{

      const res = await fetch("http://127.0.0.1:8000/api/login/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,
          password
        })
      });

      const data = await res.json();

      if(!res.ok){
        alert("Invalid login credentials");
        return;
      }

      if(data.role === "admin") navigate("/admin");
      else if(data.role === "faculty") navigate("/faculty");
      else navigate("/student");

    }catch(err){
      alert("Server error");
    }

  };

  return (

<div className="login-container">

  {/* LEFT SIDE */}
  <div className="login-left">

  <div className="brand">

    <h1 className="logo">🎓 EduTrack</h1>

    <h2>Smart Student Management</h2>

    <p className="tagline">
      A modern platform to manage students, faculty,
      courses, attendance and academic performance.
    </p>

    <div className="features">

      <div className="feature">
        ✔ Manage Students
      </div>

      <div className="feature">
        ✔ Track Attendance
      </div>

      <div className="feature">
        ✔ Monitor Performance
      </div>

      <div className="feature">
        ✔ Academic Insights
      </div>

    </div>

    <p className="quote">
      "Empowering institutions with smarter education tools."
    </p>

  </div>

</div>


  {/* RIGHT SIDE */}

  <div className="login-right">

    <div className="login-card">

      <h2>Welcome Back</h2>

      <p className="subtitle">
        Sign in to continue to EduTrack
      </p>

      <input
        type="text"
        placeholder="Email or Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Sign In
      </button>

      <p className="forgot">
        Forgot Password?
      </p>

    </div>

  </div>

</div>

  );
}

export default Login;