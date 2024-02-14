const validateEmail = (email: any) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
const validatePhone = (phone: any) => /^\+?77([0124567][0-8]\d{7})$/.test(phone)

export {
    validateEmail,
    validatePhone,
}