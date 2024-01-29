export const generateRandomNumber = (length: number) => {
    const min = 10 ** (length - 1)
    const max = 10 ** length
    return `${Math.ceil(Math.random() * (max - min) + min)}`
}

export const generateRandomString = (length: number) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
    }
    return result
}