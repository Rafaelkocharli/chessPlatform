import {BlackFactory, Empty, Piece, TPiece, WhiteFactory} from "../../entities";
import Coordinate from "../../shared/lib/coordinate";

const whiteFactory = new WhiteFactory()
const blackFactory = new BlackFactory()

const PIECES: {[key: string]: (coordinate: Coordinate) => Piece} = {
    E: (coordinate: Coordinate) => new Empty(coordinate),
    WN: (coordinate: Coordinate) => whiteFactory.createKnight(coordinate),
    BN: (coordinate: Coordinate) => blackFactory.createKnight(coordinate)
}

export function initBoardFromMatrix(matrix: string[][]): TPiece {
    const result: TPiece = [];

    for (let i = 0; i < matrix.length; i++) {
        result.push([])
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(PIECES[matrix[i][j]](new Coordinate(i, j)));
        }
    }

    return result;
}