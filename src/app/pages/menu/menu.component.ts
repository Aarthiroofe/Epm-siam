import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  addapps:any = []
  menudatas:any[]=[]
  constructor(private router: Router,) { 
    this.menudatas=[
      {id:0, icons:'../../../assets/images/hdashicon.png',name:'Analytics', routing:'/layout/dashboard'},
      {id:1, icons:'../../../assets/images/hpeopleicon.png',name:'People',routing:'/layout/employe-list'},
      {id:2, icons:'../../../assets/images/hsettingicon.png',name:'Settings',routing:'/layout/settings'}
    ]
  }

  ngOnInit(): void {
    this.addapps=JSON.parse(localStorage.getItem('apps')!)
  }
  myapp(data:any){
  this.addapps= JSON.parse(localStorage.getItem('apps')!);
  if (this.addapps==null){
    this.addapps=[];
  }
  if(this.addapps.length < 3){
      const x = this.addapps.find((ref:any)=>{
       return ref.id===data.id
      }
      )
      if(!x){
        this.addapps.unshift(data);
        localStorage.setItem('apps',JSON.stringify(this.addapps))
      }
      if(x){
        this.addapps.map((item:any,i:any)=>{
          if(item.id==data.id){
            this.addapps.splice(i,1);
            this.addapps.unshift(item);
            localStorage.setItem('apps',JSON.stringify(this.addapps))
          }
        })  
      }
  }else{
    this.addapps.map((item:any,i:any)=>{
      if(item.id==data.id){
        this.addapps.splice(i,1);
        this.addapps.unshift(item);
        localStorage.setItem('apps',JSON.stringify(this.addapps))
      }
    })
  }
  }
  recentapp(data:any){
  console.log(data);
  this.addapps.map((item:any,i:any)=>{
    if(item.id==data.id){
      this.addapps.splice(i,1);
      this.addapps.unshift(item);
      localStorage.setItem('apps',JSON.stringify(this.addapps))
    }
  })
  }

}
