import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import styles from "./Board.module.scss";

export default function Board() {
  // const dispatch = useDispatch()
  const board = useSelector((state: RootState) => state.board);

  return (
    <div>
      <table className={styles.board}>
        {board.map((row) => (
          <tr>
            {row.map((col) => (
              <td>{col}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
