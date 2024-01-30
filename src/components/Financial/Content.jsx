import { Card } from './Cards';
import styles from './Content.module.css';

export function Content() {
  return (
    <div className={styles.cardFinanceiro}>
      <Card name="Entrada" value={0}/>
      <Card name="Saida" value={0}/>
      <Card name="Total" value={0} />
    </div>
  )
}