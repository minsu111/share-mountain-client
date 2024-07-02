import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

export interface ModalBoxProps {
  type: 'alert' | 'confirm';
  titleText: string;
  subText: string;
  onClick: () => void;
}

const ModalBox = ({ type, titleText, subText, onClick }: ModalBoxProps) => {
  return (
    <>
      <Dialog
        open={true}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        sx={{ width: 400, height: 1 / 3, margin: 'auto' }}
      >
        <DialogTitle id='alert-dialog-title'>{titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {subText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {type === 'confirm' ? (
            <>
              <Button onClick={onClick}>취소</Button>
              <Button
                onClick={onClick}
                // autoFocus
              >
                확인
              </Button>
            </>
          ) : (
            <Button onClick={onClick}>확인</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalBox;
