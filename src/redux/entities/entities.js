import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { entitiesApiUrl } from '../../../serverdev';


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
  name: 'entities',
  initialState: [],
  reducers: {
    cleanState(state, action) {
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
