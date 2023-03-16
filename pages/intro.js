import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Intro.module.css";

const Play = () => {
  return (
    <main className="w-screen h-full bg-black pt-8">
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
        <div className="flex justify-center ">
          <div className={styles.center}>
            <div className={styles.card}>
              <h2>INSTRUCTION</h2>
              <h4>
                The game starts with all the card face down and player take
                turns to turn over two card.
              </h4>
              <h4>If the two card have the correct answer of the question, </h4>
              <h4>
                then the card will be opened, otherwise the card turn face down
                again.
              </h4>
              <h3>
                The <span className="text-[#DFFFD8]">winner</span> is the player
                with the most card when all the card have been taken.
              </h3>
            </div>
            <div className="flex justify-center pt-6 mb-28 md:mb-0">
              <Link
                className="bg-white text-black rounded-full py-2 md:w-1/5 w-4/5"
                href="/play"
              >
                <p className="text-lg font-semibold ">NEXT</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Play;
