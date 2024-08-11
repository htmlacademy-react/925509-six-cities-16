import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';

import { SortingValues } from '../../const';
import { setCurrentSortingOption } from '../../store/placesSlice';

function SortingForm(): JSX.Element {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useAppDispatch();

  const currentSortingValue = useAppSelector((state) => state.places.currentSortingOption);


  const handleSortingItemClick = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // менять текущую сортировку
    if (evt.target?.dataset?.value) {
      dispatch(setCurrentSortingOption(evt.target.dataset.value));
    }
    setIsFormOpen(false);
  };

  const handleSortingFormClick = () => {
    setIsFormOpen(true);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingFormClick}
      >
        {SortingValues[currentSortingValue]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isFormOpen ? 'places__options--opened' : ''}`}>
        {Object.keys(SortingValues).map((sortingValueItem) => (
          <li
            className={`places__option ${
              currentSortingValue === sortingValueItem
                ? 'places__option--active'
                : ''
            }`}
            tabIndex={0}
            key={sortingValueItem}
            data-value={sortingValueItem}
            onClick={handleSortingItemClick}
          >
            {SortingValues[sortingValueItem]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
