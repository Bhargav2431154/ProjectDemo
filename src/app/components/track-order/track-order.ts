import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-order.html',
  styleUrls: ['./track-order.css']
})
export class TrackOrderComponent implements OnInit {

  orderId: string | null = null;

  trackingStatus: string = 'delivered';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.orderId = this.route.snapshot.paramMap.get('id');
  }

}
