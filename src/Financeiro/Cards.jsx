import styles from "./Cards.module.css";
import { ArrowCircleUp } from "@phosphor-icons/react";

export function Card() {
  return (
    <div className={styles.teste}>
      <div className={styles.component}>
        <p>Entradas</p>
        <ArrowCircleUp size={32} color="#00875F"/>
      </div>
      <div className={styles.paragraph}>
        <p>R$ 14.500,36</p>
      </div>
    </div>
  );
}
