import { Pawn, Rook, Knight, Bishop, Queen, King } from "../model/piece";
import { Color } from "../model/types";

interface IProps {
  name: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";
  color: Color;
}

const PIECES = {
  pawn: Pawn,
  rook: Rook,
  knight: Knight,
  bishop: Bishop,
  queen: Queen,
  king: King,
};

export default function Piece({ name, color }: IProps) {
  const piece = new PIECES[name](color);

  return <div>{piece.notation}</div>;
}
