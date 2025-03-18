import Coordinate from "../../../shared/lib/coordinate/coordinate";
import {
    getAvailableBishopMoves, getAvailableKingMoves,
    getAvailableKnightMoves,
    getAvailablePawnMoves, getAvailableQueenMoves,
    getAvailableRookMoves
} from "../helpers.ts";
import {useEffect} from "react";

interface IProps {
    index: string;
    callback: Function;
    coordinate: Coordinate;
}

interface Piece {
    black: string,
    white: string,
    getMoves: (coordinate: Coordinate, color: 'white' | 'black') => Coordinate[]
}

interface IPiece {
    P: Piece,
    K: Piece,
    N: Piece,
    B: Piece,
    R: Piece,
    Q: Piece,
}

const PIECES: IPiece = {
    P: {white: '♙', black: '♟', getMoves: (coordinate, color) => getAvailablePawnMoves(coordinate, color)},
    K: {white: '♔', black: '♚', getMoves: (coordinate) => getAvailableKingMoves(coordinate)},
    N: {white: '♘', black: '♞', getMoves: (coordinate) => getAvailableKnightMoves(coordinate)},
    B: {white: '♗', black: '♝', getMoves: (coordinate) => getAvailableBishopMoves(coordinate)},
    R: {white: '♖', black: '♜', getMoves: (coordinate) => getAvailableRookMoves(coordinate)},
    Q: {white: '♕', black: '♛', getMoves: (coordinate) => getAvailableQueenMoves(coordinate)}
}

function getColorAndNameFromIndex(index: string): [string, string, boolean] {
    const color = index[0] === "W" ? "white" : "black";
    const name = index[1];
    const isSelected = index.includes('S');
    return [color, name, isSelected];
}

export default function Piece({index, callback, coordinate}: IProps) {
    useEffect(() => {
        callback(getAvailableKnightMoves(coordinate))
    }, []);
    if (index === "") return <div></div>;
    const [color, name, isSelected] = getColorAndNameFromIndex(index);
    //@ts-expect-error ytf
    const piece = PIECES[name]


    return <div>{piece[color]} {isSelected}</div>;
}
