import { Component} from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-CompleteNew',
    templateUrl: './completeNew.component.html',
    styleUrls: ['./completeNew.component.scss']
})
export class CompleteNewComponent { 

    public href: string = "";

    constructor(private router: Router) {}

    ngOnInit() {
        this.href = this.router.url;
        console.log(this.router.url);
    }

}