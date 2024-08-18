import { SortingTypeKey, PlaceType } from './types/types';

const uppercaseFirstLetter = (string: string) => {
  if (!string) {
    return string;
  }

  return string[0].toUpperCase() + string.slice(1);
};

const sortingPlaceList = (
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

const formatDateToYMD = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяц +1, т.к. getUTCMonth() возвращает месяцы от 0 до 11
  const day = String(date.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const formatDateToMonthYear = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = date.toLocaleString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  });

  return `${month} ${year}`;
};

export {
  uppercaseFirstLetter,
  sortingPlaceList,
  formatDateToYMD,
  formatDateToMonthYear,
};
