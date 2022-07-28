import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from  "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [isValidInput, setIsValidInput] = useState(true)
  //const [labelStyleObject, setLabelStyleObject] = useState({ color: "black" })
  //const [inputStyleObject, setInputStyleObject] = useState({ borderColor: "black" })

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)

    if(event.target.value.trim().length > 0)
      setIsValidInput(true)

  };

  const formSubmitHandler = (event) => {
    event.preventDefault()

    if (enteredValue.trim().length === 0) {
      setIsValidInput(false)
      return;
    }

    props.onAddGoal(enteredValue)
    setIsValidInput(true)
    setEnteredValue("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
     
      <div className={`${styles['form-control']} ${!isValidInput && styles.invalid}`}>
        <label>Course Goal</label>
        <input
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
