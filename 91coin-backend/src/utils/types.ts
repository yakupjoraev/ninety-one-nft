export type CreateUserParams = {
    email: string;
}

export type UpdateUserParams = {
    email: string;
    phone: string;
}

export type LoginUserParams = {
    phone: string;
    phoneVerificationCode: string;
}