//code written from reactjs.org/docs/error-boundaries

import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(`Error boundary caught an error ${error}, ${errorInfo}`);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
      //or you could use the navigate from reach router like so
      //setTimeout(() => navigate("/"), 5000)
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong. <Link to="/">Click here</Link> to return to the
          home page or wait 5 seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
