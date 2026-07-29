// import React from 'react'

const SkillsItem = ({ nameSkill, icon }) => {
  return (
    <li>
      <img title={nameSkill} src={icon} alt={`${nameSkill} icon`} />
    </li>
  );
};

export default SkillsItem;
