import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";

export default function Home() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //Firebase den gelen onAuthStateChanged bu fonksion bize kullanıcı bilgilerini döner
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.displayName);
        setUserName(userCredential.email);

        // console.log(userCredential); --> bize user ilk kaydolduğundaki bilgileri döner
      } else {
        toast.error(error.message);
      }
    });
  }, []);

  return (
    <div style={{ margin: "10px", fontSize: "25px" }}>
      <div>Merhaba {user ? user : "Siz"}</div>
      <div>Siz {userName} hesabıyla giriş yapmaktasınız</div>
    </div>
  );
}
