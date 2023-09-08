import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { entitiesApiUrl } from '../../../serverdev';


export const getSavedEntities = createAsyncThunk(
  'savedEntities/getSavedEntities',
  async (savedEnt) => {
    const dataReq = {
      excludeContacts: true,
      excludedPeople: [],
      identityType: "person",
      limit: 10,
      meta: false,
      query: inputQuery,
      torreGgId: "",
    }

    savedEnt.forEach(ent => {
      
    });
    
    try {
      const respond = await axios({
        method: 'POST',
        url: entitiesApiUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        data: dataReq
      });

      const dataAsString = await respond.data;
      const dataArray = dataAsString.match(/\{[^}]*\}/g);
      const respondData = [];

      dataArray.forEach(data => {
        const parseData = JSON.parse(data);
        respondData.push(parseData);
      });

      return respondData;
    } catch (error) {
      console.log('error' + error.message);
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
);

const entitiesSlice = createSlice({
  name: 'savedEntities',
  initialState: [],
  reducers: {
    saveEntities(state, action) {
      return [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEntities.fulfilled, (state, action) => (action.payload))
  },
});

export const { cleanState } = entitiesSlice.actions;
export default entitiesSlice.reducer;
