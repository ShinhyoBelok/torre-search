import React  from 'react'
import { useSelector  } from 'react-redux'
import { string } from 'prop-types';
import { AiOutlineSave, AiFillDelete } from 'react-icons/ai';
import './CSS/entity.css'

export default function Entity(props) {
  const {
    name,
    professionalHeadline,
    ggId,
    username,
    imageUrl,
    btn
  } = props;

  const entities = useSelector((state) => state.entities);

  const toggleSave = (e) => {
    const savedEntities = JSON.parse(localStorage.getItem('savedList')) || [];

    e.preventDefault();
    const { id } = e.target;
    const newEntity = entities.find((ent) => ent.ggId == id);

    if (savedEntities.find((ent) => ent.ggId == id)) {
      const updatedEntities = savedEntities.filter((ent) => ent.ggId != id);
      localStorage.setItem('savedList', JSON.stringify(updatedEntities));
      window.dispatchEvent(new Event('storage'))
    } else {
      localStorage.setItem('savedList', JSON.stringify([...savedEntities, newEntity]));
    }
  }
  
  return (
    <a href={`https://torre.ai/${username}`} className='entity_card d-flex' target="_blank">
      <div className="info d-flex">
        <img src={imageUrl || 'https://img.icons8.com/color/96/gender-neutral-user.png'} alt="Profile Pic" />
        <div>
          <div>{name}</div>
          <div className='headline'>{professionalHeadline || "No professional headline found"}</div>
        </div>
      </div>
      <div className="save d-flex">
        <button id={ggId} onClick={toggleSave}>{btn}</button>
        {btn == 'Remove' ? <AiFillDelete /> : <AiOutlineSave />}
      </div>
    </a>
  )
}

Entity.propTypes = {
  name: string.isRequired,
  professionalHeadline: string,
  ggId: string.isRequired,
  username: string.isRequired,
  imageUrl: string,
  btn: string.isRequired
}