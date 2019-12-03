import React, { Component } from 'react';
/* If you built out your React application in production, you would see the fallback interface. 
There is however a workaround I found in chrome browsers (I do not know yet if it works on other 
    browsers). Just click the close button at the right of the error message to reveal the unbroken 
    application like it would in production environment. 
    
    Error boundaries do not catch errors for:
        Event handlers.
        setTimeout or requestAnimationFramecallbacks.
        Server side rendering.
        Errors thrown in the error boundary itself, rather than in its children.*/
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
