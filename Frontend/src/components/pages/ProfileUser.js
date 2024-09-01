import React, { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../common/AppContext';

const UserProfileDropdown = () => {
  const { t } = useTranslation();
  const { setState } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    if (eventKey === 'logout') {
      setState({ user: null })
      localStorage.removeItem('userToken');
      navigate('/auth')
    } else {
      console.log(`${eventKey} selecionado`);
    }
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={t('common_userProfile')}
      variant="secondary"
      onSelect={handleSelect}
    >
      <Dropdown.Header>Nome do Usuário</Dropdown.Header>
      <Dropdown.Item eventKey="profile">{t('common_profile')}</Dropdown.Item>
      <Dropdown.Item eventKey="settings">{t('common_settings')}</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="logout">{t('common_logout')}</Dropdown.Item>
    </DropdownButton>
  );
};

export default UserProfileDropdown;
