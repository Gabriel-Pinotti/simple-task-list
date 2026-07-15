import { useState, useEffect } from 'react'
import type { Task } from './types/task'

function App() {
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const saved = localStorage.getItem("taskList")
    return JSON.parse(saved || "[]")
  })
  const [taskInputField, setTaskInputField] = useState<string>("")

  function handleConfirmListAdd(event: React.SyntheticEvent) {
    event.preventDefault()
    const taskName = taskInputField.trim()
    if (taskName === "") { return }
    setTaskList([ ...taskList, {id: Date.now(), name: taskName, completed: false}])
    setTaskInputField("")
  }
  
  function handleDeleteTask(id: number) {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }
  
  function handleTaskCheck(id: number) {
    setTaskList(
      taskList.map((task) => (
        task.id === id
          ? {...task, completed: !task.completed}
          : task
      ))
    )
  }

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  return (
    <>
      <div className='task-input'>
        <h2>Tasks</h2>
        <form onSubmit={(event) => handleConfirmListAdd(event)}>
          <input className='task-input-field' onChange={(event) => (setTaskInputField(event.target.value))} value={taskInputField}/>
          <button type='submit'>Adicionar</button>
        </form>
      </div>

      <ul className='main-task-list'>
        {
          taskList.map((currentTask) => (
            <li key={currentTask.id}>
              <input type='checkbox' checked={currentTask.completed} id={"task-checkbox" + currentTask.id} onChange={() => handleTaskCheck(currentTask.id)}/>
              <label htmlFor={"task-checkbox" + currentTask.id}>
                {currentTask.name} | status: {currentTask.completed ? "completo" : "incompleto"}
              </label>
              <button onClick={() => handleDeleteTask(currentTask.id)} >Deletar</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
