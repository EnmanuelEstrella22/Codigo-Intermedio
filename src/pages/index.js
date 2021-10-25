import React, { useState } from 'react';
import ConsolaSemantica from '../components/ConsolaSemantica';
import Form from '../components/Form';

const AnalizadorSintactico = () => {
  const [data, setData] = useState('');

  return (
    <>
      <Form setData={setData} />
      <ConsolaSemantica codigo={data} />
    </>
  );
};

export default AnalizadorSintactico;
