import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
});

class IndeedApi {
	static getJobs(params){ 
		return apiClient.get('/indeedJobSearch', {
			params: {
					q: params.q,
					l: params.l,
					sort: params.sort,
					radius: params.radius,
					fromage: params.fromage,
			}
		});
	}
}

export default IndeedApi;