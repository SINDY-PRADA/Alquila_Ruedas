const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {

	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	numeroDoc: /^\d{6,10}$/, // 6 a 10 numeros.
	numeroMovil: /^\d{7,10}$/, // 7 a 10 numeros.
	username: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const campos = {

	nombre: false,
	numeroDoc: false,
	numeroMovil: false,
	username: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');

		break;
		case "numeroDoc":
			validarCampo(expresiones.numeroDoc, e.target, 'numeroDoc');

		break;
		case "numeroMovil":
			validarCampo(expresiones.numeroMovil, e.target, 'numeroMovil');

		break;
		case "username":
			validarCampo(expresiones.username, e.target, 'username');
		break;

	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit#1', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre  && campos.numeroDoc && campos.numeroMovil && campos.username   ){
		;

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});