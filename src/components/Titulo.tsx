import React from "react";
import "./Titulo.css";

interface TitleProps {
  id: string;
  title: string;
}

const Titulo: React.FC<TitleProps> = ({ title, id }) => {
  return (
    <div className="card" id={id}>
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Titulo;
