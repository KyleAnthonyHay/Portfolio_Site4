import React from 'react';
import resume from './Resume.pdf';
const ResumeView = () => {
  return (
    <div>
        <iframe src={resume} width="100%" height="1000px" />
    </div>
  );
};

export default ResumeView;
