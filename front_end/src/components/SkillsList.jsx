// import React from 'react'
// Import components
import SkillsItem from './SkillsItem';
import { skillsArray } from '../database/skillsArray';

const SkillsList = ({ itemsQuantity }) => {
  return (
    <ul className='skillsSection-list'>
      {skillsArray
        .filter((currentValue, index) => index < itemsQuantity)
        .map((currentValue) => (
          <SkillsItem
            nameSkill={currentValue.name}
            icon={currentValue.icon}
            key={currentValue._id}
          />
        ))}
    </ul>
  );
};

export default SkillsList;
