import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass('MuiFormHelperText', slot);
}
var formHelperTextClasses = generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
export default formHelperTextClasses;