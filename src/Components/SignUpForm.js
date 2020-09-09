import React from "react";
import { ModalWrapper, SignUpHeader } from "./Modal";
import { Illustrations } from "../assets";

export const SignUpForm = () => {
  return (
    <ModalWrapper>
      <SignUpHeader
        style={{
          position: "absolute",
          width: "757px",
          height: "574px",
          top: "8px",
          objectFit: "cover",
        }}
      >
        Welcome! We've been waiting for you!
      </SignUpHeader>
      <form
        style={{
          position: "absolute",
          width: "313px",
          left: "83px",
          top: "200px",
        }}
      >
        <label>
          Email: <br />
          <input
            style={{
              background: "#F4F5F7",
              borderRadius: "2px",
              marginTop: "20px",
            }}
          />
        </label>
        <br />
        <label style={{ marginTop: "200px" }}>
          Password: <br />
          <input
            style={{
              background: "#F4F5F7",
              borderRadius: "2px",
              marginTop: "20px",
            }}
          />
        </label>
      </form>
      <img
        src={Illustrations.welcome}
        style={{
          position: "absolute",
          left: "530px",
          width: "516px",
        }}
      />
    </ModalWrapper>
  );
};
