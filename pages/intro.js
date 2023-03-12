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
            <h2>INSTRUCTION</h2>
            <h4>The game starts with all the 🃏 face down and 🧑 take turns to turn over two 🃏.</h4>
            <h4>If the two 🃏 have the answer of the ❓, </h4><h4>then the 🃏 will be opened, otherwise the 🃏 turn face down again.</h4>
            <h3>The 🫅🏆 is the 🧑 with the most 🃏 when all the 🃏 have been taken.</h3>
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
