
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { AppRoute, AuthorisationStatus, ToastMessage } from '../../const';
import { selectUserAuthStatus } from '../../store/user-slice';
import { changeFavoriteStatus } from '../../thunks/favorites';

type favoritesButtonProps = {
  isFavorite: boolean;
  isPlacesList: boolean;
  id: string;
};


function FavoritesButton(props: favoritesButtonProps): JSX.Element {
  const { isFavorite, isPlacesList, id } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userAuthStatus = useAppSelector(selectUserAuthStatus);
  const isAuthorized = userAuthStatus === AuthorisationStatus.Auth;

  const handleButtonClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    } else {
      dispatch(changeFavoriteStatus({
        id,
        status: Number(!isFavorite)
      }))
        .unwrap()
        .catch(() => {
          toast.error(ToastMessage.ServerError);
        });
    }
  };

  return (
    <button
      className={`
        button
        ${isPlacesList ? 'place-card__bookmark-button' : 'offer__bookmark-button'}
        ${(isFavorite && isPlacesList) ? 'place-card__bookmark-button--active' : ''}
        ${(isFavorite && !isPlacesList) ? 'offer__bookmark-button--active' : ''}`}
      type="button"
      onClick={handleButtonClick}
    >
      <svg
        className={`${isPlacesList ? 'place-card__bookmark-icon' : 'offer__bookmark-icon'}`}
        width={isPlacesList ? 18 : 31}
        height={isPlacesList ? 19 : 33}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'From' : 'To'} bookmarks</span>
    </button>
  );
}

export default FavoritesButton;
