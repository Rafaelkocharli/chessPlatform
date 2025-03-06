import { useSelector} from "react-redux";
import {RootState} from "../../../app/store";

export default function Board() {

    // const dispatch = useDispatch()
    const board = useSelector((state: RootState) => state.board)

    return (
        <div>
            <table>
                {board.map((row) => <tr>{row.map((col) => <td>{col}</td>)}</tr>)}
            </table>
        </div>
    );
}