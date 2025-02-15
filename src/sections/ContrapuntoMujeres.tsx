import React from "react";
import "./ContrapuntoMujeres.css";
import Coplas from "../components/Coplas";
import Titulo from "../components/Titulo";
const ContraMujeres: React.FC = () => {
  return (
    <div className="ContraMujeres">
      <div className="Titulo">
        <Titulo id="ContrapuntoMujeres" title="Contrapunto mujeres" />
      </div>
      <div className="Cuerpo">
        <Coplas
          paragraph1="Te quise mandar hacer"
          paragraph2="Tu retrato en marmolina"
          paragraph3="Pero no se puede hacer"
          paragraph4="Cosa chusca en piedra fina"
        />
        <Coplas
          paragraph1="Quien es ese perro negro"
          paragraph2="Que pasa por mi delante"
          paragraph3="Con cara de muerto de hambre"
          paragraph4="Y susu costillas de alambre"
        />
        <Coplas
          paragraph1="Mi suegra ya no me quiere"
          paragraph2="Dice que ya no trabajo"
          paragraph3="Que le pregunte a su hijo"
          paragraph4="Cuando lo tengo debajo"
        />
        <Coplas
          paragraph1="Tu habras pensado cholito"
          paragraph2="Que solo a ti te queria"
          paragraph3="Que pues no te has dado cuenta"
          paragraph4="Que los cuernos te ponia"
        />
        <Coplas
          paragraph1="Que bien te sienta la moda"
          paragraph2="Con tremendas zapatillas"
          paragraph3="Lastima que tu cosita"
          paragraph4="Solamente hace cosquillas"
        />
        <Coplas
          paragraph1="Con esas fachas que tienes"
          paragraph2="No sirves ni pa empezar"
          paragraph3="Por que si lo intentas conmmigo"
          paragraph4="Seguro vas a llorar"
        />
        <Coplas
          paragraph1="Por debajo de esta casa"
          paragraph2="Corre el agua del pajuro"
          paragraph3="De mejores me he burlado"
          paragraph4="Que sera de ti cachudo"
        />
        <Coplas
          paragraph1="Mi marido esta enojado"
          paragraph2="Pujando como la coche"
          paragraph3="Solo por que no he llegado"
          paragraph4="A dormir a antenoche"
        />
        <Coplas
          paragraph1="Tus amigos me decian"
          paragraph2="Que te parecias a un toro"
          paragraph3="Yo no se si por la fuerza"
          paragraph4="O por los cuernos que te pongo"
        />
        <Coplas
          paragraph1="Yo creia que por tu talla"
          paragraph2="Eras bien aventajado"
          paragraph3="Que sorpresa que me he dado"
          paragraph4="Que de abajo eras chaparro"
        />
        <Coplas
          paragraph1="Es cierto que a ti te dicen"
          paragraph2="Guitarra carnavalera"
          paragraph3="Solo rascas no punteas"
          paragraph4="Ahora me voy con cualquiera"
        />
        <Coplas
          paragraph1="Me dicen que a ti te dicen"
          paragraph2="Castillo a medio quemar"
          paragraph3="No llegaste a la paloma"
          paragraph4="Con ganas te has de quedar"
        />
        <Coplas
          paragraph1="Me dicen que andas comiendo"
          paragraph2="Media arroba de maní"
          paragraph3="Para ver si asi te crece"
          paragraph4="Un poquito tu pipi"
        />
        <Coplas
          paragraph1="No te piques no te piques"
          paragraph2="Picate con el ají"
          paragraph3="Cuando vengas llorando"
          paragraph4="Por esta que tengo aqui"
        />
      </div>
    </div>
  );
};

export default ContraMujeres;
