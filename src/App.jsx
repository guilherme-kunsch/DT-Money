import styles from "./App.module.css";
import "./Global.css";
import { Header } from "./Header/Header";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <p></p>
      </div>
    </div>
  );
}
