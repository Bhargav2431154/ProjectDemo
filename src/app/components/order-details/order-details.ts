import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderService, Order } from '../../services/order-service';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, DatePipe, Header, Footer],
  templateUrl: './order-details.html',
  styleUrls: ['./order-details.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.order = this.orderService.getOrderById(orderId);
      // You can also add a check to handle cases where the order is not found
      if (!this.order) {
        console.error('Order not found!');
        // Optional: Redirect to order history or show a message
      }
    }
  }
}
