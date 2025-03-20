import {initBoardFromMatrix} from "../controller";
import {Empty, WhiteFactory} from "../../../entities";
import Coordinate from "../../../shared/lib/coordinate";

describe('Controller module tests', () => {
    const stringBoard = [
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
        ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',],
    ]


    const whiteFactory = new WhiteFactory();

    test("initBoardFromMatrix function test", () => {
        expect(initBoardFromMatrix(stringBoard)[0][0]).toEqual(new Empty(new Coordinate(0, 0)));
        stringBoard[0][0] = 'N';
        expect(initBoardFromMatrix(stringBoard)[0][0]).toEqual(whiteFactory.createKnight(new Coordinate(0, 0)));


    })
})