import React, { useState, FC } from 'react';
import { Form, ButtonWrapper, SelectWrapper } from './styles';
import Input from '../Input/Input';
import Button from '../Button/Button';
import PlanetSelect from '../PlanetSelect/PlanetSelect';
import { filmTitleValidation } from '../../utils/validators';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Planets } from '../../generated/Planets';
import { CustomFilm } from '../../utils/types';

const PLANETS_QUERY = gql`
  query Planets {
    allPlanets {
      planets {
        id
        name
        rotationPeriod
        orbitalPeriod
        diameter
        climates
        surfaceWater
        population
      }
    }
  }
`;

interface Props {
  setCustomMovie: any;
}

interface InitialValues {
  filmTitle: string;
  planets: [];
}

const AddFilmForm: FC<Props> = ({ setCustomMovie }) => {
  const { loading, data } = useQuery<Planets>(PLANETS_QUERY);

  const initialValues: InitialValues = {
    filmTitle: '',
    planets: [],
  };

  const [values, setValues] = useState<{ [key: string]: any }>(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validate = (name: string, value: any) => {
    if (name === 'filmTitle') {
      return filmTitleValidation(value);
    }
    return null;
  };

  const handleChange = (name: string) => (changedValue: any) => {
    setValues({
      ...values,
      [name]: changedValue,
    });

    if (touched[name]) {
      const { [name]: removedError, ...rest } = errors;
      const error = validate(name, changedValue);
      setErrors({
        ...rest,
        ...(error && { [name]: error }),
      });
    }
  };

  const handleBlur = (name: string) => () => {
    setTouched({
      ...touched,
      [name]: true,
    });
    if (!touched[name]) {
      const { [name]: removedError, ...rest } = errors;
      const error = validate(name, values[name]);
      setErrors({
        ...rest,
        ...(error && { [name]: error }),
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate(key, values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      },
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length &&
      Object.values(formValidation.touched).length === Object.values(values).length &&
      Object.values(formValidation.touched).every(t => t === true)
    ) {
      const result: CustomFilm = {
        film: {
          id: Math.random(),
          title: values['filmTitle'],
          plannetConnection: {
            planets: values['planets'],
          },
        },
      };
      setCustomMovie(result);
      setValues(initialValues);
      setErrors({});
      setTouched({});
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Please enter the tittle of the movie"
        label="Movie tittle"
        value={values['filmTitle']}
        onBlur={handleBlur('filmTitle')}
        onChange={handleChange('filmTitle')}
        errorMessage={errors['filmTitle']}
      />
      <SelectWrapper>
        <PlanetSelect
          placeholder="Search for the planet in database"
          label="Add Planet"
          planets={data?.allPlanets?.planets || []}
          selectedPlanets={values['planets']}
          onChange={handleChange('planets')}
          onBlur={handleBlur('planets')}
          isLoading={loading}
        />
      </SelectWrapper>
      <ButtonWrapper>
        <Button disabled={!!(touched && Object.values(errors).length)} text="ADD MOVIE" type="submit" />
      </ButtonWrapper>
    </Form>
  );
};

export default AddFilmForm;
