import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { entitiesApiUrl } from '../../../server';

export const getEntities = createAsyncThunk(
  'entities/getEntities',
  async () => {
    const bodyReq = {
      excludeContacts: true,
      excludedPeople: [],
      identityType: "person",
      limit: 10,
      meta: true,
      query: "",
      torreGgId: ""
    }
    
    try {
      const respond = await fetch(entitiesApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyReq),
      });

      if (!respond.ok) {
        throw new Error(`Fetch request failed with status ${respond.status}`);
      }

      const data = await respond.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
);

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEntities.fulfilled, (state, action) => (action.payload))
  },
});

export const entitiesActions = entitiesSlice.actions;
export default entitiesSlice.reducer;
