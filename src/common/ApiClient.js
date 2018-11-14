import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
});

class ApiClient {
	static getMyJobs() {
		return apiClient.get('/jobs')
	}

	static createJob(newJob){
		return apiClient.post('/jobs', newJob);
	}

	static saveJob(_id, updatedJob){
		return apiClient.put(`/jobs/${_id}`, updatedJob);
	}

	static deleteJob(_id){
		return apiClient.delete(`/jobs/${_id}`);
	}

	static deleteActivity(jobId, activityId){
		return apiClient.delete(`jobs/${jobId}/activity/${activityId}`);
	}

	static editActivity(jobId, activityId, updatedActivity){
		console.log(updatedActivity);
		console.log(activityId);
		return apiClient.put(`jobs/${jobId}/activity/${activityId}`, updatedActivity);
	}
}

export default ApiClient