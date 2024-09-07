import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { apiKey } from "./ApiKey";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "fir-project1-9d5f0.firebaseapp.com",
  projectId: "fir-project1-9d5f0",
  storageBucket: "fir-project1-9d5f0.appspot.com",
  messagingSenderId: "1020900127845",
  appId: "1:1020900127845:web:393f57883666821621428c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
