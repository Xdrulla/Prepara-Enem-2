import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getModules, updateProgress } from '../../services/progressService';
import ProgressBar from './ProgressBar';
import { useTranslation } from 'react-i18next';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const ModuleList = () => {
  const { subjectId } = useParams();
  const { t } = useTranslation();
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
    const data = await getModules(subjectId);
    setModules(data);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">{t('modules')}</h2>
      <Row className="justify-content-center">
        {modules.map(module => (
          <Col md={6} key={module.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{module.title}</Card.Title>
                <Card.Text>{module.description}</Card.Text>
                <ProgressBar progress={module.progress} />
                <Button 
                  variant="primary" 
                  className="mt-3" 
                  onClick={() => handleProgressUpdate(module.id, module.progress + 10)}
                >
                  {t('advance')} 10%
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ModuleList;
