"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBadge;

var _utils = require("@mui/utils");

function useBadge(props) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = props;
  const prevProps = (0, _utils.usePreviousProps)({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;

  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }

  const {
    badgeContent,
    max = maxProp
  } = invisible ? prevProps : props;
  const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue
  };
}