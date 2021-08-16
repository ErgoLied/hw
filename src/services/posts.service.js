const axios = require("axios");
const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
const instance = axios.create(config);

const getPosts = () => instance.get('posts');
const getComments = () => instance.get('comments');

export {getPosts, getComments}
