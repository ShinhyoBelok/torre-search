import React  from 'react'
import { useSelector  } from 'react-redux'
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

  const entities = useSelector((state) => state.entities);

  const addEntitylocalStorage = (ent) => {
    const existingArray = JSON.parse(localStorage.getItem('savedList')) || [];
    existingArray.push(ent);
    localStorage.setItem('savedList', JSON.stringify(existingArray));
  }

  const saveEntity = (e) => {
    e.preventDefault();
    const { id } = e.target
    const newEntity = entities.find(ent => ent.ggId == id);
    addEntitylocalStorage(newEntity);
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