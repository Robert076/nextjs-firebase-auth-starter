"use client";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      if (password.length < 6) {
        console.log("Password must be at least 6 characters long!");
        return;
      }
      console.log(email);
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="sign-up-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="sign-up"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Sign up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
