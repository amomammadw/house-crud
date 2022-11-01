export interface IUser {
    text: string
    age: number
    gender: 'male' | 'female'
}

export interface IModalOptions {
    text: string
    classes: string
}

export interface IHouseInfo {
    pic?: any
    imgSrc: string
    name: string
    category: EHouseCategory
}

export enum EHouseCategory {
    LivingRoom,
    Kitchen,
    DinningRoom,
}

export interface IHouseCategory {
    text: string
    value: EHouseCategory
}

export interface IHouseListHeaderBtns {
    icon: string
    link: string
}