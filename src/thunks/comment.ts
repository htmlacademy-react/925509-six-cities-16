import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { CommentType } from '../types/types';

const fetchComments = createAppAsyncThunk(
  'currentPlace/fetchComments',
  async (id:string, { extra: api }) => {
    const { data } = await api.get<CommentType[]>(`${ApiRoute.Comments}/${id}`);
    return data;
  }
);

export { fetchComments };
