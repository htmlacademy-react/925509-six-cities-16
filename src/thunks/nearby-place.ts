import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { PlaceType } from '../types/types';

const fetchNearbyPlaces = createAppAsyncThunk(
  'nearbyPlaces/fetchNearbyPlaces',
  async (id:string, { extra: api }) => {
    const { data } = await api.get<PlaceType[]>(`${ApiRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export { fetchNearbyPlaces };
