import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { CommentType, CommentPayloadType } from '../types/types';

const fetchComments = createAppAsyncThunk(
  'currentPlace/fetchComments',
  async (id:string, { extra: api }) => {
    const { data } = await api.get<CommentType[]>(`${ApiRoute.Comments}/${id}`);
    return data;
  }
);

const sendComment = createAppAsyncThunk(
  'currentPlace/sendComment',
  async ({id, body}:CommentPayloadType, { extra: api }) => {
    const response = await api.post<CommentType>(`${ApiRoute.Comments}/${id}`, body);
    return response.data;
  }
);

export { fetchComments, sendComment };
