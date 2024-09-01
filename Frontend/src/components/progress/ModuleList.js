import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getModules, updateProgress } from '../../services/progressService';
import ProgressBar from './ProgressBar';

const ModuleList = () => {
  const { subjectId } = useParams();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      const data = await getModules(subjectId);
      setModules(data);
    };
    fetchModules();
  }, [subjectId]);

  const handleProgressUpdate = async (moduleId, newProgress) => {
    await updateProgress(moduleId, newProgress);
    // Recarregar os módulos para ver a atualização
    const data = await getModules(subjectId);
    setModules(data);
  };

  return (
    <div>
      <h2>Módulos</h2>
      <ul>
        {modules.map(module => (
          <li key={module.id}>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            <ProgressBar progress={module.progress} />
            <button onClick={() => handleProgressUpdate(module.id, module.progress + 10)}>
              Avançar 10%
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
