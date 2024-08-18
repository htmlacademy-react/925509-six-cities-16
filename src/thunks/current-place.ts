import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { PlaceType } from '../types/types';

const fetchCurrentOffer = createAppAsyncThunk(
  'currentPlace/fetchCurrentOffer',
  async (id:string, { extra: api }) => {
    const { data } = await api.get<PlaceType>(`${ApiRoute.Offers}/${id}`);
    return data;
  }
);

export { fetchCurrentOffer };
