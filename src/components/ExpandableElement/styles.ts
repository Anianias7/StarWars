import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 16px;
  padding-right: 30px;
  padding-left: 30px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
`;

export const Button = styled.button`
  padding: 15px 14px;
  width: 100%;
  background-color: white;
  border: none;
  box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  outline-style: none;
  cursor: pointer;
`;

export const Text = styled.span`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #00687f;
`;

export const ChildrenWrapper = styled.div`
  top: -3px;
  position: 'relative';
`;

export const Icon = styled.img``;
