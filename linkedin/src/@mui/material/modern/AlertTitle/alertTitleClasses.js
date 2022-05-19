import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getAlertTitleUtilityClass(slot) {
  return generateUtilityClass('MuiAlertTitle', slot);
}
const alertTitleClasses = generateUtilityClasses('MuiAlertTitle', ['root']);
export default alertTitleClasses;