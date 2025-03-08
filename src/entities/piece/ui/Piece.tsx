import { Pawn, Rook, Knight, Bishop, Queen, King } from "../model/piece";
import { Color } from "../model/types";
import Coordinate from "../../../shared/lib/coordinate/coordinate";

interface IProps {
  index: string;
  coordinates: Coordinate;
}

const PIECES = {
  P: Pawn,
  R: Rook,
  N: Knight,
  B: Bishop,
  Q: Queen,
  K: King,
};
type name = keyof typeof PIECES;

function getColorAndNameFromIndex(index: string): [Color, name] {
  const color = index[0] === "w" ? "white" : "black";
  const name = index[1];
  return [color, name as name];
}

export default function Piece({ index, coordinates }: IProps) {
  if (index === "") return <div></div>;
  const [color, name] = getColorAndNameFromIndex(index);
  const piece = new PIECES[name](color);

  return <div>{piece.notation}</div>;
}
