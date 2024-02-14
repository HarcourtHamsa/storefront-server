export interface UserInterface{
    first_name: string,
    last_name: string,
    email_address: string,
    phone?: string
    password: string
    id?: string
    status?: string
}

export enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DEACTIVATED = "DEACTIVATED",
    DELETED = "DELETED",
}