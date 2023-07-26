class ResponseError extends Error {
  statusCode: number;
  isOperational: boolean;
  constructor(statusCode, isOperational = true) {
    super();
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

class ApiError extends ResponseError {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
