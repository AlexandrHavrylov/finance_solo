import React from 'react';
import { Btn } from './Butons.styled';

export default function Butons({
  fBtnText,
  fBtnType,
  fBtnHandler,

  sBtnText,
  sBtnType = 'button',
  sBtnHandler,
}) {
  return (
    <>
      <Btn type={fBtnType} onClick={fBtnHandler}>
        {fBtnText}
      </Btn>
      <Btn type={sBtnType} onClick={sBtnHandler}>
        {sBtnText}
      </Btn>
    </>
  );
}
