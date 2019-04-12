import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';
import form from './form';

export const reducer = combineReducers({
    comments,
    users,
    form
  });