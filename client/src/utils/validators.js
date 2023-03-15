export const validateName = (name) => {
    if(!name) {
        return 'Name is required';
    }

    if (!/[A-Za-ząćęłńóśźż]/.test(name)) {
        return 'Invalid name';
    }

    return false
}
export const validateEmail = (email) => {
    if(!email) {
        return 'E-mail is required'
    }
    if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(email)) {
        return 'Invalid e-mail'
    }

    return false
}

export const validateLogs = (logs) => {
    if(!logs) {
        return 'Logs are required'
    }

    return false
}

