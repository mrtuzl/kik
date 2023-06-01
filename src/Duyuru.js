import React from 'react';

function Duyuru(props) {

  return (
    <div>
      <h3>{props.baslik}</h3>
      <p>{props.paragraf}</p>
    </div>
  );
}
export default Duyuru;