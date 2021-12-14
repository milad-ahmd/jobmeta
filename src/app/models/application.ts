import {Meta} from "./applicationList";

export interface Resume {
    path: string;
    name: string;
    type: string;
    size: number;
    mime: string;
    meta: Meta
}

export class Application {
    job_id: number;
    name: string;
    phone: string;
    email: string;
    status: string;
    resume: Resume;

    constructor(input: any = {}) {
        this.job_id = input.job_id;
        this.name = input.name;
        this.phone = input.phone;
        this.email = input.email;
        this.status = input.status;
        this.resume = input.resume;
    }
}
