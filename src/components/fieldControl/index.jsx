import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const validations = [
	{
		id: 'ID',
		range: true,
		min: 3,
		max: 10
	},
	{
		id: 'Name',
		range: true,
		min: 5,
		max: 100
	},
	{
		id: 'Description',
		range: true,
		min: 10,
		max: 200
	},
]

const errorMessage = { 
	valueMissing: { msg: 'Este campo es requerido' },
	tooShort: { msg: 'Este campo no cumple el minimo requerido' },
	tooLong: { msg: 'Este campo excede el maximo permitido' }
}

const FieldControl = ({ id, label, isRequired, type, isDisabled, reset }) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(null);

	const inputRef = useRef(null);

	const validation = validations.filter(item => item.id === id);

	useEffect(() => {
		let ignore = false;

		if (reset && !ignore) setValue('');
		return () => {
			ignore = true;
		}
	}, [reset])

	
	const makeValidation = useCallback(() => {
		if (inputRef.current && !inputRef.current.validity.valid) {
			let msg = 'Este campo es mandatorio';

			const validationState = inputRef.current.validity;
			
			if (validationState.tooShort) {
				msg = errorMessage['tooShort'].msg;
			} else if (validationState.tooLong) {
				msg = errorMessage['tooLong'].msg;
			} else if (validationState.valueMissing) {
				msg = errorMessage['valueMissing'].msg;
			}
			setError(msg);
		} else {
			setError(null);
		}
	}, [])

	useEffect(() => {
		let ignore = false;

		if (!ignore) makeValidation();

		return () => {
			ignore = true;
		}
	}, [makeValidation])


	return (
		<div>
			<label htmlFor={id}>{label}</label>
			{
			validation && validation.length?

			<input 
				ref={inputRef}
				type={type} 
				id={id} 
				name={id} 
				required={isRequired} 
				value={value} 
				onChange={(e) => setValue(e.target.value)} 
				disabled={isDisabled}
				minLength={validation[0].min}
				maxLength={validation[0].max}
				onBlur={makeValidation}
			/>
			:
			<input 
				ref={inputRef}
				type={type} 
				id={id} 
				name={id} 
				required={isRequired} 
				value={value} 
				onChange={(e) => setValue(e.target.value)} 
				disabled={isDisabled}
				onBlur={makeValidation}
			/>

			}
			{
				<p className="error_message">{error}</p>
			}
		</div>
	)
}

FieldControl.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isRequired: PropTypes.bool,
	type: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool,
	reset: PropTypes.bool,
	hasError: PropTypes.func
}

FieldControl.defaultProps = {
	isRequired: false, 
	isDisabled: false,
	hasError: () => {}
}
export default FieldControl;
