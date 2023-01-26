import { useEffect, useState } from "react";
import Worker from "./Worker";
import classes from './Worker.module.css';

const WorkerList = () => {
  const [data, setData] = useState(
    localStorage.workers
      ? JSON.parse(localStorage.workers)
      : [
          {
            id: 2,
            emri: "Bledian",
            mbiemri: "Potera",
            dataLindjes: "24/10/1998",
            email: "bledianpotera1@gmail.com",
            pozita: "developer",
          },
        ]
  );


  useEffect(()=>{
    
  
    localStorage.setItem('workers', JSON.stringify(data));
  
    }, [data]);
  
  
  const handleDelete = (id) => {
    console.log('delete');
    setData(data.filter((dat) => dat.id !== id));
  };

  const handleEdit = (id, updatedContact) => {

    console.log('u thirr');
    console.log('id mrena edit', id)
    setData(
      data.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  console.log(data);



  return (
    <>
      <h1>Worker List</h1>

      <table class={classes.customers}>
  <tr>
    <th>Emri</th>
    <th>Mbiemri</th>
    <th>Data e Lindjes</th>
    <th>Email</th>
    <th>Pozita</th>
    <th>Edit</th>
    <th>Delete</th>

  </tr>
  {data.map((dat) => {
        return (
          <Worker
          id={dat.id}
          key={dat.id}
            emri={dat.emri}
            mbiemri={dat.mbiemri}
            dataLindjes={dat.dataLindjes}
            email={dat.email}
            pozita={dat.pozita} 
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        );
      })}

 
</table>
      
    </>
  );
};

export default WorkerList;
