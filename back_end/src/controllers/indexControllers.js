// Import database
import { db } from '../config/connectDB.js';

// Featured projects
export const getFeatureProjects = async (req, res) => {
  res.send(await db.collection('featuredProjects').find({}).toArray());
};

// Other projects
export const getOtherProjects = async (req, res) => {
  res.send(await db.collection('otherProjects').find({}).toArray());
};

// Skills
export const getSkills = async (req, res) => {
  res.send(await db.collection('skills').find({}).toArray());
};

// Social media
export const getSocialMedia = async (req, res) => {
  res.send(await db.collection('socialMedia').find({}).toArray());
};
