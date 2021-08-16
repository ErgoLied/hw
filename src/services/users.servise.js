const axios = require("axios");

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
const instance = axios.create(config);

const getUsers = () => {
    return instance.get('users');
}
const getPostsOfUser = (id) => {
    return instance.get('users/'+id+'/posts');
}

export {getUsers, getPostsOfUser}