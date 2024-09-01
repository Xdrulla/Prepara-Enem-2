import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                {t('home_welcome')}
              </Card.Title>
              <Card.Text>
                {t('home_intro')}
              </Card.Text>
              <Card.Text>
                {t('home_purpose')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
