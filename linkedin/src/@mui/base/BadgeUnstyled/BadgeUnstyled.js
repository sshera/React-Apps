import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["badgeContent", "component", "children", "className", "components", "componentsProps", "invisible", "max", "showZero"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import composeClasses from '../composeClasses';
import appendOwnerState from '../utils/appendOwnerState';
import useBadge from './useBadge';
import { getBadgeUnstyledUtilityClass } from './badgeUnstyledClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const useUtilityClasses = ownerState => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ['root'],
    badge: ['badge', invisible && 'invisible']
  };
  return composeClasses(slots, getBadgeUnstyledUtilityClass, undefined);
};

const BadgeUnstyled = /*#__PURE__*/React.forwardRef(function BadgeUnstyled(props, ref) {
  const {
    component,
    children,
    className,
    components = {},
    componentsProps = {},
    max: maxProp = 99,
    showZero = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    badgeContent,
    max,
    displayValue,
    invisible
  } = useBadge(_extends({}, props, {
    max: maxProp
  }));

  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max,
    showZero
  });

  const classes = useUtilityClasses(ownerState);
  const Root = component || components.Root || 'span';
  const rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  const Badge = components.Badge || 'span';
  const badgeProps = appendOwnerState(Badge, componentsProps.badge, ownerState);
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    ref: ref
  }, other, {
    className: clsx(classes.root, rootProps.className, className),
    children: [children, /*#__PURE__*/_jsx(Badge, _extends({}, badgeProps, {
      className: clsx(classes.badge, badgeProps.className),
      children: displayValue
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? BadgeUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,

  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Badge: PropTypes.elementType,
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    badge: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: PropTypes.bool,

  /**
   * Max count to show.
   * @default 99
   */
  max: PropTypes.number,

  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: PropTypes.bool
} : void 0;
export default BadgeUnstyled;