import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
});

class ApiClient {
    static getAllMyJobs() {
        return apiClient.get('/jobs')
    }

    static createJob(newJob){
        return apiClient.post('/jobs', newJob);
    }

    static updateJob(id){
        return apiClient.put(`/jobs/${id}`);
    }

    static deleteJob(id){
        return apiClient.delete(`/jobs/${id}`);
    }
}

export default ApiClient