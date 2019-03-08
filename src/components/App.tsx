import * as React from "react";
import TaskForm from "./TaskForm";
import { ITask } from "./Task";
import TaskList from "./TaskList";

export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: []
    };
    this.deleteTask = this.deleteTask.bind(this);

  }

  addNewTask(task: ITask) {
    this.setState(
      {
        tasks: [...this.state.tasks, task]
      },
      () => console.log(this.state)
    );
  }

  deleteTask(id: number) {
    const tasks: ITask[] = this.state.tasks.filter(
      (task: ITask) => task.id !== id
    )
    this.setState({tasks});
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            {this.props.title}
          </a>
        </nav>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={this.addNewTask.bind(this)} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <TaskList 
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface IProps {
  title: string;
}

interface IState {
  tasks: ITask[];
}
