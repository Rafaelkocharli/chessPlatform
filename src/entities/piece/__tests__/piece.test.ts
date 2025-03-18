import {BlackFactory, WhiteFactory} from "../model/piece";
import Coordinate from "../../../shared/lib/coordinate";

describe('Piece module test', () => {
    const whiteFactory = new WhiteFactory();
    const blackFactory = new BlackFactory();

    describe('Knight test', () => {
        test('Knight creation test', () => {


            const whiteKnight = whiteFactory.createKnight(new Coordinate('a3'))
            expect(whiteKnight.coordinate.chessNotation).toBe('a3');
            expect(whiteKnight.color).toBe('WHITE');

            const blackKnight = blackFactory.createKnight(new Coordinate('c7'))
            expect(blackKnight.coordinate.chessNotation).toBe('c7');
            expect(blackKnight.color).toBe('BLACK');
        })
        test('Knight possible moves test', () => {
            const whiteKnight1 = whiteFactory.createKnight(new Coordinate('e4'));
            const moves1 = whiteKnight1.getPossibleMoves();

            expect(moves1.length).toBe(8);
            expect(moves1).toEqual(expect.arrayContaining([
                new Coordinate('d2'),
                new Coordinate('d6'),
                new Coordinate('f2'),
                new Coordinate('f6'),
                new Coordinate('c3'),
                new Coordinate('c5'),
                new Coordinate('g3'),
                new Coordinate('g5'),
            ]));

            const whiteKnight2 = whiteFactory.createKnight(new Coordinate('a1'));
            const moves2 = whiteKnight2.getPossibleMoves()

            expect(moves2.length).toBe(2);
            expect(moves2).toEqual(expect.arrayContaining([
                new Coordinate('b3'),
                new Coordinate('c2')
            ]))

            const blackKnight1 = blackFactory.createKnight(new Coordinate('g1'));
            const moves3 = blackKnight1.getPossibleMoves();

            expect(moves3.length).toBe(3);
            expect(moves3).toEqual(expect.arrayContaining([
                new Coordinate('h3'),
                new Coordinate('f3'),
                new Coordinate('e2')
            ]))

            const blackKnight2 = blackFactory.createKnight(new Coordinate('b2'));
            const moves4 =  blackKnight2.getPossibleMoves()

            expect(moves4.length).toBe(4);
            expect(moves4).toEqual(expect.arrayContaining([
                new Coordinate('a4'),
                new Coordinate('c4'),
                new Coordinate('d3'),
                new Coordinate('d1')
            ]))

            const blackKnight3 = blackFactory.createKnight(new Coordinate('b6'));
            const moves5 =  blackKnight3.getPossibleMoves()

            expect(moves5.length).toBe(6);
            expect(moves5).toEqual(expect.arrayContaining([
                new Coordinate('a8'),
                new Coordinate('c8'),
                new Coordinate('d5'),
                new Coordinate('d7'),
                new Coordinate('a4'),
                new Coordinate('c4'),
            ]))
        })
    });
})