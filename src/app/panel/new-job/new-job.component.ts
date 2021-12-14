import {Component, OnInit} from '@angular/core';
import {JobService} from "../../services/job.service";
import {Category} from "../../models/category";
import {latLng, tileLayer} from 'leaflet';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-new-job',
    templateUrl: './new-job.component.html',
    styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {
    categories: Category[] = [];
    options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom: 5,
        center: latLng(46.879966, -121.726909)
    };
    form: FormGroup;

    constructor(private jobService: JobService,
                private formBuilder : FormBuilder) {
        this.form = this.formBuilder.group(
            {
                title: new FormControl('',[Validators.required]),
                type: new FormControl('',[Validators.required]),
                location: new FormControl('',[Validators.required]),
                category: new FormControl(false),
                des: new FormControl(false),
            }
        )
    }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.jobService.getCategories().subscribe((res: Category[]) => {
            this.categories = res;
        })
    }
}
