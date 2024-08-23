import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { PlaceExtendedType } from '../types/types';

const fetchCurrentOffer = createAppAsyncThunk(
  'currentPlace/fetchCurrentOffer',
  async (id:string, { extra: api }) => {
    const { data } = await api.get<PlaceExtendedType>(`${ApiRoute.Offers}/${id}`);
    return data;
  }
);

export { fetchCurrentOffer };
