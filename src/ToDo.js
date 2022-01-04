import React from 'react'
import styled from "styled-components"


const Wrapper = styled.div`
   display: flex;
  margin: 10px auto 0;
  

  
`

const Text = styled.div`
  text-align: left;
    width: 253px;
  height: 36px;
    color: white;
    font-size: 20px;
  background: green;
  padding-top: 6px;
  box-sizing: border-box;
  padding-left: 15px;
  margin: auto;

`

const Close = styled.div`
  width: 50px;
  font-size: 25px;
  height: 36px;
  padding: 0;
  color: white;
  background: green;
  box-sizing: border-box;
  text-align: center;
`

const ToDo = ({todo, toggleTask, removeTask}) => {
    return (
        <Wrapper key={todo.id} className='item-todo'>
            <Text className={todo.complete ? 'item-text strike' : 'item-text'}
                 onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </Text>

            <Close className='item-delete' onClick={() => removeTask(todo.id)}>
                x
            </Close>
        </Wrapper>
    )
}

export default ToDo