import React, { ChangeEvent, FC, useState } from 'react';
import { IPropWithChildrenAndClassName } from '../../../entities/props/prop-with-child-and-class-name';

export const TextArea: FC<IPropWithChildrenAndClassName> = ({
  children,
  className = '',
}) => {
  const [textAreaHeight, setTextAreaHeight] = useState(0);

  function increaseSizeOfTextArea(
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void {
    const element = event.target;
    element.style.height = `${element.scrollHeight}px`;
    setTextAreaHeight(element.scrollHeight);
  }
  return (
    <textarea
      className={className}
      style={{ height: `${textAreaHeight}px` }}
      onChange={increaseSizeOfTextArea}
    >
      {children}
    </textarea>
  );
};
