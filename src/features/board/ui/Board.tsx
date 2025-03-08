import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import styles from "./Board.module.scss";
import Piece from "../../../entities/piece/ui/Piece";
import Coordinate from "../../../shared/lib/coordinate";

export default function Board() {
  // const dispatch = useDispatch()
  const board = useSelector((state: RootState) => state.board);

  return (
    <div>
      <table className={styles.board}>
        <tbody>
          {board.map((row, row_index) => (
            <tr key={row_index}>
              {row.map((col, column_index) => (
                <td key={column_index}>
                  <Piece
                    index={col}
                    coordinates={new Coordinate(row_index, column_index)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
