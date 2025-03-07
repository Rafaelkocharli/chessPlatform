import { InvalidChessNotationError, InvalidCoordinateError } from "./errors";
import { Coord } from "./types";
import {
  areCoordinatesValid,
  getChessNotationFromCoordinates,
  getCoordinatesFromChessNotation,
  isChessNotationValid,
} from "./utils";

export default class Coordinate {
  private _x: number = 0;
  private _y: number = 0;

  constructor(x: number | string | Coord, y?: number) {
    this.initializeCoordinates(x, y);
  }

  private initializeCoordinates(x: number | string | Coord, y?: number): void {
    if (typeof x === "number") {
      this.setFromNumbers(x, y);
    } else if (typeof x === "string") {
      this.setFromChessNotation(x);
    } else if (Array.isArray(x)) {
      this.setFromArray(x);
    } else {
      throw new InvalidCoordinateError("Invalid input type");
    }
  }

  private setFromNumbers(x: number, y?: number): void {
    if (areCoordinatesValid(x, y)) {
      this._x = x;
      this._y = y as number;
    } else {
      throw new InvalidCoordinateError("Invalid coordinates");
    }
  }

  private setFromChessNotation(notation: string): void {
    if (isChessNotationValid(notation)) {
      const [xIndex, yIndex] = getCoordinatesFromChessNotation(notation);
      this._x = xIndex;
      this._y = yIndex;
    } else {
      throw new InvalidChessNotationError("Invalid chess notation");
    }
  }

  private setFromArray(coordinates: Coord): void {
    if (areCoordinatesValid(coordinates[0], coordinates[1])) {
      this._x = coordinates[0];
      this._y = coordinates[1];
    } else {
      throw new InvalidCoordinateError("Invalid coordinates");
    }
  }

  public get x(): number {
    return this._x;
  }

  public set x(x: number) {
    this.setFromNumbers(x, this._y);
  }

  public get y(): number {
    return this._y;
  }

  public set y(y: number) {
    this.setFromNumbers(this._x, y);
  }

  public get coordinates(): Coord {
    return [this._x, this._y];
  }

  public set coordinates(coordinates: Coord) {
    this.setFromArray(coordinates);
  }

  public get chessNotation(): string {
    return getChessNotationFromCoordinates(this._x, this._y);
  }

  public set chessNotation(notation: string) {
    this.setFromChessNotation(notation);
  }
}
