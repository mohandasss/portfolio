import React from 'react';
import './SkillList.css'; // Ensure you import the CSS file for tooltip styles

function SkillList({ icon, skill }) {
  return (
    <div className="skillItem">
      <div className="tooltip">
        {icon}
        <span className="tooltiptext">{skill}</span>
      </div>
    </div>
  );
}

export default SkillList;
