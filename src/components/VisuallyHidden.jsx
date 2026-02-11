import { forwardRef } from 'react';

const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = 'span', children, visible, ...rest }, ref) => {
    return (
      <Component
        className={`${className || ''} sr-only ${showOnFocus ? 'focus:not-sr-only' : ''}`}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default VisuallyHidden;
