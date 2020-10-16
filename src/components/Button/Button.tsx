import React, { FC } from 'react';
import { PrimaryButton, ButtonText } from './styles';

interface Props {
  text: string;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

const Button: FC<Props> = ({ text, type, disabled }) => {
  return (
    <PrimaryButton type={type} disabled={disabled}>
      <ButtonText>{text}</ButtonText>
    </PrimaryButton>
  );
};

export default Button;
