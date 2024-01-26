import styles from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";
import { useState } from "react";
import Popup from "reactjs-popup";
import { ArrowCircleUp, ArrowCircleDown, X} from "@phosphor-icons/react";


export function Header() {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.paragraph}>
            <img src={igniteLogo} alt="logo ignite" />
            <p>DT Money</p>
          </div>
          <button className={styles.transacao} type="button" onClick={openPopup}>
            Nova transação
          </button>
          <Popup
            open={popupOpen}
            onClose={closePopup}
            overlayStyle={{ background: "rgba(0, 0, 0, 0.6)" }}
            // contentStyle={{ top: "-140px" }}
          >
            <div className={styles.popup}>
              <button className={styles.iconClosePopUp} onClick={closePopup}>
                <X size={24}/>
              </button>
              <div className={styles.titlePopUp}>
                <p>Nova transação</p>
              </div>
              <div className={styles.inputsPopUp}>
                <input className={styles.descricao} type="text" placeholder="Descrição" />
                <input className={styles.preco} type="text" placeholder="Preço" />
                <input className={styles.categoria} type="text" placeholder="Categoria" />
              </div>
              <div className={styles.buttonsPopUp}>
                <a href="#" className={styles.arrowCircleUp}>
                  <ArrowCircleUp size={26} color="#00875F"/>
                  <p>Entrada</p>
                </a>
                <a href="#" className={styles.arrowCircleDown}>
                  <ArrowCircleDown size={26} color="#F75A68"/>
                  <p>Saída</p>
                </a>
              </div>
              <div className={styles.cadastrarPopUp}>
                <button>Cadastrar</button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}
