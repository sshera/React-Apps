import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getBreadcrumbsUtilityClass(slot) {
  return generateUtilityClass('MuiBreadcrumbs', slot);
}
var breadcrumbsClasses = generateUtilityClasses('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']);
export default breadcrumbsClasses;