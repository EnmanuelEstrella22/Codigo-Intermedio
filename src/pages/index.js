import React, { useState } from 'react';
import ConsolaIntermedia from '../components/ConsolaIntermedia';
import Form from '../components/Form';

const AnalizadorSintactico = () => {
  const [data, setData] = useState('');

  return (
    <>
      <Form setData={setData} />
      <ConsolaIntermedia codigo={data} />
    </>
  );
};

export default AnalizadorSintactico;
