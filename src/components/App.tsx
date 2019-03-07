import * as React from "react";

export class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

interface IProps {
  title: string;
}

interface IState {
  tasks: [];
}