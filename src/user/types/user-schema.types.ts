export interface DatosUsuario {
    nombre: string,
    apellido: string,
    dni: number,
    telefono: number,
    cumpleanos?: Date
}

export interface Direccion {
    aclaracion?: string,
    altura?: number,
    calle?: string,
    cp?: number,
    localidad?: string,
    piso?: string,
    provincia: string
}

