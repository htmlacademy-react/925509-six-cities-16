import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { PlaceType } from '../types/types';

const fetchOffers = createAppAsyncThunk(
  'places/fetchPlaces',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PlaceType[]>(ApiRoute.Offers);
    return data;
  }
);

export { fetchOffers };
