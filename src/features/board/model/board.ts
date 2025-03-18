import {Piece} from '../../../entities/piece/model/piece'
import Coordinate from "../../../shared/lib/coordinate";

export class Board {
    private _view: Piece[][];

    constructor(view: Piece[][]) {
        this._view = view;
    }

    public movePiece(from: Coordinate, to: Coordinate) {
        const piece = this.getPiece(from);
        this.setPiece(to, piece);
    }

    public getPiece(from: Coordinate): Piece {
        return this._view[from.x][from.y];
    }

    public setPiece(from: Coordinate, piece: Piece) {
        this._view[from.x][from.y] = piece;
    }

    public get view(): Piece[][] {
        return this._view;
    }

    public set view(view: Piece[][]) {
        this._view = view;
    }
}