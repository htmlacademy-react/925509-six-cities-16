import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { PlaceType } from '../types/types';

const fetchFavorites = createAppAsyncThunk(
  'favorites/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PlaceType[]>(`${ApiRoute.Favorite}`);
    return data;
  }
);

export { fetchFavorites };
