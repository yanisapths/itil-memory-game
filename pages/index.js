import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <Link href="/">
              By
              <Image
                src="/canicode.svg"
                alt="canicode Logo"
                className={styles.vercelLogo}
                width={60}
                height={30}
                priority
              />
            </Link>
          </div>
        </div>

        <div className={styles.center}>
          <p className={styles.logo}>JUST REMEMBER</p>
        </div>
        <div className={styles.grid}>
          <Link href="/intro" className={styles.btn}>
            <h2 className={inter.className}>
              PLAY NOW <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </main>
    </>
  );
}
