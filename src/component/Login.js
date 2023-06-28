import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
  marginBottom:'40vh'
});

const StyledTypography = styled(Typography)({
  marginBottom: '20px',
  textAlign: 'center',
});

export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <StyledBox>
      <div>
        <StyledTypography variant="h4">Login</StyledTypography>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </StyledBox>
  );
}
