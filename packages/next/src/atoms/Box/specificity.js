import T from 'prop-types';

const specificity = (styleFunction) => {
	const newStyleFunction = (props) => {
		const output = styleFunction(props);

		if (props.cc) return { '&&': output };
		if (props.ccc) return { '&&&': output };
		return output;
	};

	newStyleFunction.propTypes =
		process.env.NODE_ENV !== 'production' ? { ...styleFunction.propTypes, cc: T.bool, ccc: T.bool } : {};

	newStyleFunction.filterProps = [ 'cc', 'ccc', ...styleFunction.filterProps ];

	return newStyleFunction;
};

export default specificity;
