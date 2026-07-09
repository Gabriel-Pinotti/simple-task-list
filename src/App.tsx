import { useState } from 'react'
import type { Task } from './types/task'

function App() {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, name: "Criar o app", completed: true} // example task
  ])
  const [taskInput, setTaskInput] = useState<string>("")

  return (
    <>
      <div className='task-input'>
        <h2>Tasks</h2>
        <input className='task-input-field' onChange={(event) => (setTaskInput(event.target.value))} value={taskInput}/>
        <button>Adicionar</button>
      </div>

      <ul className='main-task-list'>
        {
          taskList.map((currentTask) => (
            <li key={currentTask.id}>{currentTask.name} | status: {currentTask.completed ? "completo" : "incompleto"}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
