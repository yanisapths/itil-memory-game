import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Intro.module.css";

const Play = () => {
  return (
    <main >
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
      <div className={styles.board}>
      <div className="flex justify-center">
        <div className={styles.center}>
          <div className={styles.card}>
            <h2>WELCOME</h2>
            <p>Just to test your ITIL intelligence.</p>
          </div>
          <div className="flex justify-center pt-8">
            <Link className={styles.button} href="/play">
              <p>NEXT</p>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Play;
