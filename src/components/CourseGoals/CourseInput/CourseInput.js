import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [labelStyleObject, setLabelStyleObject] = useState({ color: "black" })
  const [inputStyleObject, setInputStyleObject] = useState({ borderColor: "black" })

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)

    if(event.target.value.trim().length > 0)
      markCorrectInput()

  };

  const formSubmitHandler = (event) => {
    event.preventDefault()

    if (enteredValue.trim().length === 0) {
      markBadInput()
      return;
    }

    props.onAddGoal(enteredValue)
    markCorrectInput()
    setEnteredValue("")
  };

  const markCorrectInput = () => {
    setLabelStyleObject((previousState) => ({
      ...previousState,
      color: "black"
    }));

    setInputStyleObject((previousState) => ({
      ...previousState,
      borderColor: "black",
      background: "transparent"
    }));
  }

  const markBadInput = () => {
    setLabelStyleObject((previousState) => ({
      ...previousState,
      color: "red"
    }));

    setInputStyleObject((previousState) => ({
      ...previousState,
      borderColor: "red",
      background: "salmon" //no camel case in "background" !
    }));
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={labelStyleObject}>Course Goal</label>
        <input
          style={inputStyleObject}
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
