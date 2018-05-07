import React, { Component } from "react";
import HiitTimer from "./HiitTimer";
import exercises from "./exercises.json";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      exerciseDuration: 2,
      exercises,
      currentExercise: exercises[0],
      currentDuration: 0,
      done: false
    };
  }

  startTimer() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  toggleTimer = () => {
    if (this.timerId) this.stopTimer();
    else this.startTimer();
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  tick() {
    this.setState(state => {
      const total = state.total + 1;
      const currentIndex = Math.floor(total / this.state.exerciseDuration);

      if (currentIndex >= state.exercises.length) {
        this.stopTimer();
        return {
          done: true
        }
      }

      return {
        total,
        currentExercise: exercises[currentIndex],
        currentDuration: total % this.state.exerciseDuration
      };
    });
  }

  render() {
    const { title, imageSource } = this.state.currentExercise;
    return (
      <div className="App">
        {this.state.done ? (
          <h1>Done</h1>
        ) : (
          <HiitTimer
            title={title}
            imageSource={imageSource}
            currentDuration={this.state.currentDuration}
            totalDuration={this.state.exerciseDuration}
            onClick={this.toggleTimer}
          />
        )}
      </div>
    );
  }
}

export default App;
