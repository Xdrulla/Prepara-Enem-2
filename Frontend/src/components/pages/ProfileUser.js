import React, { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../common/AppContext';

const UserProfileDropdown = () => {
  const { t } = useTranslation();
  const { state, setState } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    if (eventKey === 'logout') {
      setState(null);
      localStorage.removeItem('userToken');
      navigate('/auth');
    } else if (eventKey === 'profile') {
      navigate('/profile-details');
    } else if (eventKey === 'progress') {
      navigate('/subjects');
    } else {
      console.log(`${eventKey} selecionado`);
    }
  };

  const userName = state ? state.username : 'Nome do Usuário';

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={t('common_profile')}
      variant="secondary"
      onSelect={handleSelect}
    >
      <Dropdown.Header>{userName}</Dropdown.Header>
      <Dropdown.Item eventKey="profile">{t('common_profile')}</Dropdown.Item>
      <Dropdown.Item eventKey="progress">{t('common_progress')}</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="logout">{t('common_logout')}</Dropdown.Item>
    </DropdownButton>
  );
};

export default UserProfileDropdown;
