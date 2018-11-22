import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://still-cove-99602.herokuapp.com',
    timeout: 10000,
});

class IndeedApi {
	static getJobs(params){ 
		return apiClient.get('/indeedJobSearch', {
			params: {
					q: params.q,
					l: params.l,
					sort: params.sort,
					start: params.start,
					radius: params.radius,
					fromage: params.fromage,
			}
		});
	}
}

export default IndeedApi;