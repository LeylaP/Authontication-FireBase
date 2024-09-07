import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(
        auth, // Firebase.jsx ten gelen auth u kullandık
        email,
        password
      );
      const user = res.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Giriş yapılamadı" + error.message);
    }
  };

  // firebase den gelen verimiz promise yapıya sahip asenkron işlem olduğu için async-await kullandık
  const register = async () => {
    try {
      //   const auth = getAuth();
      const response = await createUserWithEmailAndPassword(
        auth, // Firebase.jsx ten gelen auth u kullandık
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı oluşturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth">
      <h3 className="auth-header">Giriş Yap / Kaydol</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Adres"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifre"
        />
      </div>
      <div className="button-div">
        <button className="google-button">
          <FaGoogle /> Google ile Giriş
        </button>
        <button onClick={login} className="login-button">
          {" "}
          Giriş Yap
        </button>
        <button onClick={register} className="register-button">
          Kaydol
        </button>
      </div>
    </div>
  );
}
