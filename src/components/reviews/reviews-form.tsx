import { ChangeEvent, useState, Fragment, FormEvent } from 'react';
import { toast } from 'react-toastify';

import { Rating, CommentLengthLimit, RequestStatus, ToastMessage } from '../../const';
import { sendComment } from '../../thunks/comment';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { selectRequestCommentSendStatus } from '../../store/current-place-slice';


type ReviewsFormPropsType = {
  offerId: string;
};

function ReviewsForm(props: ReviewsFormPropsType): JSX.Element {
  const { offerId } = props;
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const dispatch = useAppDispatch();
  const requestStatus = useAppSelector(selectRequestCommentSendStatus);

  const isLoading = requestStatus === RequestStatus.Loading;

  const clearFormFields = () => {
    setComment('');
    setRating(0);
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendComment({ id: offerId, body: { comment, rating } }))
      .unwrap()
      .then(() => {
        clearFormFields();
      })
      .catch(() => {
        toast.error(ToastMessage.ServerError);
      });
  };

  const isFormValid =
    comment.length >= CommentLengthLimit.Min &&
    comment.length <= CommentLengthLimit.Max &&
    rating;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(Rating).map((ratingKey) => (
          <Fragment key={ratingKey}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={Rating[ratingKey]}
              id={`${Rating[ratingKey]}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={Rating[ratingKey] === rating}
              disabled={isLoading}
            />
            <label
              htmlFor={`${Rating[ratingKey]}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingKey}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={comment}
        disabled={isLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {CommentLengthLimit.Min} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid || isLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
  // }
}

export default ReviewsForm;
