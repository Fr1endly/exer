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
    return Object.entries(this.state.exercises.reduce((sortedExercises, i) => {
      const { muscles } = i;// muscles: shoulders etc
      sortedExercises[ muscles ] = sortedExercises[ i ]
        ? [...sortedExercises[muscles], i]
        : [ i ]   
      return sortedExercises
    }, {})) 
  }

  handleSelectedCategory = category => {
    this.setState({category})
  }  

  handleSelectedExercise = id => {
    this.setState(( {exercises} ) => ({
      exercise:  exercises.find( i => i.id === id )
    }))
  }
  
  render () {
    const exercises = this.getExercisesByMuscles(),
      {category, exercise} = this.state;

    return <Fragment>
            <Header />
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
