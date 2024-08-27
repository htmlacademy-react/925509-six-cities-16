
import { OFFER_IMAGES_MAX_COUNT } from '../../const';

type OfferGalleryListPropsType = {
  images: string[];
};

function OfferGalleryList(props: OfferGalleryListPropsType): JSX.Element {
  const { images } = props;
  return (
    <div className="offer__gallery">
      {[...images].slice(0, OFFER_IMAGES_MAX_COUNT).map((image: string) => (
        <div className="offer__image-wrapper" key={image}>
          <img
            className="offer__image"
            src={image}
            alt="Photo studio"
          />
        </div>
      ))}
    </div>
  );
}

export default OfferGalleryList;
