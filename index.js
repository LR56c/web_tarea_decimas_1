// con validacion
const rutId = document.getElementById("rut")
const rutWarning = document.getElementById("rut-warning")

const nombreId = document.getElementById("nombre")
const nombreWarning = document.getElementById("nombre-warning")

const paternoId = document.getElementById("paterno")
const paternoWarning = document.getElementById("paterno-warning")

const maternoId = document.getElementById("materno")
const maternoWarning = document.getElementById("materno-warning")

const edadId = document.getElementById("edad")
const edadWarning = document.getElementById("edad-warning")

const generoId = document.getElementById("genero")
const generoWarning = document.getElementById("genero-warning")

const celularId = document.getElementById("celular")
const celularWarning = document.getElementById("celular-warning")

// sin validacion
const nacimientoId = document.getElementById("fecha-nacimiento")
const nacimientoWarning = document.getElementById("nacimiento-warning")

const emailId = document.getElementById("email")
const emailWarning = document.getElementById("email-warning")

const profesionId = document.getElementById("profesion")
const profesionWarning = document.getElementById("profesion-warning")

const motivacionId = document.getElementById("motivacion")
const motivacionWarning = document.getElementById("motivacion-warning")

// otros
const formData = document.getElementById("form-data")
const formCarta = document.getElementById("form-carta")

const datosSubmit = document.getElementById("datos-submit")

const cartaId = document.getElementById("carta")
const cartaWarning = document.getElementById("carta-warning")

// estilos de validacion
const fieldWarningValid = ["hidden"]
const fieldWarningInvalid = ["block"]
const fieldInvalid = ["focus:ring-red-500", "focus:border-red-500"]
const fieldValid = ["focus:ring-green-500", "focus:border-green-500"]
const generoTypes = ["Hombre", "Mujer", "Otro"]

