export interface StoreInterface{
    name: string,
    owner_id: string,
    category: string,
}

export enum StoreStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DEACTIVATED = "DEACTIVATED",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED",
}