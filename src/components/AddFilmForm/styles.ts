import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 31px 95px;
  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    padding: 31px 14px;
  }
`;

export const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin-top: 31px;

  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 100%;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 17px;
  position: relative;
`;
