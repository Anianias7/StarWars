import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 16px;
  background-color: white;

  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    padding: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
  }
`;

export const TableHeader = styled.thead`
  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
  }
`;

export const TableBody = styled.tbody`
  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
    border: none;
  }
`;

export const HeaderRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;

export const Spinner = styled.img``;

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const Icon = styled.img``;
