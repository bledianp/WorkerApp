import classes from "../styles/Worker.module.css";
import { Link } from "react-router-dom";
import Forma from "./Forma";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Worker = (props) => {
  // console.log(props.id);
  let subtitle;
  const [modal, setModal] = useState(false);

  const handleDelete = () => {
    setModal(true);
  };
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }
  function closeModal() {
    setModal(false);
  }

  return (
    <>
      {modal && (
        <Modal
          isOpen={setModal}
          //  onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Are you sure?</h1>
          <div style={{ float: "right" }}>
            <button
              style={{
                backgroundColor: "lightblue",
                padding: "5px",
                margin: "5px",
                height: "40px",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                padding: "10px",
              }}
              onClick={closeModal}
            >
              No
            </button>

            <button
              style={{
                backgroundColor: "red",
                padding: "5px",
                margin: "5px",
                height: "40px",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                padding: "10px",
              }}
              onClick={() => props.onDelete(props.id)}
            >
              Yes
            </button>
          </div>
        </Modal>
      )}
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
              // onClick={() => props.onDelete(props.id)}
              onClick={handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Worker;
