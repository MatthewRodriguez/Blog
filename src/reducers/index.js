import { combineReducers } from 'redux';
import Posts from './Post';
import Users from './Users';

export default combineReducers({
  posts: Posts,
  users: Users
});