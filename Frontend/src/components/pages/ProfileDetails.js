import React, { useContext, useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../common/AppContext';

const ProfileDetails = () => {
  const { t } = useTranslation();
  const { state } = useContext(AppContext);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage(t('passwords_do_not_match'));
      return;
    }

    try {
      // Aqui você faria a requisição para alterar a senha do usuário
      setMessage(t('password_changed_successfully'));
    } catch (error) {
      setMessage(t('error_changing_password'));
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="mx-auto">
            <Card.Body>
              <Card.Title className="text-center">{t('profile_details')}</Card.Title>
              <Form onSubmit={handlePasswordChange}>
                <Form.Group className="mb-3">
                  <Form.Label>{t('current_password')}</Form.Label>
                  <Form.Control
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>{t('new_password')}</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>{t('confirm_new_password')}</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                {message && <p className="text-center">{message}</p>}
                <Button type="submit" className="w-100">{t('change_password')}</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDetails;
