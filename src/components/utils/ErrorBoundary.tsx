import { Component } from 'react';

class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, message: '' };
  }
  static getDerivedStateFromError() {
    //update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.log('error', error);
    this.setState({ message: error.toString() });
  }

  render() {
    const { message } = this.state;
    //render fallback ui if exception/error occured
    if (this.state.hasError) {
      return (
        <>
          <main title="Something went wrong" />
          <div>
            <div className="inte-flex intel-flex--align-center intel-flex--distribute-center inte-flex--spacing-Extraloose inte-flex--vertical     ">
              <div className="inte-flex__item">
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/bug+fixing+fix+repair+seo+spider+tools+icon-1320196668193986777.png"
                  height="200"
                  alt="errorImage"
                />
              </div>
              <div className="inte-flex__item">
                <h3 className="inte__Heading--Medium   none">
                  {message ?? 'Something went wrong.'}
                </h3>
              </div>
              <div className="inte-flex__item">
                <h3 className="inte__text--medium   none">We are fixing the bug</h3>
              </div>
              <div className="inte-flex__item">
                <button
                  className="inte-btn inte__plain-btn inte-plain-dark-btn"
                  onClick={() => window.history.back()}
                >
                  <span className="inte__text">Go Back</span>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
    //render ui if there is no exception/error
    return this.props.children;
  }
}

export default ErrorBoundary;
