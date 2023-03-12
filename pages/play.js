import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { script } from "../public/script/script";
import Card from "../components/Card";

const qa = [
  { src: "/images/questions/q1.png", name: "1", id: "quest" },
  { src: "/images/questions/q2.png", name: "2", id: "quest" },
  { src: "/images/questions/q3.png", name: "3", id: "quest" },
  { src: "/images/questions/q4.png", name: "4", id: "quest" },
  { src: "/images/questions/q5.png", name: "5", id: "quest" },
  { src: "/images/questions/q6.png", name: "6", id: "quest" },
  { src: "/images/questions/q7.png", name: "7", id: "quest" },
  { src: "/images/questions/q8.png", name: "8", id: "quest" },
  { src: "/images/questions/q9.png", name: "9", id: "quest" },
  { src: "/images/answers/a1.png", name: "1", id: "ans" },
  { src: "/images/answers/a2.png", name: "2", id: "ans" },
  { src: "/images/answers/a3.png", name: "3", id: "ans" },
  { src: "/images/answers/a4.png", name: "4", id: "ans" },
  { src: "/images/answers/a5.png", name: "5", id: "ans" },
  { src: "/images/answers/a6.png", name: "6", id: "ans" },
  { src: "/images/answers/a7.png", name: "7", id: "ans" },
  { src: "/images/answers/a8.png", name: "8", id: "ans" },
  { src: "/images/answers/a9.png", name: "9", id: "ans" },
  { src: "/images/questions/q10.png", name: "10", id: "quest" },
  { src: "/images/questions/q11.png", name: "11", id: "quest" },
  { src: "/images/questions/q12.png", name: "12", id: "quest" },
  { src: "/images/questions/q13.png", name: "13", id: "quest" },
  { src: "/images/questions/q14.png", name: "14", id: "quest" },
  { src: "/images/questions/q15.png", name: "15", id: "quest" },
  { src: "/images/questions/q16.png", name: "16", id: "quest" },
  { src: "/images/answers/a10.png", name: "10", id: "ans" },
  { src: "/images/answers/a11.png", name: "11", id: "ans" },
  { src: "/images/answers/a12.png", name: "12", id: "ans" },
  { src: "/images/answers/a13.png", name: "13", id: "ans" },
  { src: "/images/answers/a14.png", name: "14", id: "ans" },
  { src: "/images/answers/a15.png", name: "15", id: "ans" },
  { src: "/images/answers/a16.png", name: "16", id: "ans" },
];

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
            {qa.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name}
                  src={item.src}
                  id={item.id}
                />
              );
            })}
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
