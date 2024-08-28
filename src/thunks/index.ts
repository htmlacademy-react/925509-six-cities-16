import { checkAuthorization, logout, login } from './auth';
import { fetchNearbyPlaces } from './nearby-place';
import { fetchComments, sendComment } from './comment';
import { fetchCurrentOffer } from './current-place';
import { fetchFavorites, changeFavoriteStatus } from './favorites';
import { fetchOffers } from './places-list';

export {
  checkAuthorization,
  logout,
  login,
  fetchNearbyPlaces,
  fetchComments,
  sendComment,
  fetchCurrentOffer,
  fetchFavorites,
  changeFavoriteStatus,
  fetchOffers
};
