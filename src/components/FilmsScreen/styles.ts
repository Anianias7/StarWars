import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const Footer = styled.footer`
  margin-top: 36px;
  margin-bottom: 29px;
  text-align: center;
  display: flex;
  justify-content: center;

  font-family: Barlow;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #999999;
`;

export const Wrapper = styled.div`
  background-color: #e0e6ee;
  width: 790px;
  min-height: 736px;
  border-radius: 8px;
  padding-top: 32px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const FilmsListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: inherit;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 222px;
  }
`;

export const Spinner = styled.img`
  animation: ${rotate360} 1.5s linear infinite;
`;

export const DashedLine = styled.div`
  border: 2px dashed #ffffff;
  width: 100%;
  height: 0px;
  margin: 32px 0;
`;
