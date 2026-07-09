import { useState } from 'react'
import type { Task } from './types/task'

function App() {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, name: "Criar o app", completed: true} // example task
  ])

  return (
    <>
      <h2>Tasks</h2>
      <ul className='mainTaskList'>
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
