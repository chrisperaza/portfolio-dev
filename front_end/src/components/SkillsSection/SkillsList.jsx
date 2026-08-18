// import React from 'react'
// Import components
import SkillsItem from './SkillsItem';
import { skillsArray } from '../../database/skillsArray';

const SkillsList = ({ type }) => {
  return (
    <ul className='skillsSection-list'>
      {skillsArray
        .filter((currentValue) => currentValue.type === type)
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
