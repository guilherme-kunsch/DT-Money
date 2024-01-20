import styles from "./App.module.css"
import { Content } from "./components/Financial/Content";
import "./Global.css";
import { Header } from "./components/Header/Header";
import { Accounts } from "./components/Accounts/Accounts";
export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
      <Accounts />
    </div>
  );
}
