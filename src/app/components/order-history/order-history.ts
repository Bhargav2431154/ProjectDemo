import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService, Order } from '../../services/order-service';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, DatePipe, Header, Footer],
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.css']
})
export class OrderHistoryComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  private ordersSubscription!: Subscription;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to the orders$ observable to get all orders in real-time
    this.ordersSubscription = this.orderService.getOrders().subscribe(allOrders => {
      this.orders = allOrders;
    });
  }

  ngOnDestroy(): void {
    if (this.ordersSubscription) {
      this.ordersSubscription.unsubscribe();
    }
  }

  // Method to view the order details page
  viewOrderDetails(orderId: string): void {
    this.router.navigate(['/order-details', orderId]);
  }

  // Method to view the track order page
  trackOrder(orderId: string): void {
    this.router.navigate(['/track-order', orderId]);
  }
}