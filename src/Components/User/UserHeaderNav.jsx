import React from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../../userContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(userContext);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos title="Minhas fotos" /> {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas title="Estatisticas" /> {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto title="Adicionar Foto" /> {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair /> {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
