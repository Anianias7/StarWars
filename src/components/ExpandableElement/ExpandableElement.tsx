import React, { useState, FC } from 'react';
import { Button, Text, Icon, Wrapper } from './styles';

interface Props {
  text: string;
}

const ExpandableElement: FC<Props> = ({ text, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Wrapper>
      <Button onClick={handleOnClick}>
        <Text>{text}</Text>
        {isExpanded ? (
          <Icon src={require('../../assets/arrow-close.svg')} />
        ) : (
          <Icon src={require('../../assets/arrow-open.svg')} />
        )}
      </Button>
      <div style={{ top: -3, position: 'relative' }}>{isExpanded ? children : null}</div>
    </Wrapper>
  );
};

export default ExpandableElement;
