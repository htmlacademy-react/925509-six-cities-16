import { createAppAsyncThunk } from './create-async-thunk';
import { ApiRoute } from '../const';
import { CurrentUserType } from '../types/types';
import { dropToken, saveToken } from '../services/token';

import { LoginPayload } from '../types/types';

const checkAuthorization = createAppAsyncThunk(
  'user/checkAuthorization',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<CurrentUserType>(`${ApiRoute.Login}`);
    return data;
  }
);

const login = createAppAsyncThunk(
  'user/login',
  async (body: LoginPayload, { extra: api }) => {
    const response = await api.post<CurrentUserType>(`${ApiRoute.Login}`, body);
    saveToken(response.data.token);
    return response.data;
  }
);

const logout = createAppAsyncThunk(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(`${ApiRoute.Logout}`);
    dropToken();
  }
);

export { checkAuthorization, logout, login };
