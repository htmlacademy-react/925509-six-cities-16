import { SortingTypeKey, PlaceType } from './types/types';

export const sortingPlaceList = (
  filteredPlacesList: PlaceType[],
  sortingValue: SortingTypeKey
) => {
  if (sortingValue === 'LowToHighPrice') {
    return filteredPlacesList
      .slice()
      .sort(
        (placeListItemA, placeListItemB) =>
          placeListItemA.price - placeListItemB.price
      );
  } else if (sortingValue === 'HighToLowPrice') {
    return filteredPlacesList
      .slice()
      .sort(
        (placeListItemA, placeListItemB) =>
          placeListItemB.price - placeListItemA.price
      );
  } else if (sortingValue === 'TopRated') {
    return filteredPlacesList
      .slice()
      .sort(
        (placeListItemA, placeListItemB) =>
          placeListItemB.rating - placeListItemA.rating
      );
  } else {
    return filteredPlacesList;
  }
};
