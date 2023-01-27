import classes from "../styles/Forma.module.css";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams, useNavigate } from "react-router-dom";


const Forma = () => {
  const { id } = useParams();
  // console.log(+id);
  // console.log(typeof id);



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

  const [validimi, setValidimi] = useState(false);

  const updatedContact = {
    id,
    emri,
    mbiemri,
    dataLindjes,
    email,
    pozita,
  };

  useEffect(() => {
   
    localStorage.setItem("workers", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    
    if (id) {
      const found = data.find((element) => element.id === id);

      
      setEmri(found.emri);
      setMbiemri(found.mbiemri);

      setDataLindjes(found.dataLindjes);

      setEmail(found.email);
      setPozita(found.pozita);
    }
  }, []);

  // useEffect(() => {
  //   console.log(email);
  //   console.log(email.includes("@"));
  //   if (!email.includes("@")) {
  //     console.log('u thirr 2')
  //     setValidimi(true);
  //     console.log(validimi)
  //   }else{
  //     setValidimi(false)
  //   }
  // }, [email]);
 

  // const updateContact = (id, updatedContact) => {
  //   setData(data.map((dat) => (dat.id === id ? updatedContact : dat)));
  // };

  const navigate = useNavigate();

   const handleClick = async (e) => {

    e.preventDefault();

    if (
      emri.trim().length === 0 ||
      mbiemri.trim().length === 0 ||
      dataLindjes.trim().length === 0 ||
      !email.includes("@") ||
      pozita.trim().length === 0
    ) {
      setValidimi(true);
      return;
    } else {
      setValidimi(false);
    }

    if (id) {
      e.preventDefault();
      await setData(data.map((dat) => (dat.id === id ? updatedContact : dat)));
      navigate('/');
     
      
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
      // console.log(data);
    }

    setEmri("");
    setMbiemri("");
    setEmail("");
    setDataLindjes("");
    setPozita("");
    // navigate('/');

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
          max={Date.now() - 18}
          
          required
        />
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          // style={{background: validimi ? 'rgb(245, 131, 131)' : 'white'}}

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

        {validimi && (
          <h3 style={{ color: "red" }}>You must fill all inputs!!!</h3>
        )}

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
