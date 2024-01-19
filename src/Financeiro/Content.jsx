import { Card } from './Cards';
import styles from './Content.module.css';

export function Body() {
  return (
    <div className={styles.cardFinanceiro}>
      <Card />
      <Card />
      <Card />
    </div>
  )
}