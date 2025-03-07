import { isUndefined } from "../helpers";
import { MAX_COORDINATE, MIN_COORDINATE } from "./constants";

export function isYCoordinateValid(y: number): boolean {
  return y >= MIN_COORDINATE && y <= MAX_COORDINATE;
}

export function isXCoordinateValid(x: number): boolean {
  return x >= MIN_COORDINATE && x <= MAX_COORDINATE;
}

export function areCoordinatesValid(x: number, y: number | undefined): boolean {
  return !isUndefined(y) && isYCoordinateValid(y) && isXCoordinateValid(x);
}

export function isChessNotationValid(notation: string): boolean {
  return /^[a-h][1-8]$/.test(notation);
}

export function getFileIndex(letter: string): number {
  const map = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return map.indexOf(letter);
}

export function getRankIndex(rank: string): number {
  return +rank - 1;
}

export function getCoordinatesFromChessNotation(
  notation: string
): [number, number] {
  const fileIndex = getFileIndex(notation[0]);
  const rankIndex = getRankIndex(notation[1]);
  return [fileIndex, rankIndex];
}

export function getChessNotationFromCoordinates(x: number, y: number): string {
  const map = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return `${map[x]}${y + 1}`;
}
