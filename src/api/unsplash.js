import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID a3VN2k6NgGz7-qBHOxU9-Ay6BCZ3wYxmtM0VYUo0rUc'
    }
});