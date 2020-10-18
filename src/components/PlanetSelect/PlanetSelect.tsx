import React, { FC, useState, useEffect } from 'react';
import {
  Wrapper,
  Label,
  SelectedPlanet,
  SelectedPlanetText,
  CloseIcon,
  SelectedPlanetsWrapper,
  CloseButton,
} from './styles';
import { Planets_allPlanets_planets } from '../../generated/Planets';
import Select from 'react-select';
import { selectCustomStyles } from './selectCustomStyles';

export interface Props {
  label: string;
  placeholder: string;
  planets: (Planets_allPlanets_planets | null)[];
  selectedPlanets: (Planets_allPlanets_planets | null)[];
  onChange: (value: any) => void;
  onBlur: () => void;
  isLoading: boolean;
}

const PlanetSelect: FC<Props> = ({ label, placeholder, planets, onChange, selectedPlanets, isLoading }) => {
  const [options, setOptions] = useState<(Planets_allPlanets_planets | null)[]>([]);

  useEffect(() => {
    if (planets) {
      setOptions(planets);
    }
  }, [planets]);

  const handleOnChange = (selectedOption: any) => {
    if (selectedOption) {
      setOptions(prevOptions => prevOptions.filter(o => o?.id !== selectedOption.value?.id));
      onChange([...selectedPlanets, selectedOption.value]);
    }
  };

  const handleRemoveSelectedPlanet = (selectedPlanet: Planets_allPlanets_planets | null) => () => {
    if (selectedPlanet) {
      setOptions(prevOptions => [...prevOptions, selectedPlanet]);
      onChange(selectedPlanets.filter(o => o?.id !== selectedPlanet.id));
    }
  };

  return (
    <Wrapper>
      <SelectedPlanetsWrapper>
        {selectedPlanets.map(p => (
          <SelectedPlanet key={p?.id}>
            <SelectedPlanetText>{p?.name}</SelectedPlanetText>
            <CloseButton onClick={handleRemoveSelectedPlanet(p)} type="button">
              <CloseIcon src={require('../../assets/delete.svg')} />
            </CloseButton>
          </SelectedPlanet>
        ))}
      </SelectedPlanetsWrapper>
      <Label>{label}</Label>
      <Select
        styles={selectCustomStyles}
        options={options.map(p => ({ value: p, label: p?.name }))}
        value={null}
        isClearable={false}
        placeholder={placeholder}
        onChange={handleOnChange}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};

export default PlanetSelect;
