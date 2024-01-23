import styles from "./Accounts.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function Accounts() {
  
  return (
    <div className={styles.source}>
      <input type="text" placeholder="Busque uma transação" />
      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </div>
  );
}
