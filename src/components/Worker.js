import classes from './Worker.module.css';
import { Outlet, Link } from "react-router-dom";
import Forma from './Forma';

const Worker = (props) => {


  console.log(props.id)
 

    return(

        <tbody>
        <tr className={classes.customers}>
        <td>{props.emri}</td>
        <td>{props.mbiemri}</td>
        <td>{props.dataLindjes}</td> 
        <td>{props.email}</td>
        <td>{props.pozita}</td>
        <td><Link to="/add" element={<Forma id={props.id}/>}><button className={classes.editBtn} onClick={()=>props.onEdit(props.id)}>Edit</button></Link></td>
        <td><button className={classes.deleteBtn} onClick={()=>props.onDelete(props.id)}>Delete</button></td>
        </tr>
        </tbody>

 )
}

export default Worker;