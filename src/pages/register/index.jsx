import { useState, useCallback } from 'react';
import FieldControl from '../../components/fieldControl';

import './index.css';

const Register = () => {
	const [reset, setReset] = useState(false);
	const [hasError, setHasError] = useState([])

	const handleReset = () => {
		setReset(true);
		setTimeout(() => { setReset(false) },0);
	}
	console.log('hasError: ', hasError)

	return (
		<main className="form_container">
			<div className="form_container__title">
				<h1>Formulario de Registro</h1>
			</div>
			<hr/>
			<form className="form_container__form">

				<FieldControl
					key="ID"
					id="ID"
					label="ID"
					isRequired={true}
					type="text"
					reset={reset}
				/>
				
				<FieldControl
					id="Name"
					label="Nombre"
					isRequired={true}
					type="text"
					reset={reset}
				/>

				<FieldControl
					id="Description"
					label="Descripcion"
					isRequired={true}
					type="text"
					reset={reset}
				/>

				<FieldControl
					id="Logo"
					label="Logo"
					isRequired={true}
					type="text"
					reset={reset}
				/>

				<FieldControl
					id="Release"
					label="Fecha Liberacion"
					isRequired={true}
					type="date"
					reset={reset}
				/>

				<FieldControl
					id="Revision"
					label="Fecha Revision"
					isRequired={false}
					type="date"
					isDisabled={true}
					reset={reset}
				/>

			</form>

			<div className="form_container__buttons">
				<button onClick={handleReset}>Reiniciar</button>
				<input 
					type="submit" 
					value="Enviar" 
					disabled={hasError.length? true : false}
				/>
			</div>

		</main>
	);
}

export default Register;
