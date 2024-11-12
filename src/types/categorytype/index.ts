
export type SubcategoryType = {
    "_id": string;
    "name": string;
    "isEmpty": boolean;
    "description": string;
    "counter": number;
    "__v": number
}

export type FileType = {
    "_id": string;
    "name": string;
    "isEmpty": boolean;
    "icon": string;
    "counter": number;
    "__v": number;
}

export type CategoryType = {
    "_id": string;
    "name": string;
    "isEmpty": boolean;
    "counter": number;
    "subcategories": SubcategoryType[];
    "includedFiles": FileType[];
    "createdAt": string;
    "updatedAt": string;
    "__v": number;
}

