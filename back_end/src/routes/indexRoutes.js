// Dependencies
import express from 'express';
// Local database
import { featuredProjectsArray } from '../../../front_end/src/database/featuredProjects.js';
import { otherProjectsArray } from '../../../front_end/src/database/otherProjectsArray.js';
import { skillsArray } from '../../../front_end/src/database/skillsArray.js';
import { socialMediaArray } from '../../../front_end/src/database/socialMediaArray.js';

// Create router
const router = express();

// Main route
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Featured projects route
router.get('/featuredProjects', (req, res) => {
  res.send(featuredProjectsArray);
});

// Other projects route
router.get('/otherProjects', (req, res) => {
  res.send(otherProjectsArray);
});

// Skills route
router.get('/skills', (req, res) => {
  res.send(skillsArray);
});

// Social media route
router.get('/socialMedia', (req, res) => {
  res.send(socialMediaArray);
});

export default router;
