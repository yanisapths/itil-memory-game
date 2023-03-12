import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { script } from "../public/script/script";

function Play() {
  useEffect(() => {
    script();
  }, []);
  return (
    <main>
      <div className={styles.description}>
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
      <div className={styles.board}>
        <div className="wrapper">
          <ul className="cards">
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/questions/q1.png" alt="card-img" name="1" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/questions/q2.png" alt="card-img" name="2" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/questions/q3.png" alt="card-img" name="3" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/questions/q4.png" alt="card-img" name="4" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/questions/q5.png" alt="card-img" name="5" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/answers/a1.png" alt="card-img" name="1" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/answers/a2.png" alt="card-img" name="2" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/answers/a3.png" alt="card-img" name="3" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/answers/a4.png" alt="card-img" name="4" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/images/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/images/answers/a5.png" alt="card-img" name="5" />
              </div>
            </li>

            <div className="details text-black">
              <p className="time">
                Time:{" "}
                <span>
                  <b>20</b>s
                </span>
              </p>
              <p className="flips">
                Flips:{" "}
                <span>
                  <b>0</b>
                </span>
              </p>
              <button>Refresh</button>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Play;
