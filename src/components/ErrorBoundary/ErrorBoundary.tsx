import React, { Component } from 'react';
import type {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from '../../types/interfaces';
import { Details, Message, Title, Wrapper } from './ErrorBoundary.styled';

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo: errorInfo.componentStack || null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Title>Что-то пошло не так.</Title>
          <Message>
            Пожалуйста, перезагрузите страницу или попробуйте позже.
          </Message>
          {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
            <Details>{this.state.errorInfo}</Details>
          )}
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
