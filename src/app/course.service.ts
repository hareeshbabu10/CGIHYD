import { Injectable } from '@angular/core';
import {course}  from './course';

@Injectable()
export class CourseService {
private courselist:course[];
    
  constructor() {
      this.courselist=[
        {
          name: "Angular",
          image: "angular2.png",
          price: 19000,
          description: "Googles Single page app framework"
        },
        {
          name: "ASP.net",
          image: "asp.png",
          price: 11000,
          description: "DOT NET language for server scripting"
        },
        {
          name: "HTML 5",
          image: "html5.png",
          price: 10000,
          description: "Latest standard for HTML"
        },
        {
          name: "CSS3",
          image: "CSS3.png",
          price: 10000,
          description: "Latest Standard for CSS"
        },
        {
          name: "Redhat",
          image: "redhat.png",
          price: 18000,
          description: "Enterprise grade linux system"
        },
        {
          name: "Hadoop",
          image: "hadoop.png",
          price: 20000,
          description: "Ecosystem for Big Data"
        },
        {
          name: "AWS",
          image: "aws.png",
          price: 20000,
          description: "Leading Cloud service provider"
        },
        {
          name: "Java",
          image: "java.png",
          price: 9000,
          description: "Plaftorm independent language"
        },
        {
          name: "SQL",
          image: "SQL.png",
          price: 9000,
          description: "Standard language for RDBMS systems"
        }



      ]
   }  

   getCourses():course[]{
      return this.courselist;
   }

}

/*
  name,description,price and image
  */