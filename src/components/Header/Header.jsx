import styles from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.paragraph}>
            <img src={igniteLogo} alt="logo ignite" />
            <p>DT Money</p>
          </div>
          <button type="submit">Nova transação</button>
        </div>
      </div>
    </div>
  );
}
