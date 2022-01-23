export interface Contact
{
    id: string;
    avatar?: string | null;
    background?: string | null;
    name: string;
    emails?: {
        email: string;
        label: string;
    }[];
    phoneNumbers?: {
        country: string;
        phoneNumber: string;
        label: string;
    }[];
    title?: string;
    company?: string;
    birthday?: string | null;
    address?: string | null;
    notes?: string | null;
    tags: string[];

    _id?: string;
    tagName?: string[];
    birthDay?: string;
    gender: string;
    urlPhoto?: string;
    type?: string;
    numberRemain?: string;
    parentCode?: string | null;
    parentType?: string | null;
    classType?: string | null;
    device?: string | null;
    tokenDevice?: string | null;
    status?: string;
    code?: string | null;
    phoneNumber: string;
    firstName: string;
    email?: string;
}


export interface Contacts{
    data : Contact[]
}
export interface Country
{
    id: string;
    iso: string;
    name: string;
    code: string;
    flagImagePos: string;
}

export interface Tag
{
    id?: string;
    title?: string;
}
