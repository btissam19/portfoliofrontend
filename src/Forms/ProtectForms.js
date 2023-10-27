import React from 'react';
import ProjectForm from './ProjectForm';
import SkillsForm from './SkillsForm';
import ResumeDownloading from './Resume';

const ProtectForm = () => {
  return (
    <div className="mt-8 flex flex-wrap justify-between">
      
      <div className="flex-1 bg-white p-4 shadow rounded-lg m-2">
          <h2 className="text-gray-500 text-lg font-semibold pb-1">Add Project</h2>
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
          <div className="content-container">
             <ProjectForm />
          </div>
      </div>

      <div className="flex-1 bg-white p-4 shadow rounded-lg m-2">
          <h2 className="text-gray-500 text-lg font-semibold pb-1">Add Skill</h2>
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
          <div className="content-container">
             <SkillsForm />
          </div>
      </div>

      <div className="flex-1 bg-white p-4 shadow rounded-lg m-2">
          <h2 className="text-gray-500 text-lg font-semibold pb-1">Download Resume</h2>
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
          <div className="content-container">
             <ResumeDownloading />
          </div>
      </div>
      
    </div>
  );
}

export default ProtectForm;
