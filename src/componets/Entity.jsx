import React from 'react'
import { string } from 'prop-types';
import { AiOutlineSave } from 'react-icons/ai';

export default function Entity(props) {
  const {name, professionalHeadline, ggId} = props;

  const saveEntity = (e) => {
    console.log(e.target.id);
  }

  return (
    <li>
      <div>{name}</div>
      <div>{professionalHeadline}</div>
      <button id={ggId} onClick={saveEntity}>Save <AiOutlineSave /></button>
    </li>
  )
}

Entity.propTypes = {
  name: string.isRequired,
  professionalHeadline: string.isRequired,
  ggId: string.isRequired
}