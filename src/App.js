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
    const initExercises = muscles.reduce((exercises, category)=>({
       ...exercises,
       [category]: []
    }), {})
    console.log(initExercises)
    return Object.entries(
      this.state.exercises.reduce((exercises, i) => {
        const { muscles } = i; // muscles: shoulders etc
        exercises[ muscles ] = [...exercises[muscles], i]
        return exercises
      }, initExercises)
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
  handleDeleteExercise = id => {
    this.setState( ({ exercises })=> ({
      exercises: exercises.filter(ex => ex.id !== id)
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
              onDelete={this.handleDeleteExercise}
              /> 
            <Footer
              category={category}
              muscles={muscles}
              onSelect={this.handleSelectedCategory}
            />
          </Fragment>

  }
}
