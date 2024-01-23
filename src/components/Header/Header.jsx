import styles from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";
import { useState } from "react";
import Modal from "react-modal";

export function Header() {

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const customStyles = {
    content: {
      top: "41%",
      left: "50%",
      width: "33.43rem",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(0, 0, 0, 0.7)",
      zIndex: "1000"
    },
  };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.paragraph}>
            <img src={igniteLogo} alt="logo ignite" />
            <p>DT Money</p>
          </div>
          <button type="button" onClick={abrirModal}>
            Nova transação
          </button>

          <Modal
            isOpen={modalAberto}
            onRequestClose={fecharModal}
            contentLabel="Teste"
            style={customStyles}
          >
            <p>Nova transação</p>
            <button type="button" onClick={fecharModal}>
              FECHAR
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
