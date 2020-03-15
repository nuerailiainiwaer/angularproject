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
  enableAdd: boolean=true;
  currentClasses={};
  currentStyle={};

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
  
          },
          image:'http://lorempixel.com/600/600/people/3',
          isActive:true,
          balance:86,
          registered: new Date('03/11/2018 06:20:00')
        },
        {
          firstName:'amina',
          lastName:'anwar',
          age:78,
          address:{
              street:"51 Main str",
              city: "Noston",
              state:"Naa"
  
          },
          image:'http://lorempixel.com/600/600/people/4',
          isActive:false,
          balance: 78,
          registered: new Date('03/11/2018 06:20:00')

        },
        {
          firstName:'nurbiyta',
          lastName:'anwaar',
          age:33,
          address:{
              street:"60 Main str",
              city: "Coston",
              state:"Naa"
  
          },
          image:'http://lorempixel.com/600/600/people/1',
          isActive:false,
          balance: 50,
          registered: new Date('03/11/2015 06:20:00')
        } 
  
      ];

      this.loaded=true;



      // this.setCurrentClaasses();
      // this.setCurrentStyle();
  

   
    
    // this.showExtended = false;

    

    
    
  }


  addUser(user: User){
    this.users.push(user);

  }


  ///class binding

  setCurrentClaasses(){
    this.currentClasses={
      'btn-success':this.enableAdd,
      'big-text':this.showExtended
      
    }
  }

  ///style binding ngstyle

  setCurrentStyle(){
    this.currentStyle={
      'padding-top' : this.showExtended ? '0' : '40px',
      'font-size':this.showExtended ? '': '40px'
    }
  }

}
