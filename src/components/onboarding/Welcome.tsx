import { Onboard } from '@cedcommerce/ounce-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/onboarding/9384u90284902834/step1');
  }, 900000);
  return <Onboard title="Welcome Onboard" />;
};

export default Welcome;
