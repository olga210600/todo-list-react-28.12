import React, {useState} from 'react'
import styled from "styled-components"

const Input = styled.input`
  width: 250px;
  height: 30px;
  box-sizing: border-box;
  border: solid 2px green;
`
const  AddButton = styled.button`
  width: 50px;
  height: 30px;
  box-sizing: border-box;
  margin-left: 5px;
  background: green;
  color: white;
  font-size: 15px;
  border: none;

`

const ToDoForm = ({addTask} ) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Ввелите зеачение'
            />
            <AddButton>Add</AddButton>
        </form>

    )
}

export default ToDoForm