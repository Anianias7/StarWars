import styled from 'styled-components';

interface Props {
  isError?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 5px;
  color: ${(props: Props): string => (props.isError ? '#FF1616' : '#555555')};
`;

export const InputField = styled.input`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #c4c4c4;
  outline: none;
  border: none;
  border-bottom: 1px solid #999999;
`;

export const ErrorBox = styled.div`
  margin-top: 1px;
  border: 1px solid #ff1616;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.5);
  padding-left: 9px;
  height: 32px;
  display: flex;
  position: absolute;
  top: 100%;
  background-color: white;
  z-index: 2;
  left: 0;
  right: 0;
  align-items: center;
`;

export const ErrorMessage = styled.label`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #ff1616;
`;
