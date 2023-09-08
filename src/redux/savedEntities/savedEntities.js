import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { entitiesApiUrl } from '../../../serverdev';


export const getSavedEntities = createAsyncThunk(
  'savedEntities/getSavedEntities',
  async (savedEntIds) => {
    const respond = [];
    if (savedEntIds) {
      savedEntIds.forEach( async (id) => {
        const dataReq = {
          excludeContacts: true,
          excludedPeople: [],
          identityType: "person",
          limit: 1,
          meta: false,
          query: "",
          torreGgId: id,
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
    
          const respondData = await respond.data;
          respond.push(respondData);
        } catch (error) {
          console.log('error' + error.message);
          throw new Error(`Error fetching data: ${error.message}`);
        }
      });
    }else {
      return [];
    }
    
    return respond;
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
      .addCase(getSavedEntities.fulfilled, (state, action) => (action.payload))
  },
});

export const { cleanState } = entitiesSlice.actions;
export default entitiesSlice.reducer;
