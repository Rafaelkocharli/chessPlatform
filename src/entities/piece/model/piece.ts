import { Color } from "./types";

export abstract class Piece {
  public abstract color: Color;
  public abstract notation: string;
}

export class Pawn extends Piece {
  public color: Color;
  public notation: string;

  constructor(color: Color) {
    super();
    this.color = color;
    this.notation = "P";
  }
}

export class Knight extends Piece {
  public color: Color;
  public notation: string;

  constructor(color: Color) {
    super();
    this.color = color;
    this.notation = "N";
  }
}

export class Bishop extends Piece {
  public color: Color;
  public notation: string;

  constructor(color: Color) {
    super();
    this.color = color;
    this.notation = "B";
  }
}

export class Rook extends Piece {
  public color: Color;
  public notation: string;

  constructor(color: Color) {
    super();
    this.color = color;
    this.notation = "R";
  }
}

export class Queen extends Piece {
  public color: Color;
  public notation: string;

  constructor(color: Color) {
    super();
    this.color = color;
    this.notation = "Q";
  }
}

export class King extends Piece {
  public color: Color;
  public notation: string;

  constructor(color: Color) {
    super();
    this.color = color;
    this.notation = "K";
  }
}
