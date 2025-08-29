import { Component } from '@angular/core';
import { ProductListItem } from '../../models/product.types';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Rating } from "../rating/rating";
import { cartService } from '../../services/cart-Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deals-of-the-day',
  imports: [Header, Footer, Rating],
  templateUrl: './deals-of-the-day.html',
  styleUrl: './deals-of-the-day.css'
})
export class DealsOfTheDay {
    products: ProductListItem[] = [
        { id: '13', name: 'Pearl Necklace', price: 1190, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.mGo99saA9N-PYHHiJ_gjiQHaHa?w=184&h=184&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.3, collection: 'Best Seller', type: 'Accessories', gender: 'Women' },
  { id: '14', name: 'Striped Shirt Dress', price: 1380, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.DgVRfPR9YoDUVDIaJ_LG8AAAAA?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', rating: 4.0, collection: 'Support', type: 'Shirts', gender: 'Women' },
  { id: '15', name: 'Boho Graphic Tee', price: 990, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.Nx_LxjkNhQ7vnrZ3SQ4ZUwHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', rating: 4.2, collection: 'New Arrivals', type: 'T-Shirts', gender: 'Women' },
  { id: '16', name: 'Silver Pendant', price: 1530, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.JqAU49GCNWYws7Cm436yKgHaHN?w=207&h=201&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 3.8, collection: 'Sale', type: 'Accessories', gender: 'Women' },
  { id: '17', name: 'Cargo Pants', price: 1720, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.H84VuUmO4IOQiRNO3LnRPQHaLL?w=130&h=196&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.6, collection: 'Deal of the Day', type: 'Trousers', gender: 'Men' },
  { id: '18', name: 'Chambray Shirt', price: 1110, imageUrl: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17852642/2022/7/18/b839fec2-eb20-4831-8bcc-541ee8d6b9b01658139170541-Blackberrys-Men-Green--Grey-Slim-Fit-Printed-Casual-Shirt-73-1.jpg', rating: 4.0, collection: 'Best Seller', type: 'Shirts', gender: 'Men' },
  { id: '19', name: 'Retro Logo Tee', price: 1270, imageUrl: 'https://thfvnext.bing.com/th?q=T-Shirt+Pic+for+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247', rating: 4.3, collection: 'Support', type: 'T-Shirts', gender: 'Men' },
  { id: '20', name: 'Beaded Bracelet', price: 1600, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.gtuUhw7H0qNqucaMIEDLKQHaJ4?w=138&h=183&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.5, collection: 'New Arrivals', type: 'Accessories', gender: 'Women' },
  { id: '21', name: 'Tailored Shirt', price: 1490, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.wosk3Z62R2yvkq3LNQxDQQHaJ4?cb=thfvnext&pid=ImgDet&w=178&h=237&c=7&dpr=1.5&o=7&rm=3', rating: 4.2, collection: 'New Arrivals', type: 'Shirts', gender: 'Men' },
  { id: '22', name: 'Tie-Dye Tee', price: 1650, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.KfCYdbLqSCR1uudqbWnuhgHaJA?w=168&h=204&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.0, collection: 'Sale', type: 'T-Shirts', gender: 'Women' },
  { id: '23', name: 'Chambray Shirt', price: 1110, imageUrl: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17852642/2022/7/18/b839fec2-eb20-4831-8bcc-541ee8d6b9b01658139170541-Blackberrys-Men-Green--Grey-Slim-Fit-Printed-Casual-Shirt-73-1.jpg', rating: 4.0, collection: 'Best Seller', type: 'Shirts', gender: 'Men' },
  { id: '24', name: 'Retro Logo Tee', price: 1270, imageUrl: 'https://thfvnext.bing.com/th?q=T-Shirt+Pic+for+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247', rating: 4.3, collection: 'Support', type: 'T-Shirts', gender: 'Men' },
    ];
     constructor(private cartService: cartService,private router: Router) {}

     onClick(product: ProductListItem): void {
         this.cartService.addToCart(product)
        //  this.router.navigate(['home/cart']);
     }
     
}
