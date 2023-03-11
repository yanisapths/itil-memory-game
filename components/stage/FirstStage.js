import React, { Component } from "react";
import Place from "./Place";

export class FirstStage extends Component {
  state = {
    step: 1,
    place: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { step,place } = this.state;
    const values = {place}
    const { score, budget } = this.props;
    switch (step) {
      case 1:
        return (
          <Place
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          score={score}
          budget={budget}
        />
        );
    }
  }
}

export default FirstStage;
