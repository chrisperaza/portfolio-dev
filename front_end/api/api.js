// Dependencies
import axios from 'axios';

const NODE_ENV = import.meta.env.MODE;

// API url
const URL = NODE_ENV === 'development' ? 'http://localhost:3000/api' : '/api';

// Response
const featuredProjectsResponse = await axios.get(`${URL}/featuredProjects`);
const otherProjectsResponse = await axios.get(`${URL}/otherProjects`);
const skillsResponse = await axios.get(`${URL}/skills`);
const socialMediaResponse = await axios.get(`${URL}/socialMedia`);

// Export responses data
export const featuredProjectsArray = featuredProjectsResponse.data;
export const otherProjectsArray = otherProjectsResponse.data;
export const skillsArray = skillsResponse.data;
export const socialMediaArray = socialMediaResponse.data;
