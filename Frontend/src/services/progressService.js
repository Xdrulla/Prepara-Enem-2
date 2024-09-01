import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getSubjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/subjects/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching subjects', error);
    throw error;
  }
};

export const getModules = async (subjectId) => {
  try {
    const response = await axios.get(`${API_URL}/subjects/${subjectId}/modules/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching modules', error);
    throw error;
  }
};

export const updateProgress = async (moduleId, progress) => {
  try {
    const response = await axios.post(`${API_URL}/modules/${moduleId}/progress/`, {
      progress,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating progress', error);
    throw error;
  }
};
