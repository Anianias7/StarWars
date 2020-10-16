import React, { FC } from 'react';
import { HeaderCell, Icon, Text, ContentWrapper } from './styled';

interface Props {
  text: string;
  onSort: (type: string) => void;
}

const FilmHeaderCell: FC<Props> = ({ text, onSort }) => {
  const handleAscSort = () => {
    onSort('ASC');
  };
  const handleDesSort = () => {
    onSort('DES');
  };
  return (
    <HeaderCell>
      <ContentWrapper>
        <Text>{text}</Text>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Icon src={require('../../assets/sortAsc.svg')} onClick={handleAscSort} />
          <Icon src={require('../../assets/sortDes.svg')} onClick={handleDesSort} />
        </div>
      </ContentWrapper>
    </HeaderCell>
  );
};

export default FilmHeaderCell;
