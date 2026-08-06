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
router.get('/api/', (req, res) => {
  res.send('Main endpoint');
});

// Featured projects route
router.get('/api/featuredProjects', getFeatureProjects);

// Other projects route
router.get('/api/otherProjects', getOtherProjects);

// Skills route
router.get('/api/skills', getSkills);

// Social media route
router.get('/api/socialMedia', getSocialMedia);

export default router;
