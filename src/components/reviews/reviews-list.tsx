import { COMMENTS_MAX_COUNT, RATING_UNIT_WIDTH_VALUE } from '../../const';
import { CommentType } from '../../types/types';
import { formatDateToYMD, formatDateToMonthYear } from '../../utils';

type ReviewsListPropsType = {
  commentList: CommentType[];
};

function ReviewsList(props: ReviewsListPropsType): JSX.Element {
  const { commentList } = props;

  const sortedCommentList =
    commentList &&
    [...commentList]
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      })
      .slice(0, COMMENTS_MAX_COUNT);

  return (
    <ul className="reviews__list">
      {sortedCommentList.map((commentItem: CommentType) => {
        const { date, comment, rating, user, id } = commentItem;
        return (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={user.avatarUrl}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${Math.round(rating) * RATING_UNIT_WIDTH_VALUE}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{comment}</p>
              <time className="reviews__time" dateTime={formatDateToYMD(date)}>
                {formatDateToMonthYear(date)}
              </time>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewsList;
