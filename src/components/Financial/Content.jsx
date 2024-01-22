import { Card } from './Cards';
import styles from './Content.module.css';

export function Content() {
  return (
    <div className={styles.cardFinanceiro}>
      <Card name="Entrada" value={1000}/>
      <Card name="Saida" value={1500}/>
      <Card name="Total" value={500} />
    </div>
  )
}