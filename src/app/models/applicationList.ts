export interface Meta {
    width: number;
    height: number;
}

export interface Resume {
    path: string;
    name: string;
    type: string;
    size: number;
    mime: string;
    meta: Meta;
    url: string;
}

export interface Data {
    lng: number;
    lat: number;
}

export interface Location {
    type: string;
    data: Data;
}

export interface Job {
    id: number;
    created_at: any;
    title: string;
    type: string;
    location: Location;
}

export interface Application {
    id: number;
    created_at: any;
    job_id: number;
    name: string;
    phone: string;
    email: string;
    status: string;
    resume: Resume;
    _job: Job;
}

export interface ApplicationList {
    itemsReceived: number;
    curPage: number;
    nextPage: number;
    prevPage?: any;
    itemsTotal: number;
    pageTotal: number;
    items: Application[] | [];
}
