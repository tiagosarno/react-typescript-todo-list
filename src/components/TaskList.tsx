import * as React from "react";

// Interface
import { ITask } from "../interfaces/Task";

// CSS
import styles from "./TaskList.module.css";

export interface IAppProps {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

export default function App({ taskList, handleDelete, handleEdit }: IAppProps) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Difficulty: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não Tem tarefa na lista...</p>
      )}
    </>
  );
}
