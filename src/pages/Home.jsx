import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEntities, cleanState } from '../redux/entities/entities';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from 'lodash'
import Entity from '../componets/Entity';
import './CSS/home.css';

export default function Home() {
  const dispatch = useDispatch();
  const entities = useSelector((state) => state.entities);

  // debounce to avoid multiple request when user is typing fast
  const debouncedHandleChange = debounce((value) => {
    dispatch(getEntities(value));
  }, 200);

  const handleChange = (e) => {
    debouncedHandleChange(e.target.value);
  }

  const hideEntities = () => {
    dispatch(cleanState());
  }

  return (
    <div className='home_container d-flex'>
      <input type="search" placeholder="Search people by name" onChange={handleChange} onFocus={handleChange}/>
      {
        entities.map((entity) => (
          <Entity
            key={uuidv4()}
            name={entity.name}
            professionalHeadline={entity.professionalHeadline}
            ggId={entity.ggId}
            username={entity.username}
            imageUrl={entity.imageUrl}
          />
        ))
      }
    </div>
  )
}
