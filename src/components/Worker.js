import classes from "./Worker.module.css";
import { Outlet, Link } from "react-router-dom";
import Forma from "./Forma";

const Worker = (props) => {
  console.log(props.id);

  return (
    <tbody>
      <tr className={classes.customers}>
        <td>{props.emri}</td>
        <td>{props.mbiemri}</td>
        <td>{props.dataLindjes}</td>
        <td>{props.email}</td>
        <td>{props.pozita}</td>
        <td>
          <Link to={`edit/${props.id}`} element={<Forma />}>
            <button className={classes.editBtn}>Edit</button>
          </Link>
        </td>
        <td>
          <button
            className={classes.deleteBtn}
            onClick={() => props.onDelete(props.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Worker;
