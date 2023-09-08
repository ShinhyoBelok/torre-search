import React from 'react'
import Entity from '../componets/Entity'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useEffect } from 'react';
import './CSS/savedUsers.css'

export default function SavedUsers() {
  const [entitiesSaved, setEntitiesSaved] = useState([])

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('savedList')) || [];
    setEntitiesSaved(storedItems);
  }, []);

  return (
    <div>
      <ul className='savedUsers_ul d-flex'>
        {entitiesSaved.length > 0 ? (
          entitiesSaved.map((entity) => (
            <Entity
              key={uuidv4()}
              name={entity.name}
              professionalHeadline={entity.professionalHeadline}
              ggId={entity.ggId}
              username={entity.username}
              imageUrl={entity.imageUrl}
              btn={'Remove'}
            />
          ))
        ) : (
          <li>No saved entities found.</li>
        )}
      </ul>
    </div>
  );
}
