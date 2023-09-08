import React from 'react'
import { string } from 'prop-types';
import { AiOutlineSave } from 'react-icons/ai';

export default function Entity(props) {
  const {name, professionalHeadline} = props;

  return (
    <li>
      <div>{name}</div>
      <div>{professionalHeadline}</div>
      <button>Save <AiOutlineSave /></button>
    </li>
  )
}

Entity.propTypes = {
  name: string.isRequired,
  professionalHeadline: string.isRequired
}