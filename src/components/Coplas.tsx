import React from "react";
import "./Coplas.css";

interface CoplasProps {
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  paragraph6?: string;
  paragraph7?: string;
  paragraph8?: string;
}

const Coplas: React.FC<CoplasProps> = ({
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  paragraph7,
  paragraph8,
}) => {
  return (
    <div className="card_coplas">
      <div className="card-content">
        <p className="card-paragraph">{paragraph1}</p>
        <p className="card-paragraph">{paragraph2}</p>
        <p className="card-paragraph">{paragraph3}</p>
        <p className="card-paragraph">{paragraph4}</p>
        <p className="card-paragraph">{paragraph5}</p>
        <p className="card-paragraph">{paragraph6}</p>
        <p className="card-paragraph">{paragraph7}</p>
        <p className="card-paragraph">{paragraph8}</p>
      </div>
    </div>
  );
};

export default Coplas;
