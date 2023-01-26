import classes from "./Forma.module.css";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const Forma = () => {
  const { id } = useParams();
  console.log(+id);
  console.log(typeof id);

  const [data, setData] = useState(
    localStorage.workers
      ? JSON.parse(localStorage.workers)
      : [
          {
            id: "2",
            emri: "Bledian",
            mbiemri: "Potera",
            dataLindjes: "24/10/1998",
            email: "bledianpotera1@gmail.com",
            pozita: "developer",
          },
        ]
  );

  const [emri, setEmri] = useState("");
  const [mbiemri, setMbiemri] = useState("");
  const [dataLindjes, setDataLindjes] = useState("");
  const [email, setEmail] = useState("");
  const [pozita, setPozita] = useState("");

  const updatedContact = {
    id,
    emri,
    mbiemri,
    dataLindjes,
    email,
    pozita,
  };

  useEffect(() => {
    // console.log("data", data);

    localStorage.setItem("workers", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (id) {
      const found = data.find((element) => element.id == id);

      // console.log('found', found);
      // console.log(typeof(found.emri))
      setEmri(found.emri);
      setMbiemri(found.mbiemri);

      setDataLindjes(found.dataLindjes);

      setEmail(found.email);
      setPozita(found.pozita);
    }
  }, []);

  const updateContact = (id, updatedContact) => {
    setData(data.map((dat) => (dat.id === id ? updatedContact : dat)));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (id) {
      console.log("mrena if");
      updateContact(id, updatedContact);
    } else {
      const newData = {
        id: Math.random().toLocaleString(),
        emri: emri,
        mbiemri: mbiemri,
        dataLindjes: dataLindjes,
        email: email,
        pozita: pozita,
      };

      setData([...data, newData]);
      console.log(data);
    }

    setEmri("");
    setMbiemri("");
    setEmail("");
    setDataLindjes("");
    setPozita("");
  };

  return (
    <>
      <NavBar />
      <form>
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
          <button
            type="submit"
            className={classes.butoni}
            onClick={handleClick}
          >
            Regjistro
          </button>
        </div>
      </form>
    </>
  );
};

export default Forma;
