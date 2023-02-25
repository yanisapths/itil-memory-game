import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Intro.module.css";

const Play = () => {
  return (
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
      <div className={styles.points}>
        <p>
          <span className="text-xs font-light text-gray-100">Score: </span>
          100 🔥
        </p>
        <p>
          <span className="text-xs font-light text-gray-100">Budget: </span>
          500 🪙
        </p>
      </div>
      <div className="flex justify-center">
        <div className={styles.center}>
          <div className={styles.card}>
            <h2>WELCOME</h2>
            <p>We have provided 500 coins and 100 maximum score for you.</p>
            <p>Throughout the game, you will be test with ITIL knowledge.</p>
            <p>
              You have to make the camper the most satisfied the camping journey
              to pass the game!
            </p>
          </div>
          <div className="flex justify-center pt-8">
            <Link className={styles.button} href="/play">
              <p>NEXT</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Play;
