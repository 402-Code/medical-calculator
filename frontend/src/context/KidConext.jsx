import React, { createContext, useState } from "react";
export const KidContext = createContext();

export function KidProvider({ children }) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState("");

  return (
    <KidContext.Provider
      value={{
        name,
        setName,
        birthday,
        setBirthday,
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
