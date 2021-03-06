import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["actions", "anchorEl", "children", "className", "component", "components", "componentsProps", "onClose", "open"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HTMLElementType, refType } from '@mui/utils';
import appendOwnerState from '../utils/appendOwnerState';
import MenuUnstyledContext from './MenuUnstyledContext';
import { getMenuUnstyledUtilityClass } from './menuUnstyledClasses';
import useMenu from './useMenu';
import composeClasses from '../composeClasses';
import PopperUnstyled from '../PopperUnstyled';
import { jsx as _jsx } from "react/jsx-runtime";

function getUtilityClasses(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ['root', open && 'expanded'],
    listbox: ['listbox', open && 'expanded']
  };
  return composeClasses(slots, getMenuUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuUnstyled API](https://mui.com/base/api/menu-unstyled/)
 */


const MenuUnstyled = /*#__PURE__*/React.forwardRef(function MenuUnstyled(props, forwardedRef) {
  const {
    actions,
    anchorEl,
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    onClose,
    open = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    registerItem,
    unregisterItem,
    getListboxProps,
    getItemProps,
    getItemState,
    highlightFirstItem,
    highlightLastItem
  } = useMenu({
    open,
    onClose,
    listboxRef: componentsProps.listbox?.ref,
    listboxId: componentsProps.listbox?.id
  });
  React.useImperativeHandle(actions, () => ({
    highlightFirstItem,
    highlightLastItem
  }), [highlightFirstItem, highlightLastItem]);

  const ownerState = _extends({}, props, {
    open
  });

  const classes = getUtilityClasses(ownerState);
  const Popper = component ?? components.Root ?? PopperUnstyled;
  const popperProps = appendOwnerState(Popper, _extends({}, other, {
    anchorEl,
    open,
    keepMounted: true,
    role: undefined
  }, componentsProps.root, {
    className: clsx(classes.root, className, componentsProps.root?.className)
  }), ownerState);
  const Listbox = components.Listbox ?? 'ul';
  const listboxProps = appendOwnerState(Listbox, _extends({}, componentsProps.listbox, getListboxProps(), {
    className: clsx(classes.listbox, componentsProps.listbox?.className)
  }), ownerState);
  const contextValue = {
    registerItem,
    unregisterItem,
    getItemState,
    getItemProps,
    open
  };
  return /*#__PURE__*/_jsx(Popper, _extends({}, popperProps, {
    ref: forwardedRef,
    children: /*#__PURE__*/_jsx(Listbox, _extends({}, listboxProps, {
      children: /*#__PURE__*/_jsx(MenuUnstyledContext.Provider, {
        value: contextValue,
        children: children
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" ? MenuUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: refType,

  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   */
  anchorEl: PropTypes
  /* @typescript-to-proptypes-ignore */
  .oneOfType([HTMLElementType, PropTypes.object, PropTypes.func]),

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @ignore
   */
  component: PropTypes.elementType,

  /**
   * @ignore
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Root: PropTypes.elementType
  }),

  /**
   * @ignore
   */
  componentsProps: PropTypes.shape({
    listbox: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: PropTypes.func,

  /**
   * Controls whether the menu is displayed.
   * @default false
   */
  open: PropTypes.bool
} : void 0;
export default MenuUnstyled;