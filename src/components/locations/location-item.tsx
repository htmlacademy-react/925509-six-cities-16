import { LocationLinkType } from '../../types/types';

// TO DO
// добавить проверку активной вкладки и добавлять класс tabs__item--active - это видимо на этапе роутинга
function LocationItem(props: LocationLinkType) {
  const { title, link } = props;

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href={link}>
        <span>{title}</span>
      </a>
    </li>
  );
}

export default LocationItem;
