import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const createData = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/users`, data, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
};