const API_URL = process.env.REACT_APP_API_URL || 'https://codebuddy.review';

const SUBMIT_POST_DATA_URL = `${API_URL}/submit`;
const GET_POSTS = `${API_URL}/posts`;

export { API_URL, GET_POSTS, SUBMIT_POST_DATA_URL };

