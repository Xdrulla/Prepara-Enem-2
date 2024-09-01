import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSubjects } from '../../services/progressService';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchSubjects = async () => {
      const data = await getSubjects();
      setSubjects(data);
    };
    fetchSubjects();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">{t('subjects')}</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <ListGroup>
            {subjects.map(subject => (
              <ListGroup.Item key={subject.id} className="text-center">
                <Link to={`/subject/${subject.id}`}>
                  {subject.name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SubjectList;
