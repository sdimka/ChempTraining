import { Component} from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-Complete',
    templateUrl: './complete.component.html',
    styleUrls: ['./complete.component.scss']
})
export class CompleteComponent { 

    public href: string = "";

    constructor(private router: Router) {}

    ngOnInit() {
        this.href = this.router.url;
        console.log(this.router.url);
    }

}