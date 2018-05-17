import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../review.service';
import {review} from '../../../review';
@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewlistComponent implements OnInit {

  reviewlist:review[];
  constructor(private rs:ReviewService) {

   }

  ngOnInit() {
    this.rs.getReviews().subscribe(
        (data:review[])=>{
          this.reviewlist=data;
        },
        (error)=>{
          alert("Unable to get data from server..!");
        }
    );
  }

}
