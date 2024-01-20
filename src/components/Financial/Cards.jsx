import styles from "./Cards.module.css";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar} from "@phosphor-icons/react";

export function Card(prop) {

  const {
    name,
    value,
  } = prop;

  const icons = {
    "Entrada": <ArrowCircleUp size={32} color="#00875F"/>,
    "Saida": <ArrowCircleDown size={32} color="#F75A68"/>,
    "Total": <CurrencyDollar size={32} color="#E1E1E6"/>
  }

  const formattedValue = parseFloat(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <div className={styles.teste}>
      <div className={styles.component}>
        <p>{name}</p>
        {icons[name]}
      </div>
      <div className={styles.paragraph}>
        <p>{formattedValue}</p>
      </div>
    </div>
  );
}
