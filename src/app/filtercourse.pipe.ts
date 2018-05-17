import { Pipe, PipeTransform } from '@angular/core';
import {course} from './course';
@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], pricerange: string): course[] {
    let temp:course[]=[];
    if(pricerange == "All courses")
      return courses;
      
    if(pricerange=="High Price"){
        for(let x in courses)
           if(courses[x].price>15000)
               temp.push(courses[x]);
         return temp;     
    }
    else if(pricerange=="Moderate Price"){
      for(let x in courses)
      if(courses[x].price>=11000 && courses[x].price<15000)
          temp.push(courses[x]);
      return temp;  
    }
    else
    {
      for(let x in courses)
      if(courses[x].price<11000)
          temp.push(courses[x]);
      return temp;
    }
    




  }

}
