import React from 'react'
import { string } from 'prop-types';
import { AiOutlineSave } from 'react-icons/ai';

export default function Entity(props) {
  const {
    name,
    professionalHeadline,
    ggId,
    username,
    imageUrl
  } = props;

  const saveEntity = (e) => {
    e.preventDefault();
    console.log(e.target.id);
  }

  return (
    <a href={`https://torre.ai/${username}`} target="_blank">
      <div>
        <img src={imageUrl} alt="Profile Pic" />
        <div>{name}</div>
        <div>{professionalHeadline}</div>
        <button id={ggId} onClick={saveEntity}>Save <AiOutlineSave /></button>
      </div>
    </a>
  )
}

Entity.propTypes = {
  name: string.isRequired,
  professionalHeadline: string.isRequired,
  ggId: string.isRequired,
  username: string.isRequired
}