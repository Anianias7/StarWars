import styled from 'styled-components';

interface Props {
  disabled?: boolean;
}

export const PrimaryButton = styled.button`
  background: ${(props: Props): string => (props.disabled ? '#E0E6EE' : '#1ba1be')};
  border-radius: 4px;
  height: 33px;
  width: 160px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline-style: none;
  cursor: ${(props: Props): string => (props.disabled ? 'not-allowed' : 'pointer')};

  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 100%;
  }
`;

export const ButtonText = styled.span`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
`;
