import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../enquiry.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {
  name:string;
  email:string;
  message:string;
  errors:boolean=false;
  errorlist:string[];
  sending:boolean=false;
  filename:string;

  constructor(private es:EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry():void{
      this.errorlist=[]; 
      this.errors=false;
      let regex=/^[a-z][a-z_\.0-9]+@[a-z]+\.[a-z]{3,5}$/;
      
      if(this.name==undefined || this.name.length==0)
         this.errorlist.push("Name should be filled");
      
      if(this.email==undefined || this.email.length==0)
         this.errorlist.push("email must be filled");

      else if(!regex.test(this.email))
         this.errorlist.push("not in email format");
      
       if(this.message==undefined || this.message.length==0)
         this.errorlist.push("Message should be filled");

         if(this.errorlist.length>0)
         {
           this.errors=true;
         }

         else{
            this.sending=true;
            this.filename="loading.gif";
            let obj={name:this.name,message:this.message,email:this.email};
            this.es.sendEnquiry(obj).subscribe(
              ()=>{
                this.filename="sent.png";
                setTimeout(()=>{
                  this.sending=false;
                  this.email="";
                  this.name="";
                  this.message="";
                },2000);
              },
              ()=>{
                  alert("Enquiry not sent...!!!");
                  setTimeout(()=>{
                    this.sending=false;
                    this.email="";
                    this.name="";
                    this.message="";
                  },1000);

              }
            )

         }
         
  
  }

}
