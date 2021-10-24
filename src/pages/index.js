import React, { useState } from 'react';
import ConsolaSemantica from '../components/ConsolaSemantica';
import Form from '../components/Form';

const AnalizadorSintactico = () => {
  const [data, setData] = useState('');

  return (
    <>
    {console.log(data)}
      <Form setData={setData} />
      <ConsolaSemantica codigo={data} />
    </>
  );
};

export default AnalizadorSintactico;
