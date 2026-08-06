// Dependencies
import express from 'express';
// Import constrollers
import {
  getFeatureProjects,
  getOtherProjects,
  getSkills,
  getSocialMedia,
} from '../controllers/indexControllers.js';

// Create router
const router = express();

// Main route
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Featured projects route
router.get('/featuredProjects', getFeatureProjects);

// Other projects route
router.get('/otherProjects', getOtherProjects);

// Skills route
router.get('/skills', getSkills);

// Social media route
router.get('/socialMedia', getSocialMedia);

export default router;
