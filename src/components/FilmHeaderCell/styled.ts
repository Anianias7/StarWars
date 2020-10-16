import styled from 'styled-components';

export const HeaderCell = styled.th`
  text-align: right;
  padding: 14px 0;

  &:first-child > div {
    justify-content: flex-start;
    & > span {
      color: #00687f;
    }
  }

  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
`;

export const Icon = styled.img``;

export const Text = styled.span`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #474747;
  text-align: right;
  margin-right: 6px;
`;
