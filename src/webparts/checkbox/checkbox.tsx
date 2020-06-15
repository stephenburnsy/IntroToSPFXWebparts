import * as React from 'react';
// Could do this and have the props as an interface..
export interface checkboxProps {
    labelOn: string,
    labelOff: string
}
export interface checkboxState {
    isChecked: boolean
}

export class checkboxWithLabel extends React.Component<checkboxProps,checkboxState> {

  public constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  public onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  public render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}