import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEntities } from '../redux/entities/entities';
import User from '../componets/User'

export default function Home() {
  const dispatch = useDispatch();
  const entities = useSelector((state) => state.entities);

  useEffect(() => {
    dispatch(getEntities());
  }, [dispatch]);

  return (
    <div>
      <input type="search" placeholder="Search people by name" />
      <User />
    </div>
  )
}
