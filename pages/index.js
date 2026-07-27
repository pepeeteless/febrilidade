import styles from "./Home.module.css";
import Image from "next/image";
import ramon_picado from "../public/imgs/ramon_picado.png";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          ✅ Infraestrutura Finalizada Lixo Imundo!
        </h1>

        <p className={styles.subtitle}>
          Atenção, seu bosta! A infraestrutura do app ja ta pronta porram.
          <br />
          <br />
          Agora não tem mais desculpa, larga de ser um mizeravel que so fala e
          nao faz! gay lixo. 🚀
        </p>
        <p className={styles.small}>
          Docker? ✔️
          <br />
          Banco? ✔️
          <br />
          CI/CD? ✔️
          <br />
          Lint? ✔️
          <br />
          Testes? ✔️
          <br />
          <br />O único serviço que ainda está offline é o desenvolvedor.
          <br /> Foto do cidadão para facilitar a identificação
          <br /> ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
        </p>
        <Image
          src={ramon_picado}
          alt="Ramon"
          width={300}
          className={styles.image}
        />
        <br />
        <br />

        <button
          className={styles.button}
          onClick={() => {
            const novoCount = count + 1;
            setCount(novoCount);

            alert(
              `🔔 Lembrete #${novoCount}: Bunda mole, a infraestrutura já está pronta. Vamo começar porra!`,
            );
          }}
        >
          Enviar cobrança 📢
        </button>

        <p className={styles.small}>
          Nivel de pau-no-cuzisse: <strong>{count}</strong>
        </p>
      </div>
    </main>
  );
}
