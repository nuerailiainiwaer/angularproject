import { Component } from '@angular/core';

@Component({
    selector:"app-user",
    // template:"<h2>me<h2>"
    templateUrl:"./user.component.html",
    styleUrls:['./user.component.css']

})


 export class UserComponents{
////properties
    firstName='john';
    lastName="Doe";
    age=30;
    /////method
    constructor(){
        //console.log('fuck you all');

    }


    sayHello(){
        console.log(`hello${this.lastName}`);
    }

    hasBirthDay(){
        this.age +=1;
    }


}
