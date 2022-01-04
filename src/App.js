import React, {useState} from 'react'
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import styled from "styled-components"


const Header = styled.header`

  text-align: center;
`

const Form = styled.header`
  text-align: center;
  
`

const  Task = styled.div`
  margin: auto;
  text-align: center;
  width: 310px;
`


function App() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false

            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = () => {

    }

    return (
        <div className="App">
            <Header>
                <h1>Список задач {todos.length}</h1>
            </Header>
            <Form>
                <ToDoForm addTask={addTask}/>
                {todos.map((todo) => {
                    return (
                        <Task>
                            <ToDo
                                todo={todo}
                                key={todos.id}
                                toggleTask={handleToggle}
                                removeTask={removeTask}
                            />
                        </Task>
                    )
                })}
            </Form>
        </div>
    );
}

export default App;
