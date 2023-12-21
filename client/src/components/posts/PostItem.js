import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { addLike, removeLike, deletePost } from '../../actions/post';
import { useDispatch, useSelector } from 'react-redux';

const PostItem = ({
  // addLike,
  // removeLike,
  // deletePost,
  // auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>

        <button
          onClick={() => dispatch(addLike(_id))}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-up" />{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={() => dispatch(removeLike(_id))}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-down" />
        </button>
        <Link to={`/posts/${_id}`} className="btn btn-primary">
          Discussion{' '}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => dispatch(deletePost(_id))}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default PostItem;
