import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { PlaceType, FavoritePayloadType } from '../types/types';

const fetchFavorites = createAppAsyncThunk(
  'favorites/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PlaceType[]>(`${ApiRoute.Favorite}`);
    return data;
  }
);

const changeFavoriteStatus = createAppAsyncThunk(
  'favorites/changeFavoriteStatus',
  async ({id, status}:FavoritePayloadType, { extra: api }) => {
    const response = await api.post<PlaceType>(`${ApiRoute.Favorite}/${id}/${status}`);
    return {offer: response.data, status};
  }
);

export { fetchFavorites, changeFavoriteStatus };
