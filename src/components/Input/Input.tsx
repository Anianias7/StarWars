import React, { FC } from 'react';
import { Wrapper, Label, InputField, ErrorBox, ErrorMessage } from './styles';

export interface Props {
  id: string;
  label: string;
  placeholder: string;
  errorMessage?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

const Input: FC<Props> = ({ id, label, placeholder, errorMessage, value, onChange, onBlur }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <Label htmlFor={id} isError={Boolean(errorMessage)} placeholder={placeholder}>
        {label}
      </Label>
      <InputField id={id} onChange={handleOnChange} onBlur={onBlur} value={value} />
      {Boolean(errorMessage) ? (
        <ErrorBox>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorBox>
      ) : null}
    </Wrapper>
  );
};

export default Input;
