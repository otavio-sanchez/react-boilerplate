import axios from 'axios';

const url = process.env.REACT_APP_API;


const get = async parameters => axios.get(`${url}${parameters}`)
	.then(response => response.data)
	.catch(error => error);


const post = async (parameters, body) => axios.post(`${url}${parameters}`, body)
	.then(response => response.data)
	.catch(error => error);


export default { get, post };
