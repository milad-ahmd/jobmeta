export interface Data {
    lng: number;
    lat: number;
}

export interface Location {
    type: string;
    data: Data;
}

export interface Category {
    category: string;
    category_id: number;
}

export interface Job {
    id: number;
    created_at: any;
    title: string;
    description: string;
    type: string;
    location: Location;
    category: Category[];
}

export interface JobList {
    itemsReceived: number;
    curPage: number;
    nextPage?: any;
    prevPage?: any;
    itemsTotal: number;
    pageTotal: number;
    items: Job[];
}



