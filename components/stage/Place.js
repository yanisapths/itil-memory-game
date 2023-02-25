import React, { Component } from "react";
import styles from "../../styles/Intro.module.css";
import game from "../../styles/Game.module.css";

export class Place extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { handleChange, score, budget } = this.props;
    return (
      <main className="min-h-[100vh]">
        <div className={styles.points}>
          <p>
            <span className="text-xs font-light text-gray-100">Score: </span>
            {score} 🔥
          </p>
          <p>
            <span className="text-xs font-light text-gray-100">Budget: </span>
            {budget} 🪙
          </p>
        </div>
        <div className="flex justify-center items-center align-middle pt-12">
          <div>
            <div className="flex justify-between gap-10 pt-10">
              <div className="w-1/3">
                <div className={game.img}></div>
              </div>
              <div className="w-1/3">
                <div className={game.img}></div>
              </div>
              <div className="w-1/3">
                <div className={game.img}></div>
              </div>
            </div>
            <div className="flex justify-center pt-12">
              <button className={styles.button} onClick={this.continue}>
                <p>NEXT</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Place;