// functions
function checkRut() {
    const rut = String(rutId.value)
    if (typeof rut !== "string") {
    } else {
        if (rut.length >= 9 && rut.length <= 10) {
            rutId.classList.add(...fieldValid)
            rutWarning.classList.add(...fieldWarningValid)
            rutId.classList.remove(...fieldInvalid)
            rutWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    rutId.classList.add(...fieldInvalid)
    rutWarning.classList.add(...fieldWarningInvalid)
    rutId.classList.remove(...fieldValid)
    rutWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkNombre() {
    const nombre = String(nombreId.value)
    if (typeof nombre !== "string") {
    } else {
        if (nombre.length >= 3 && nombre.length <= 20) {
            nombreId.classList.add(...fieldValid)
            nombreWarning.classList.add(...fieldWarningValid)
            nombreId.classList.remove(...fieldInvalid)
            nombreWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    nombreId.classList.add(...fieldInvalid)
    nombreWarning.classList.add(...fieldWarningInvalid)
    nombreId.classList.remove(...fieldValid)
    nombreWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkPaterno() {
    const paterno = String(paternoId.value)
    if (typeof paterno !== "string") {
    } else {
        if (paterno.length >= 3 && paterno.length <= 20) {
            paternoId.classList.add(...fieldValid)
            paternoWarning.classList.add(...fieldWarningValid)
            paternoId.classList.remove(...fieldInvalid)
            paternoWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    paternoId.classList.add(...fieldInvalid)
    paternoWarning.classList.add(...fieldWarningInvalid)
    paternoId.classList.remove(...fieldValid)
    paternoWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkMaterno() {
    const materno = String(maternoId.value)
    if (typeof materno !== "string") {
    } else {
        if (materno.length >= 3 && materno.length <= 20) {
            maternoId.classList.add(...fieldValid)
            maternoWarning.classList.add(...fieldWarningValid)
            maternoId.classList.remove(...fieldInvalid)
            maternoWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    maternoId.classList.add(...fieldInvalid)
    maternoWarning.classList.add(...fieldWarningInvalid)
    maternoId.classList.remove(...fieldValid)
    maternoWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkEdad() {
    const edad = Number(edadId.value)
    if (typeof edad !== "number" || isNaN(edad) || edad <= 0) {
    } else {
        if (edad >= 18 && edad <= 35) {
            edadId.classList.add(...fieldValid)
            edadWarning.classList.add(...fieldWarningValid)
            edadId.classList.remove(...fieldInvalid)
            edadWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    edadId.classList.add(...fieldInvalid)
    edadWarning.classList.add(...fieldWarningInvalid)
    edadId.classList.remove(...fieldValid)
    edadWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkGenero() {
    if (generoTypes.includes(generoId.value)) {
        generoId.classList.add(...fieldValid)
        generoWarning.classList.add(...fieldWarningValid)
        generoId.classList.remove(...fieldInvalid)
        generoWarning.classList.remove(...fieldWarningInvalid)
        return true
    } else {
        generoId.classList.add(...fieldInvalid)
        generoWarning.classList.add(...fieldWarningInvalid)
        generoId.classList.remove(...fieldValid)
        generoWarning.classList.remove(...fieldWarningValid)
        return false
    }
}

function checkCelular() {
    const celular = String(celularId.value)
    if (typeof celular !== "string") {
    } else {
        if (celular.length >= 9 && celular.length <= 12) {
            celularId.classList.add(...fieldValid)
            celularWarning.classList.add(...fieldWarningValid)
            celularId.classList.remove(...fieldInvalid)
            celularWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    celularId.classList.add(...fieldInvalid)
    celularWarning.classList.add(...fieldWarningInvalid)
    celularId.classList.remove(...fieldValid)
    celularWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkNacimiento() {
    const nacimiento = new Date(nacimientoId.value)
    if (nacimiento < new Date()) {
        nacimientoId.classList.add(...fieldValid)
        nacimientoWarning.classList.add(...fieldWarningValid)
        nacimientoId.classList.remove(...fieldInvalid)
        nacimientoWarning.classList.remove(...fieldWarningInvalid)
        return true
    } else {
        nacimientoId.classList.add(...fieldInvalid)
        nacimientoWarning.classList.add(...fieldWarningInvalid)
        nacimientoId.classList.remove(...fieldValid)
        nacimientoWarning.classList.remove(...fieldWarningValid)
        return false
    }
}

function checkEmail() {
    const email = String(emailId.value)
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (typeof email === "string" && regex.test(email)) {
        emailId.classList.add(...fieldValid)
        emailWarning.classList.add(...fieldWarningValid)
        emailId.classList.remove(...fieldInvalid)
        emailWarning.classList.remove(...fieldWarningInvalid)
        return true
    } else {
        emailId.classList.add(...fieldInvalid)
        emailWarning.classList.add(...fieldWarningInvalid)
        emailId.classList.remove(...fieldValid)
        emailWarning.classList.remove(...fieldWarningValid)
        return false
    }
}

function checkProfesion() {
    const profesion = String(profesionId.value)
    if (typeof profesion !== "string") {
    } else {
        if (profesion.length > 0) {
            profesionId.classList.add(...fieldValid)
            profesionWarning.classList.add(...fieldWarningValid)
            profesionId.classList.remove(...fieldInvalid)
            profesionWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    profesionId.classList.add(...fieldInvalid)
    profesionWarning.classList.add(...fieldWarningInvalid)
    profesionId.classList.remove(...fieldValid)
    profesionWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkMotivacion() {
    const motivacion = String(motivacionId.value)
    if (typeof motivacion !== "string") {
    } else {
        if (motivacion.length > 0) {
            motivacionId.classList.add(...fieldValid)
            motivacionWarning.classList.add(...fieldWarningValid)
            motivacionId.classList.remove(...fieldInvalid)
            motivacionWarning.classList.remove(...fieldWarningInvalid)
            return true
        }
    }

    motivacionId.classList.add(...fieldInvalid)
    motivacionWarning.classList.add(...fieldWarningInvalid)
    motivacionId.classList.remove(...fieldValid)
    motivacionWarning.classList.remove(...fieldWarningValid)
    return false
}

function checkAll() {
    const bRut = checkRut()
    const bNombre = checkNombre()
    const bPaterno = checkPaterno()
    const bMaterno = checkMaterno()
    const bEdad = checkEdad()
    const bGenero = checkGenero()
    const bCelular = checkCelular()
    const bNacimiento = checkNacimiento()
    const bEmail = checkEmail()
    const bProfesion = checkProfesion()
    const bMotivacion = checkMotivacion()

    return bRut && bNombre && bPaterno && bMaterno && bEdad && bGenero && bCelular && bNacimiento && bEmail && bProfesion && bMotivacion
}

// events
rutId.addEventListener("input", () => {
    checkRut()
})

nombreId.addEventListener("input", () => {
    checkNombre()
})

paternoId.addEventListener("input", () => {
    checkPaterno()
})

maternoId.addEventListener("input", () => {
    checkMaterno()
})

edadId.addEventListener("input", () => {
    checkEdad()
})

generoId.addEventListener("input", () => {
    checkGenero()
})

celularId.addEventListener("input", () => {
    checkCelular()
})
nacimientoId.addEventListener("input", () => {
    checkNacimiento()
})

emailId.addEventListener("input", () => {
    checkEmail()
})

profesionId.addEventListener("input", () => {
    checkProfesion()
})

motivacionId.addEventListener("input", () => {
    checkMotivacion()
})

datosSubmit.addEventListener("click", () => {
    checkAll()
})

// form events
formData.addEventListener("submit", (e) => {
    e.preventDefault()
    if (checkAll()) {
        Swal.fire(
            'Bien hecho!',
            'Se ha enviando con exito',
            'success'
        )
    }
    else{
        Swal.fire(
            'Error!',
            'Revisa el formulario',
            'error'
        )
        return
    }
    formData.reset()
})
formCarta.addEventListener("submit", (e) => {
    e.preventDefault()
    formCarta.reset()

    if (checkAll()) {
        cartaWarning.classList.add(...fieldWarningValid)
        cartaWarning.classList.remove(...fieldWarningInvalid)
        Swal.fire(
            'Bien hecho!',
            'Se ha generado tu carta',
            'success'
        )
    } else {
        cartaWarning.classList.add(...fieldWarningInvalid)
        cartaWarning.classList.remove(...fieldWarningValid)
        Swal.fire(
            'Error!',
            'El formulario debe de estar completo para crear la carta de presentacion',
            'error'
        )
        return
    }

    cartaId.value += "Rut: " + rutId.value + "\n"
    cartaId.value += "Nombre: " + nombreId.value + "\n"
    cartaId.value += "Apellido Paterno: " + paternoId.value + "\n"
    cartaId.value += "Apellido Materno: " + maternoId.value + "\n"
    cartaId.value += "Edad: " + edadId.value + "\n"
    cartaId.value += "Genero: " + generoId.value + "\n"
    cartaId.value += "Celular: " + celularId.value + "\n"
    cartaId.value += "Fecha de Nacimiento: " + nacimientoId.value + "\n"
    cartaId.value += "Email: " + emailId.value + "\n"
    cartaId.value += "Profesion: " + profesionId.value + "\n"
    cartaId.value += "Motivacion: " + motivacionId.value
})
