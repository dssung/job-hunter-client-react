import axios from 'axios';

const indeedApi = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
});

class IndeedApi {
}

export default IndeedApi