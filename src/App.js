import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises'
import { muscles, exercises } from './store';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';


export default class extends Component {
  
  state = {
    exercises,// [{}, {}, {}]
    exercise: {},
    editMode: false
  }

  getExercisesByMuscles() {
    // returns [ "muscle", [exercisesObject]]
    const initExercises = muscles.reduce((exercises, category)=>({
       ...exercises,
       [category]: []
    }), {})
    return Object.entries(
      this.state.exercises.reduce((exercises, i) => {
        const { muscles } = i; // muscles: shoulders etc
        exercises[ muscles ] = [...exercises[muscles], i]
        return exercises
      }, initExercises)
    )
  }

  handleSelectedCategory = category => 
    this.setState({category})
    
  handleSelectedExercise = id => 
    this.setState(( {exercises} ) => ({
      exercise:  exercises.find( i => i.id === id ),
      editMode: false
    }))

  handleCreateExercise = exercise => 
      this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  
  handleDeleteExercise = id => 
    this.setState( ({ exercises, exercise, editMode })=> ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))


  handleEditSelectExercise = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find( i => i.id === id),
      editMode: true
    }))
  }
   
  handleEditExercise = exercise => 
    this.setState(({ exercises })=>({ 
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise: {},
      editMode: false
    }))
  
  render () {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode} = this.state;

    return <Fragment>
              <CssBaseline/>
              <Header
                muscles={muscles}
                onCreateExercise={this.handleCreateExercise}
              />
              <Exercises
                editMode={editMode}
                exercise={exercise}
                category={category}
                exercises={exercises}
                muscles={muscles}
                onSelect={this.handleSelectedExercise}
                onDelete={this.handleDeleteExercise}
                onSelectEdit={this.handleEditSelectExercise}
                onEdit={this.handleEditExercise}
                /> 
              <Footer
                category={category}
                muscles={muscles}
                onSelect={this.handleSelectedCategory}
              />
          </Fragment>
  }
}
