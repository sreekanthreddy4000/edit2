const Task = ({task}) => (
  <li>
    <p>{task.displayText}</p>
    <button key={task.optionId}>{task.displayText}</button>
  </li>
)

export default Task
