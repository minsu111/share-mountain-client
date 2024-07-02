import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useToastStore } from '@/store/useToastStore';

const Toast = () => {
  const { toast } = useToastStore();
  const { isOpened, message } = toast;
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isOpened}
        message={message}
      />
    </>
  );
};

export default Toast;
