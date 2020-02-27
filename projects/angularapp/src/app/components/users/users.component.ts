import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded:boolean=false;

  constructor() {
    
   }

  ngOnInit(): void {
    
      this.users=[
        {
          firstName:'john',
          lastName:'Doe',
          age:30,
          address:{
              street:"50 Main str",
              city: "Boston",
              state:"Maa"
  
          }
        },
        {
          firstName:'amina',
          lastName:'anwar',
          age:33,
          address:{
              street:"51 Main str",
              city: "Noston",
              state:"Naa"
  
          }
        },
        {
          firstName:'nurbiyta',
          lastName:'anwaar',
          age:33,
          address:{
              street:"60 Main str",
              city: "Coston",
              state:"Naa"
  
          }
        } 
  
      ];

      this.loaded=true;
  

   
    
    // this.showExtended = false;

    

    this.addUser({
      firstName:'david',
      lastName:'Jackson',
      age:35,
     
    } 
    );
  }


  addUser(user: User){
    this.users.push(user);

  }

}
