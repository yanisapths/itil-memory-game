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
      <main className={game.main}>
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
        <div className="flex justify-center -mt-48 items-center align-middle">
          <div className={game.content}>
            <div className={game.circle}>
              <h2>Chaing Dao</h2>
              <h3>Great Outdoors</h3>
              <div className={game.chiangdaoImg} />
            </div>
          </div>
          <div className={game.content}>
            <div className={game.circle}>
              <h2>Mon Jam</h2>
              <h3>Chilling in the wind</h3>
              <div className={game.monjamImg} />
            </div>
          </div>
          <div className={game.content}>
            <div className={game.circle}>
              <h2>Doi Pui</h2>
              <h3>Explore nature with me</h3>
              <div className={game.doipuiImg} />
            </div>
          </div>
          <div className={game.content}>
            <div className={game.circle}>
              <h2>Doi Inthanon</h2>
              <h3>Challenge in extreme forest</h3>
              <div className={game.doiinImg} />
            </div>
          </div>
        </div>
        <div className="flex justify-center -mt-12">
          <button className={styles.button} onClick={this.continue}>
            <p>NEXT</p>
          </button>
        </div>
      </main>
    );
  }
}

export default Place;
