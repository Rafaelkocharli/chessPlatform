import Coordinate from "../../shared/lib/coordinate";
import {Color} from "./types.ts";

export function getAvailableKnightMoves(coordinate: Coordinate): Coordinate[] {
    const result: Coordinate[] = []
    const vectors = [
        {x: 2, y: 1},
        {x: 2, y: -1},
        {x: 1, y: 2},
        {x: 1, y: -2},
        {x: -1, y: 2},
        {x: -1, y: -2},
        {x: -2, y: 1},
        {x: -2, y: -1}
    ]
    vectors.forEach((vector) => {
        const c = coordinate.clone();

        if (c.x + vector.x >= 0 && c.x + vector.x <= 7  && c.y + vector.y >= 0 && c.y + vector.y <= 7) {
            c.x += vector.x
            c.y += vector.y
            result.push(c)
        }
    })

    return result;
}

export function getAvailableKingMoves(coordinate: Coordinate): Coordinate[] {
    const result: Coordinate[] = []
    const vectors = [
        {x: 1, y: 1},
        {x: 1, y: 0},
        {x: 1, y: -1},
        {x: 0, y: 1},
        {x: 0, y: -1},
        {x: -1, y: 0},
        {x: -1, y: 1},
        {x: -1, y: -1}
    ]
    vectors.forEach((vector) => {
        const c = coordinate.clone();
        if (c.x + vector.x >= 0 && c.x + vector.x && c.y + vector.y >= 0 && c.y + vector.y) {
            c.x += vector.x
            c.y += vector.y
            result.push(c)
        }
    })

    return result;
}

export function getAvailableBishopMoves(coordinate: Coordinate): Coordinate[] {
    const result: Coordinate[] = []
    const vectors = [
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3},
        {x: 4, y: 4},
        {x: 5, y: 5},
        {x: 6, y: 6},
        {x: 7, y: 7},
        {x: -1, y: -1},
        {x: -2, y: -2},
        {x: -3, y: -3},
        {x: -4, y: -4},
        {x: -5, y: -5},
        {x: -6, y: -6},
        {x: -7, y: -7},
        {x: -1, y: 1},
        {x: -2, y: 2},
        {x: -3, y: 3},
        {x: -4, y: 4},
        {x: -5, y: 5},
        {x: -6, y: 6},
        {x: -7, y: 7},
        {x: 1, y: -1},
        {x: 2, y: -2},
        {x: 3, y: -3},
        {x: 4, y: -4},
        {x: 5, y: -5},
        {x: 6, y: -6},
        {x: 7, y: -7},
    ]
    vectors.forEach((vector) => {
        const c = coordinate.clone();
        if (c.x + vector.x >= 0 && c.x + vector.x && c.y + vector.y >= 0 && c.y + vector.y) {
            c.x += vector.x
            c.y += vector.y
            result.push(c)
        }
    })

    return result;
}

export function getAvailableRookMoves(coordinate: Coordinate): Coordinate[] {
    const result: Coordinate[] = []
    const vectors = [
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0, y: 3},
        {x: 0, y: 4},
        {x: 0, y: 5},
        {x: 0, y: 6},
        {x: 0, y: 7},
        {x: 0, y: -1},
        {x: 0, y: -2},
        {x: 0, y: -3},
        {x: 0, y: -4},
        {x: 0, y: -5},
        {x: 0, y: -6},
        {x: 0, y: -7},
        {x: 1, y: 0},
        {x: 1, y: 0},
        {x: 2, y: 0},
        {x: 3, y: 0},
        {x: 4, y: 0},
        {x: 5, y: 0},
        {x: 6, y: 0},
        {x: 7, y: 0},
        {x: -1, y: 0},
        {x: -2, y: 0},
        {x: -3, y: 0},
        {x: -4, y: 0},
        {x: -5, y: 0},
        {x: -6, y: 0},
        {x: -7, y: 0}
    ]
    vectors.forEach((vector) => {
        const c = coordinate.clone();
        if (c.x + vector.x >= 0 && c.x + vector.x && c.y + vector.y >= 0 && c.y + vector.y) {
            c.x += vector.x
            c.y += vector.y
            result.push(c)
        }
    })

    return result;
}

export function getAvailableQueenMoves(coordinate: Coordinate): Coordinate[] {

    return [...getAvailableBishopMoves(coordinate), ...getAvailableRookMoves(coordinate)];
}

export function getAvailablePawnMoves(coordinate: Coordinate, color: Color): Coordinate[] {
    const result: Coordinate[] = []
    const c = coordinate.clone()
    const direction = color === 'white' ? -1 : 1;
    c.y += 1 * direction
    result.push(c)
    if (coordinate.y === 2 && color === 'white' || coordinate.y === 7 && color === 'black') {
        const c = coordinate.clone()
        c.y += 2 * direction
        result.push(c)
    }

    return result;
}
