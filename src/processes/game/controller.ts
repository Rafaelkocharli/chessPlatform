import {BlackFactory, Empty, Piece, TPiece, WhiteFactory} from "../../entities";
import Coordinate from "../../shared/lib/coordinate";

const whiteFactory = new WhiteFactory()
const blackFactory = new BlackFactory()

const PIECES: {[key: string]: (coordinate: Coordinate) => Piece} = {
    E: (coordinate: Coordinate) => new Empty(coordinate),
    WN: (coordinate: Coordinate) => whiteFactory.createKnight(coordinate),
    BN: (coordinate: Coordinate) => blackFactory.createKnight(coordinate)
}

function initBoardFromMatrix(matrix :string[][]): TPiece {

}