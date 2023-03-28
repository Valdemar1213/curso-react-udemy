import React from "react";

const UserDatails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? <p>Pode dirigir!</p> : <p>Muito novo para dirigir</p>}
    </div>
  );
};

export default UserDatails;
