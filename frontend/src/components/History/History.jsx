import React from 'react';
import { useParams } from 'react-router-dom';

//This is a temporary component

export default function History({ kids }) {
  const params = useParams();
  return (
      <div>
        <h4>To jest historia dziecka:</h4>
        <h3>{params.name}</h3>
      </div>
    )
}
