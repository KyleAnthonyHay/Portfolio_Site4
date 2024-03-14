import React from 'react';
import resume from './Resume.pdf';
const ResumeView = () => {
  return (
    <div>
        <iframe src={resume} width="100%" height="1200px" frameBorder={"0"} />
    </div>
  );
};

export default ResumeView;
