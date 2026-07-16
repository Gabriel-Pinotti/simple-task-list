import type { Task } from "../../types/task"

type TaskItemProps = {
    task: Task
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export default function TaskItem(props: TaskItemProps) {
    return (
        <li>
            <input type='checkbox' checked={props.task.completed} id={"task-checkbox" + props.task.id} onChange={() => props.onToggle(props.task.id)}/>
            <label htmlFor={"task-checkbox" + props.task.id}>
                {props.task.name} | status: {props.task.completed ? "completo" : "incompleto"}
            </label>
            <button onClick={() => props.onDelete(props.task.id)} >Deletar</button>
        </li>
    )
}
