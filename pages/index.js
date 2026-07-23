import styles from "./Home.module.css";
import Image from "next/image";
import baianage from "../public/imgs/baianage.png";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🚧 Página em Construção 🚧</h1>

        <p className={styles.subtitle}>
          O Bosta do ramon agr só ta de bombinhagem msm, nem doente ta mais...
        </p>

        <div className={styles.spinner}></div>

        <p className={styles.small}>
          Enquanto isso, o Ramon viciado em Black Ops 2, viadinho... Vamo tira o
          carro dele pra nada se fode, Olha que medonhage ⬇️ kkkkkkkkkkk
          <br></br>
          <Image
            src={baianage}
            alt="Gol Baiano"
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
              `Parabéns! Mandou ${novoCount} de vergonha na cara para Bombinhamon...`,
            );
          }}
        >
          Aperte nessa bosta.
        </button>
      </div>
    </main>
  );
}
