import * as React from "react";
import { ITask } from './Task';

class TaskForm extends React.Component<ITaskFormProps, any> {
  constructor(props: ITaskFormProps) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  getCurrentTimestamp(): number{
    const date: Date = new Date();
    return date.getTime();
  }

  handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: ITask = {
      id: this.getCurrentTimestamp(),
      title: this.state.title,
      description: this.state.description,
      completed: false
    };
    this.props.addNewTask(newTask);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state);
  }
  render() {
    return (
      <div className="card card-body">
        <form onSubmit={e => this.handleNewTask(e)}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={e=> this.handleInputChange(e)}
              className="form-control"
              placeholder="Task Title"
            />
          </div>
          <div className="form-group">
            <textarea
            name="description"
              onChange={e=> this.handleInputChange(e)}
              className="form-control"
              cols={10}
              rows={10}
              placeholder="Task Description"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {" "}
            Save
          </button>
        </form>
      </div>
    );
  }
}

interface ITaskFormProps {
  addNewTask: (Task:ITask) => void;
}
export default TaskForm;
