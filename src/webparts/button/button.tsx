import * as React from 'react';
// Could do this and have the props as an interface..
export interface buttonProps {
    onClick?:()=>{},
    onKeyDown?:()=>{},
    text: string,
    hidden?:boolean,
    ariaLabel?:string,
    id?:string,
    role?:string,
    type?:string,
    disabled?:boolean,
}

export class button extends React.Component<buttonProps,any> {

  public constructor(props) {
    super(props);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  public render() {
    return (
    <button 
        onClick={this.onClick}
        onKeyDown={this.handleOnKeyDown}
        hidden={this.props.hidden}
        aria-label={this.props.ariaLabel}
        id={this.props.id}
        role={this.props.role}
        type={this.props.type}
        disabled={this.props.disabled}
    >
        {this.props.text}
    </button>
    );
  }

  // pass in how to handle the keydown through the props
  private handleOnKeyDown(): void {
      if (this.props.onKeyDown && this.props.type !== "Submit"){
        this.props.onKeyDown();
      }
  }
  // pass in how to handle the onClick through the props
  private onClick(): void {
      if (this.props.onClick && this.props.type !== "Submit"){
        this.props.onClick();
      }
  }
}