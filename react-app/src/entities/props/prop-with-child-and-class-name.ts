import { IPropWithChild } from './prop-with-child';
import { IPropWithClassName } from './prop-with-class-name';

export interface IPropWithChildrenAndClassName
  extends IPropWithChild,
    IPropWithClassName {}
