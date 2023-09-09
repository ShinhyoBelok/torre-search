import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import entitiesApiUrl from '../../../server';

export const getEntities = createAsyncThunk(
  'entities/getEntities',
  async (inputQuery) => {
    const dataReq = {
      excludeContacts: true,
      excludedPeople: [],
      identityType: "person",
      limit: 10,
      meta: false,
      query: inputQuery,
      torreGgId: "",
    }

    
    try {
      const respond = await axios({
        method: 'POST',
        url: entitiesApiUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        data: dataReq
      });
      let respondData = [];
      const res = await respond.data;

      if (typeof res == 'string') {
        const dataArray = res.match(/\{[^}]*\}/g);
        dataArray.forEach(data => {
          const parseData = JSON.parse(data);
          respondData.push(parseData);
        });
      } else if (typeof res == 'object') {
        respondData = [res];
      }

      return respondData;
    } catch (error) {
      console.log('error ' + error.message);
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
);

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: [],
  reducers: {
    cleanState(state, action) { // eslint-disable-line
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
