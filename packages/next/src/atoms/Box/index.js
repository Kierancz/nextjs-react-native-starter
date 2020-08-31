import {
	borders,
	compose,
	display,
	flexbox,
	grid,
	palette,
	positions,
	shadows,
	sizing,
	spacing,
	typography,
	css
} from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import center from './center';
import specificity from './specificity';

export const styleFunction = specificity(
	css(compose(borders, center, display, flexbox, grid, positions, palette, shadows, sizing, spacing, typography))
);

/**
   * @ignore - do not document.
   */
const Box = styled('div')(styleFunction, { name: 'CustomBox' });

export default Box;
