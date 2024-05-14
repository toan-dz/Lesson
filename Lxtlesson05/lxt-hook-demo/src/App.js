import React from 'react'
import Lxt_useState from '../components/Lxt_useState';
import LxtuseEffect from '../components/LxtuseEffect';
import Lxt_useContext from '../components/Lxt_useContext';

export default function App() {
  return (
    <div className="container boder mt-3">
      <h1 className="text-conter">Lê Xuân Toàn-hook</h1>
      <hr />
      <Lxt_useState />
      <hr />
      <LxtuseEffect />
      <hr />
      <Lxt_useContext/>
    </div>
  );
}
