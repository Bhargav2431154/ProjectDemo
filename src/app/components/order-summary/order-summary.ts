import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Import NgForm
import { Router } from '@angular/router';
import { OrderService } from '../../services/order-service';
import { ProductListItem } from '../../models/product.types';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './order-summary.html',
  styleUrls: ['./order-summary.css']
})
export class OrderSummaryComponent implements OnInit {

  orderDetails: ProductListItem[] = [];
  totalAmount: number = 0;
  customerName: string = '';
  contactInfo: string = '';
  shippingAddress: string = '';

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    const preCheckoutOrder = this.orderService.getAndClearPreCheckoutOrder();
    if (preCheckoutOrder) {
      this.orderDetails = preCheckoutOrder.items;
      this.totalAmount = preCheckoutOrder.totalAmount;
    } else {
      alert('No order to display. Redirecting to cart.');
      this.router.navigate(['/cart']);
    }
  }

  proceedToPay(form: NgForm): void {

    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }

    alert(`Payment of ₹${this.totalAmount.toFixed(2)} is done.`);

    const customerDetails = {
      name: this.customerName,
      contact: this.contactInfo,
      address: this.shippingAddress
    };
    this.orderService.createOrder(this.orderDetails, this.totalAmount, customerDetails);

    this.router.navigate(['/order-history']);
  }
}
