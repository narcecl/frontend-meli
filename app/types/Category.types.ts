export interface CategoryValueProps{
    id: string; 
    name: string;
    results: number;
}

export interface CategoryProps{
    id: string;
    name: string;
    type: string;
    values: CategoryValueProps[];
}
