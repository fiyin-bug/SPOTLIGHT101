
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import TransitionLink from './transitionLinks';

// This component combines NavLink functionality with transition effects
const TransitionNavLink = ({ children, to, className, ...props }) => {
  return (
    <NavLink
      to={to}
      className={className}
      {...props}
    >
      {(navLinkProps) => {
        // We need to wrap the children in a TransitionLink
        return (
          <TransitionLink
            to={to}
            className={typeof className === 'function' ? className(navLinkProps) : className}
          >
            {typeof children === 'function' ? children(navLinkProps) : children}
          </TransitionLink>
        );
      }}
    </NavLink>
  );
};
TransitionNavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]).isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};

export default TransitionNavLink;
