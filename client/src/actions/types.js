//DESC: 각 reducer에 의해 분류될 action.type 상수 구성
//MORE: 에러관련 reducer action type
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

//MORE: auth관련 reducer action type
export const USER_REGISTER = 'USER_REGISTER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

//MORE: profile관련 reducer action type
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILES = 'GET_PROFILES';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND';
export const CLEAR_CURRENT_PROFILE = 'CLEAR_CURRENT_PROFILE';

//MORE: post관련 reducer action type
export const POST_LOADING = 'POST_LOADING';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
