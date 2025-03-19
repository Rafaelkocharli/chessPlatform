import Coordinate from "../../../shared/lib/coordinate";

type TNotation = 'R' | 'Q' | 'K' | 'N' | 'B' | 'P' | 'E';
type TColor = 'WHITE' | 'BLACK' | null;
type TPiece = Piece[][];

abstract class Piece {
    public coordinate: Coordinate;

    public abstract notation: TNotation;
    public abstract unicode: string;
    public abstract color: TColor;

    constructor(coordinate: Coordinate) {
        this.coordinate = coordinate;
    }

    public abstract getPossibleMoves(): Coordinate[]
}

abstract class Knight extends Piece {
    public notation: TNotation = 'N';

    public getPossibleMoves(): Coordinate[] {
        const result: Coordinate[] = []
        const possibleAxis = [
            [-1, 2],
            [1, 2],
            [-1, -2],
            [1, -2],
            [-2, 1],
            [2, 1],
            [-2, -1],
            [2, -1],
        ]

        for (let i = 0; i < possibleAxis.length; i++) {
            const axis = possibleAxis[i];
            const x = this.coordinate.x + axis[0];
            const y = this.coordinate.y + axis[1];

            if (!(x > 7 || x < 0 || y < 0 || y > 7)) {
                result.push(new Coordinate(x, y));
            }
        }
        return result;
    }
}

class Empty extends Piece {
    public notation: TNotation = 'E';
    public unicode: string = ' ';
    public color: TColor = null;

    constructor(coordinate: Coordinate) {
        super(coordinate);
    }

    getPossibleMoves(): Coordinate[] {
        return [];
    }
}

class WhiteKnight extends Knight {
    public unicode: string = '♘';
    public color: TColor = 'WHITE';

    constructor(coordinate: Coordinate) {
        super(coordinate);
    }
}

class BlackKnight extends Knight {
    public unicode: string = '♞';
    public color: TColor = 'BLACK';

    constructor(coordinate: Coordinate) {
        super(coordinate);
    }
}

// export class WhitePawn extends Piece {}
// export class WhiteKing extends Piece {}
// export class WhiteRook extends Piece {}
// export class WhiteQueen extends Piece {}
// export class WhiteBishop extends Piece {}


// export class BlackPawn extends Piece {}
// export class BlackKing extends Piece {}
// export class BlackRook extends Piece {}
// export class BlackQueen extends Piece {}
// export class BlackBishop extends Piece {}

abstract class AbstractFactory {
    public abstract createKnight(coordinate: Coordinate): Knight
}

class WhiteFactory extends AbstractFactory {
    public createKnight(coordinate: Coordinate): Knight {
        return new WhiteKnight(coordinate);
    }
}

class BlackFactory extends AbstractFactory {
    public createKnight(coordinate: Coordinate): Knight {
        return new BlackKnight(coordinate);
    }
}

export {WhiteFactory, BlackFactory, Piece, Empty};
export type {TPiece};