import './App.css';
import Forma from './components/Forma';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>

        <Route index element={<Home/>} />
        <Route path="add" element={ <Forma/>} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
