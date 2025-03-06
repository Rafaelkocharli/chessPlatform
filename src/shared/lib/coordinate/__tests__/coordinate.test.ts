import Coordinate from "../coordinate.ts";
import { InvalidChessNotationError, InvalidCoordinateError } from "../errors.ts";

describe('Coordinate class test', () => {
    describe('Coordinate creation', () => {
        test('Must work with array', () => {
            const coordinate = new Coordinate([0, 2]);
            expect(coordinate.chessNotation).toBe('a3');
            expect(coordinate.coordinates).toEqual([0, 2]);
            expect(coordinate.x).toBe(0);
            expect(coordinate.y).toBe(2);
        });

        test('Must work with x and y', () => {
            const coordinate = new Coordinate(0, 0);
            expect(coordinate.chessNotation).toBe('a1');
            expect(coordinate.coordinates).toEqual([0, 0]);
            expect(coordinate.x).toBe(0);
            expect(coordinate.y).toBe(0);
        });

        test('Must correctly with chess notation', () => {
            const coordinate = new Coordinate('c4');
            expect(coordinate.chessNotation).toBe('c4');
            expect(coordinate.coordinates).toEqual([2, 3]);
            expect(coordinate.x).toBe(2);
            expect(coordinate.y).toBe(3);
        });
    });

    describe('Error handling', () => {
        test('Should throw InvalidCoordinateError for out-of-range coordinates', () => {
            expect(() => new Coordinate([0, 9])).toThrow(InvalidCoordinateError);
            expect(() => new Coordinate([8, 5])).toThrow(InvalidCoordinateError);
            expect(() => new Coordinate([-1, 5])).toThrow(InvalidCoordinateError);
        });

        test('Should throw InvalidChessNotationError for invalid chess notation', () => {
            expect(() => new Coordinate('a')).toThrow(InvalidChessNotationError);
            expect(() => new Coordinate('ab9')).toThrow(InvalidChessNotationError);
            expect(() => new Coordinate('i1')).toThrow(InvalidChessNotationError);
        });

        test('Should throw InvalidCoordinateError for invalid input type', () => {
            expect(() => new Coordinate(null)).toThrow(InvalidCoordinateError);
            expect(() => new Coordinate(undefined)).toThrow(InvalidCoordinateError);
            expect(() => new Coordinate({ x: 0, y: 0 })).toThrow(InvalidCoordinateError);
        });
    });

    describe('Boundary values', () => {
        test('Should work with boundary values', () => {
            expect(new Coordinate([0, 0]).chessNotation).toBe('a1');
            expect(new Coordinate([7, 7]).chessNotation).toBe('h8');
            expect(new Coordinate([0, 7]).chessNotation).toBe('a8');
            expect(new Coordinate([7, 0]).chessNotation).toBe('h1');
        });
    });

    describe('Immutable properties', () => {
        test('Should be immutable', () => {
            const coordinate = new Coordinate([1, 2]);

            expect(() => (coordinate as any).x = 3).toThrow();
            expect(() => (coordinate as any).y = 4).toThrow();
            expect(() => (coordinate as any).coordinates = [5, 6]).toThrow();
        });
    });
});