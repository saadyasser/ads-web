"use client";
import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h1 className="text-4xl font-bold text-primary dark:text-secondary">
              Something went wrong
            </h1>
            <p className="mt-4 text-lg">
              We’re sorry for the inconvenience. Please try refreshing the page,
              or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 mt-6 font-semibold text-white transition-colors rounded bg-primary hover:bg-primary-hover"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
