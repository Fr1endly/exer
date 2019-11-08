import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises'
import { muscles, exercises } from './store';
import './App.css';

export default class extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    // returns [ "muscle", [exercisesObject]]
    return Object.entries(this.state.exercises.reduce((sortedExercises, i) => {
      const { muscles } = i;// muscles: shoulders etc
      sortedExercises[ muscles ] = sortedExercises[ i ]
        ? [...sortedExercises[muscles], i]
        : [ i ] 
      console.log(sortedExercises[ i ])
      return sortedExercises
    }, {})) 
  }

  render () {
    const exercises = this.getExercisesByMuscles();
    return <Fragment>
            <Header />
            <Exercises
              exercises={exercises} /> 
            <Footer
             muscles={muscles}/>
          </Fragment>
  }
}
