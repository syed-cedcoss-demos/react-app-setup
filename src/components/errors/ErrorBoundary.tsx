import React from "react";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, message: "" };
  }
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    this.setState({ message: error.toString() });
  }

  render() {
    const { message } = this.state;

    if (this.state.hasError) {
      return <>error Fall back ui</>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
