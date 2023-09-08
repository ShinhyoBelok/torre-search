import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEntities, cleanState } from '../redux/entities/entities';
import { v4 as uuidv4 } from 'uuid';
import Entity from '../componets/Entity';

export default function Home() {
  const dispatch = useDispatch();
  const entities = useSelector((state) => state.entities);

  const handleChange = (e) => {
    dispatch(getEntities(e.target.value));
  }

  const hideEntities = () => {
    dispatch(cleanState());
  }

  return (
    <div>
      <input type="search" placeholder="Search people by name" onChange={handleChange} onFocus={handleChange}/>
      {
        entities.map((entity) => (
          <Entity
            key={uuidv4()}
            name={entity.name}
            professionalHeadline={entity.professionalHeadline}
            ggId={entity.ggId}
          />
        ))
      }
    </div>
  )
}
