import { Component } from 'react';

class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, message: '' };
  }
  static getDerivedStateFromError(error: any) {
    //update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.log('error', error);
    this.setState({ message: error.toString() });
  }

  render() {
    const { message } = this.state;
    //render fallback ui if exception/error
    if (this.state.hasError) {
      return <>Fallback UI {message}</>;
    }
    //render ui if there is no exception/error
    return this.props.children;
  }
}

export default ErrorBoundary;
