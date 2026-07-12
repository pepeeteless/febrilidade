import styles from "./Home.module.css";
import Image from "next/image";
import ramon_picado from "../public/imgs/ramon_picado.jpg";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🚧 Página em Construção 🚧</h1>

        <p className={styles.subtitle}>Aguarde, miserável maldito...</p>

        <div className={styles.spinner}></div>

        <p className={styles.small}>
          Enquanto isso, o Ramon tá com febre e empenhado.
          <br></br>
          <Image
            src={ramon_picado}
            alt="Ramon picado"
            width={300}
            className={styles.image}
          />
        </p>

        <button
          className={styles.button}
          onClick={() => {
            const novoCount = count + 1;
            setCount(novoCount);

            alert(
              `Parabéns! Mandou ${novoCount} pontos de saúde para o Ramon...`,
            );
          }}
        >
          Não clique aqui
        </button>
      </div>
    </main>
  );
}
