import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { login, register } from '../../services/authService';
import { AppContext } from '../common/AppContext';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setState } = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError(null);
    setSuccess(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(userName, password, setState);
      setSuccess('Login bem sucedido');
      navigate('/home');
      setError(null);
    } catch (err) {
      setError(err.error || 'Erro ao fazer login');
      setSuccess(null);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register(userName, email, password);
      setSuccess('Registro bem sucedido');
      setError(null);
    } catch (err) {
      setError(err.error || 'Erro ao fazer cadastro');
      setSuccess(null);
    }
  };

  return (
    <div className={`body ${isLogin ? 'login-bg' : 'register-bg'}`}>
      <div className="veen">
        <div className="login-btn splits">
          <p>{t('common_AlreadyUser')}</p>
          <Button
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={handleToggle}
          >
            {t('common_login')}
          </Button>
        </div>
        <div className="rgstr-btn splits">
          <p>{t('common_noAccount')}</p>
          <Button
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={handleToggle}
          >
            {t('common_register')}
          </Button>
        </div>
        <div className={`wrapper ${!isLogin ? 'move' : ''}`}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <Form id="login" className={`form-container ${isLogin ? '' : 'hidden'}`} onSubmit={handleLogin}>
            <h3>{t('common_login')}</h3>
            <Form.Group>
              <Form.Label>{t('common_email')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('common_email_placeholder')}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t('common_password')}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t('common_password_placeholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="dark">{t('common_login')}</Button>
          </Form>
          <Form id="register" className={`form-container ${!isLogin ? '' : 'hidden'}`} onSubmit={handleRegister}>
            <h3>{t('common_register')}</h3>
            <Form.Group>
              <Form.Label>{t('common_name')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('common_name_placeholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t('common_email')}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t('common_email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t('common_userName')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('common_userName_placeholder')}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t('common_password')}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t('common_password_placeholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="dark">{t('common_register')}</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
