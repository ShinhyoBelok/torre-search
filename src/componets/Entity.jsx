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

  const toggleSave = (e) => {
    const savedEntities = JSON.parse(localStorage.getItem('savedList')) || [];

    e.preventDefault();
    const { id } = e.target;
    const newEntity = entities.find((ent) => ent.ggId == id);
    console.log(id);
    console.log(savedEntities);
    if (savedEntities.find((ent) => ent.ggId == id)) {
      const updatedEntities = savedEntities.filter((ent) => ent.ggId != id);
      localStorage.setItem('savedList', JSON.stringify(updatedEntities));
      const path = window.location.pathname;
      if (path == '/SavedUsers') {
        window.location.reload();
      }
    } else {
      localStorage.setItem('savedList', JSON.stringify([...savedEntities, newEntity]));
    }
  }
  
  return (
    <a href={`https://torre.ai/${username}`} target="_blank">
      <div>
        <img src={imageUrl || 'https://img.icons8.com/color/96/gender-neutral-user.png'} alt="Profile Pic" />
        <div>{name}</div>
        <div>{professionalHeadline || "No professional headline found"}</div>
        <button id={ggId} onClick={toggleSave}>Save</button>
        <AiOutlineSave />
      </div>
    </a>
  )
}

Entity.propTypes = {
  name: string.isRequired,
  professionalHeadline: string,
  ggId: string.isRequired,
  username: string.isRequired,
  imageUrl: string
}