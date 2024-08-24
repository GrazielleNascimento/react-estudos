import styles from "../styles/Home.module.css";

export default function Home() {
  return (
      <div>
        <div className={styles.container_principal}>
          <div className={styles.container_texto}>
            <h1>Hello World</h1>
            <p>paragrafo com react</p>
            <p className={styles.autor}>Criado por DevMedia</p>
          </div>
        </div>
        <div/>
      </div>
    );
}
