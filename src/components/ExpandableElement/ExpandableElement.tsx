import React, { useState, FC } from 'react';
import { Button, Text, Icon, Wrapper, ChildrenWrapper } from './styles';

interface Props {
  text: string;
}

const ExpandableElement: FC<Props> = ({ text, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(oldExpanded => !oldExpanded);
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
      <ChildrenWrapper>{isExpanded ? children : null}</ChildrenWrapper>
    </Wrapper>
  );
};

export default ExpandableElement;
