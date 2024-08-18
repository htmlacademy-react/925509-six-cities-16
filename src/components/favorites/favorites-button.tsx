type favoritesButtonProps = {
  isFavorite: boolean;
  isPlacesList: boolean;
};

function FavoritesButton(props: favoritesButtonProps): JSX.Element {
  const { isFavorite, isPlacesList } = props;

  return (
    <button
      className={`
        button
        ${isPlacesList ? 'place-card__bookmark-button' : 'offer__bookmark-button'}
        ${(isFavorite && isPlacesList) ? 'place-card__bookmark-button--active' : ''}
        ${(isFavorite && !isPlacesList) ? 'offer__bookmark-button' : ''}`}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={isPlacesList ? 18 : 31}
        height={isPlacesList ? 19 : 33}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoritesButton;
