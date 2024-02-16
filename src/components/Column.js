import React from 'react'
import TaskList from './TaskList'

const Column = () => {
  return (
    <div className="Column">
        <TaskList status={0} />
        <TaskList status={1} />
        <TaskList status={2} />
    </div>
  )
}

export default Column