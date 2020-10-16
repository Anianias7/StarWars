import styled from 'styled-components';

export const Row = styled.tr`
  border: none;
  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
    border: none;
    &:nth-child(even) {
      background-color: rgba(229, 229, 229, 0.5);
    }
  }
`;

export const DataCell = styled.td`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #474747;
  padding: 20px 0;

  &:first-child {
    text-align: left;
    color: #00687f;
  }

  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
    text-align: left;
    border: none;
    position: relative;
    padding-left: 50%;

    &:before {
      position: absolute;
      top: 20px;
      left: 10px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    &:nth-of-type(1):before {
      content: 'Planet Name';
    }
    &:nth-of-type(2):before {
      content: 'Rotation period';
    }
    &:nth-of-type(3):before {
      content: 'Orbital period';
    }
    &:nth-of-type(4):before {
      content: 'Diameter';
    }
    &:nth-of-type(5):before {
      content: 'Climate';
    }
    &:nth-of-type(6):before {
      content: 'Surface water';
    }
    &:nth-of-type(7):before {
      content: 'Population';
    }
  }
`;
