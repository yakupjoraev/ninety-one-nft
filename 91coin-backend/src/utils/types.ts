export type CreateUserParams = {
    email: string;
}

export type VerifyEmailParams = {
    email: string;
    emailVerificationCode: string;
}

export type UpdateUserParams = {
    email: string;
    phone: string;
}

export type VerifyPhoneParams = {
    phone: string;
    phoneVerificationCode: string;
}

export type LoginParams = {
    phone: string;
}