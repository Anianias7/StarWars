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

export const SearchIcon = styled.img`
  position: absolute;
  right: 8px;
  bottom: 8px;
`;

export const SelectedPlanetsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SelectedPlanet = styled.div`
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 18px;
  padding: 6px 9px 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 8px;
`;

export const SelectedPlanetText = styled.span`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #474747;
  margin-right: 13px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: inherit;
  align-self: center;
  padding: 0;
  width: 13px;
  height: 13px;
  outline-style: none;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 13px;
  height: 13px;
`;
