import classes from "./Forma.module.css";
import { useEffect, useState } from "react";

const Forma = () => {
  const [data, setData] = useState( [
    {
      id: 2,
      emri: "Bledian",
      mbiemri: "Potera",
      dataLindjes: "24/10/1998",
      email: "bledianpotera1@gmail.com",
      pozita: "developer",
    },
  ]);

  const [id, setId] = useState("");
  const [emri, setEmri] = useState("");
  const [mbiemri, setMbiemri] = useState("");
  const [dataLindjes, setDataLindjes] = useState("");
  const [email, setEmail] = useState("");
  const [pozita, setPozita] = useState("");

  useEffect(()=>{
    
  console.log("data", data);

  localStorage.setItem('workers', data);

  }, [data]);


  const handleClick = (e) => {
    e.preventDefault();

    const newData = {
      id: id,
      emri: emri,
      mbiemri: mbiemri,
      dataLindjes: dataLindjes,
      email: email,
      pozita: pozita,
    };

    setData([...data, newData]);
    console.log(data);

    setId("");
    setEmri("");
    setMbiemri("");
    setEmail("");
    setDataLindjes("");
    setPozita("");
  };

  return (
    <>
      <form>
        <label>ID:</label>
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          value={id}
          required
        />
        <label>Emri:</label>
        <input
          type="text"
          onChange={(e) => setEmri(e.target.value)}
          value={emri}
          required
        />
        <label>Mbiemri:</label>
        <input
          type="text"
          onChange={(e) => setMbiemri(e.target.value)}
          value={mbiemri}
          required
        />
        <label>Data Lindjes:</label>
        <input
          type="date"
          onChange={(e) => setDataLindjes(e.target.value)}
          value={dataLindjes}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label>Pozita:</label>
        <input
          type="text"
          onChange={(e) => setPozita(e.target.value)}
          value={pozita}
          required
        />
        <div>
        <button type="submit" className={classes.butoni} onClick={handleClick}>
       
          Regjistro
        </button>
        </div>
      </form>
    </>
  );
};

export default Forma;
