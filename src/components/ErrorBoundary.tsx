import React, { Component } from 'react';
import type {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from '../types/interfaces';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #d32f2f;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 20px;
  color: #555;
  font-weight: 600;
`;

const Details = styled.details`
  margin-top: 10px;
  white-space: pre-wrap;
  color: #b71c1c;
  font-family: monospace;
  font-size: 14px;
  font-weight: 400;
`;

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
