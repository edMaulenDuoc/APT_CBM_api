import * as validar from './validadores.js';

/** 
 * Valida el formulario de inicio de sesión
 * @param {Object} formData - Valores del formulario
 * @param {string} formData.usuario - nombre de usuario
 * @param {string} formData.clave - Contraseña
 * @returns {Object{ esValido: boolean, mensaje: string }} - Resultado de la validación
*/
const validarLogin = (body) => {
    const validaciones = [
        { valor: body.usuario, metodo: validar.campoVacio,  args: ['Usuario'] },
        { valor: body.usuario, metodo: validar.largoString, args: [3, 25, 'Usuario'] },
        { valor: body.clave,   metodo: validar.campoVacio,  args: ['Contraseña'] },
        { valor: body.clave,   metodo: validar.largoString, args: [3, 15, 'Contraseña'] }
    ];
    
    return validar.ejecutarValidaciones(validaciones);
};

const validarFormEmergencia = (body) => {
    const validaciones = [
        { valor: body.tipo_id, metodo: validar.selecionado, args: ['Tipo de emergencia'] },
        { valor: body.direccion, metodo: validar.campoVacio, args: ['Dirección'] },
        { valor: body.direccion, metodo: validar.largoString, args: [5, 100, 'Dirección'] },
        { valor: body.vehiculos, metodo: validar.arrayVacio, args: ['Unidades a despachar'] },
    ];


    var resultado = validar.ejecutarValidaciones(validaciones);

    if (!resultado.esValido) return resultado;

    const validacionesInstituciones = body.instituciones.map((inst) => ({
        valor: inst.tipo_apoyo_id, metodo: validar.selecionado, args: ['Tipo de apoyo']
    }));

    resultado = validar.ejecutarValidaciones(validacionesInstituciones);

    return resultado;

}
export { validarLogin, validarFormEmergencia }