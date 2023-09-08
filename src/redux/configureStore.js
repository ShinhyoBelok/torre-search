import { configureStore } from '@reduxjs/toolkit';
import entitiesReducer from './entities/entities';

const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    // savedEntities:
  },
});

export default store;