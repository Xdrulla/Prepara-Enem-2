import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSubjects } from '../../services/progressService';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const data = await getSubjects();
      setSubjects(data);
    };
    fetchSubjects();
  }, []);

  return (
    <div>
      <h2>Matérias</h2>
      <ul>
        {subjects.map(subject => (
          <li key={subject.id}>
            <Link to={`/subject/${subject.id}`}>{subject.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;
