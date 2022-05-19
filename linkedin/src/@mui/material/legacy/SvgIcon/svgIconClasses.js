import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getSvgIconUtilityClass(slot) {
  return generateUtilityClass('MuiSvgIcon', slot);
}
var svgIconClasses = generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);
export default svgIconClasses;