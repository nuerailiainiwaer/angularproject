import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector:"app-user",
    // template:"<h2>me<h2>"
    templateUrl:"./user.component.html",
    styleUrls:['./user.component.css']

})


 export class UserComponents implements OnInit{
////properties
user:User;
   
    /////method
    constructor(){
       
    

    }

    ngOnInit(){
        this.user = {
            firstName:'john',
            lastName:'Doe',
            age:30,
            address:{
                street:"50 Main str",
                city: "Boston",
                state:"Maa"
 
            }
        }

    }


  


}


