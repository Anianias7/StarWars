import { Styles } from 'react-select';
export const selectCustomStyles = {
  container: () => ({
    display: 'flex',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  control: () => ({
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    borderStyle: 'solid',
    width: '100%',
  }),
  placeholder: () => ({
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#C4C4C4',
  }),
  indicatorsContainer: () => ({
    height: 0,
    padding: 0,
  }),
  singleValue: () => ({
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#555555',
  }),
  valueContainer: style => ({
    ...style,
    padding: 0,
  }),
} as Styles;
