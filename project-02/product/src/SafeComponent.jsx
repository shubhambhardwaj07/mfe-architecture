import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("entered here");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by SafeComponent:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
