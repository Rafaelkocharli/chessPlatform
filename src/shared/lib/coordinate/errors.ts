export class InvalidCoordinateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidCoordinateError";
  }
}

export class InvalidChessNotationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidChessNotationError";
  }
}
