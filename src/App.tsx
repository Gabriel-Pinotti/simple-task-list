import { useState } from 'react'
import './App.css'

interface Task {
  id: number
  name: string
  completed: boolean
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([])

  return (
    <></>
  )
}

export default App
