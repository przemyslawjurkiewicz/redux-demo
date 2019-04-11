import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  THUMB_DOWN_COMMENT,
  THUMB_UP_COMMENT,
  EDIT_COMMENT
} from './actions';

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          id: action.id,
          text: action.text,
          votes: 0
        },
        ...state
      ];

    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return { ...comment, text: action.text }
        }
        return comment;
      });

    case REMOVE_COMMENT:
      return state.filter(comments => comments.id !== action.id);

    case THUMB_UP_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return { ...comment, votes: comment.votes + 1 };
        }
        return comment;
      });

    case THUMB_DOWN_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return { ...comment, votes: comment.votes - 1 };
        }
        return comment;
      });

    default:
      return state;
  }
}

export default comments;
