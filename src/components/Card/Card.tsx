import React, { FC } from 'react';
import classnames from 'classnames';

import ButtonSimple from '../ButtonSimple';

import CardStatus from './CardStatus';

import { DEFAULTS, STYLE } from './Card.constants';
import type { Props } from './Card.types';
import './Card.style.scss';

/**
 * The Card component.
 */
const Card: FC<Props> = (props: Props) => {
  const {
    children,
    className,
    color = DEFAULTS.COLOR,
    height = DEFAULTS.HEIGHT,
    id,
    outline,
    rounding = DEFAULTS.ROUNDING,
    statusColor,
    statusStriped,
    style,
    isStatic,
    isDisabled,
    ...otherProps
  } = props;

  const wrapperProps = {
    className: classnames(className, STYLE.wrapper),
    'data-color': color,
    'data-height': height,
    'data-outline': outline,
    'data-rounding': rounding,
    'data-static': isStatic,
    'data-disabled': isDisabled,
    id: id,
    style: style,
  };

  return (
    <>
      {isStatic ? (
        <div {...wrapperProps} {...otherProps}>
          <CardStatus color={statusColor} striped={statusStriped} />
          {children}
        </div>
      ) : (
        <ButtonSimple {...wrapperProps} isDisabled={isDisabled} {...otherProps}>
          {statusColor && <CardStatus color={statusColor} striped={statusStriped} />}
          {children}
        </ButtonSimple>
      )}
    </>
  );
};

export default Card;
