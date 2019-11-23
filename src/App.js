import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises'
import { muscles, exercises } from './store';
import './App.css';

export default class extends Component {
  
  state = {
    exercises,// [{}, {}, {}]
    exercise: {}
  }

  getExercisesByMuscles() {
    // returns [ "muscle", [exercisesObject]]
    return Object.entries(
      this.state.exercises.reduce((exercises, i) => {
        const { muscles } = i;// muscles: shoulders etc

      exercises[ muscles ] = exercises[ muscles ]
        ? [...exercises[muscles], i]
        : [ i ]
      return exercises
    }, {})
    )
  }

  handleSelectedCategory = category => {
    this.setState({category})
  }  

  handleSelectedExercise = id => {
    this.setState(( {exercises} ) => ({
      exercise:  exercises.find( i => i.id === id )
    }))
  }

  handleCreateExercise = exercise => {
      this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }
  
  render () {
    const exercises = this.getExercisesByMuscles(),
      {category, exercise} = this.state;

    return <Fragment>
            <Header
              muscles={muscles}
              onCreateExercise={this.handleCreateExercise}
            />
            <Exercises
              exercise={exercise}
              category={category}
              exercises={exercises}
              onSelect={this.handleSelectedExercise}
              /> 
            <Footer
              category={category}
              muscles={muscles}
              onSelect={this.handleSelectedCategory}
            />
          </Fragment>

  }
}
