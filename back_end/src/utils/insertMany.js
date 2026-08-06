// Local database
import { featuredProjectsArray } from '../../../front_end/src/database/featuredProjects.js';
import { otherProjectsArray } from '../../../front_end/src/database/otherProjectsArray.js';
import { skillsArray } from '../../../front_end/src/database/skillsArray.js';
import { socialMediaArray } from '../../../front_end/src/database/socialMediaArray.js';
// Import database
import { db } from '../config/connectDB.js';

// Featured projects
const newFeaturedProjectsArray = featuredProjectsArray.map(
  (currentFeaturedProjectObj) => {
    const newFeaturedProjectObj = { ...currentFeaturedProjectObj };
    delete newFeaturedProjectObj.id;

    return newFeaturedProjectObj;
  },
);

// Other projects
const newOtherProjectsArray = otherProjectsArray.map(
  (currentOtherProjectObj) => {
    const newOtherProjectObj = { ...currentOtherProjectObj };
    delete newOtherProjectObj.id;

    return newOtherProjectObj;
  },
);

// Skills
const newSkillsArray = skillsArray.map((currentSkillsObj) => {
  const newSkillsObj = { ...currentSkillsObj };
  delete newSkillsObj.id;

  return newSkillsObj;
});

// SocialMedia
const newSocialMediaArray = socialMediaArray.map((currentSocialMediaObj) => {
  const newSocialMediaObj = { ...currentSocialMediaObj };
  delete newSocialMediaObj.id;

  return newSocialMediaObj;
});

// Insert data to db
// const featuredProjectsResponse = await db
//  .collection('featuredProjects')
//  .insertMany(newFeaturedProjectsArray);
// const otherProjectsResponse = await db
//  .collection('otherProjects')
//  .insertMany(newOtherProjectsArray);
// const skillsResponse = await db.collection('skills').insertMany(newSkillsArray);
// const socialMediaResponse = await db
//  .collection('socialMedia')
//  .insertMany(newSocialMediaArray);

// console.log(featuredProjectsResponse);
// console.log(otherProjectsResponse);
// console.log(skillsResponse);
// console.log(socialMediaResponse);
