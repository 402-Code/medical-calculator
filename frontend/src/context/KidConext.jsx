import React, { createContext, useState } from "react";

export const KidContext = createContext();

export const KidProvider = ({ children }) => {
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [bmi, setBmi] = React.useState(0);
  const [gender, setGender] = React.useState("");
  const [avatar, setAvatar] = React.useState();
  const [image, setImage] = React.useState("");
  return (
    <KidContext.Provider
      value={{
        height,
        setHeight,
        weight,
        setWeight,
        bmi,
        setBmi,
        gender,
        setGender,
        avatar,
        setAvatar,
        image,
        setImage,
      }}
    >
      {children}
    </KidContext.Provider>
  );
};
