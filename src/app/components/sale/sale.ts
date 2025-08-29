import { Component, NgModule } from '@angular/core';
import { Header } from "../header/header";
import { Rating } from "../rating/rating";
import { Footer } from "../footer/footer";
import { ProductListItem } from '../../models/product.types';
import { cartService } from '../../services/cart-Service';
import { Router, RouterModule, Routes } from '@angular/router';
import { CurrencyPipe, ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-sale',
  imports: [Header, Rating, Footer],
  templateUrl: './sale.html',
  styleUrl: './sale.css',
  providers: [CurrencyPipe]
})
export class Sale {
     products: ProductListItem[] = [
{ id: '25', name: 'Floral Shirt', price: 1180, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.OE3fnNrU8OaZ-zcW1IuCJQHaJ4?cb=thfvnext&pid=ImgDet&w=178&h=237&c=7&dpr=1.5&o=7&rm=3', rating: 4.6, collection: 'Deal of the Day', type: 'Shirts', gender: 'Women' },
{ id: '26', name: 'Basic Cotton Tee', price: 1010, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.nsWi4J7KPsdxUNuvIGP5mwHaJ4?w=147&h=187&c=7&r=0&o=5&cb=thfvnext&dpr=1.5&pid=1.7', rating: 4.1, collection: 'Sale', type: 'T-Shirts', gender: 'Men' },
{ id: '27', name: 'Woven Belt', price: 1240, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.16uVIbedUwFVzu9mfYi7uwHaHa?w=215&h=215&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.4, collection: 'New Arrivals', type: 'Accessories', gender: 'Women' },
{ id: '28', name: 'High-Rise Linen Trousers', price: 2050, imageUrl: 'data:image/webp;base64,UklGRg4HAABXRUJQVlA4IAIHAAAQSgCdASovAcYBPp1OnUylrCyoJLI4+ZATiWlu8nN3vS/GzSaNtdeivyANtgPKQysT1G71w+OkBM7g3ozPJoNqtYQkRMX9nFQdWsISImL+zioOrV8lUimTR+DA8GBPVc8/T3/Ns7H9nFI9vvQOFcW/B3VbuaRExf2Fo1aIgLXelDoYBPRcOrUts0HGj04p+8AQAO7+zioNe2Zzg+kP1wPbfxNnY/s4b8doTZ6CJpsqSHmqMcRYuGwY5bfrln0DnLIn9jTItsRMX9msHTV6iPyptNO2LyyoGpFkWy2Lh1avmUdfcYKo7f2prd0HdVCjYUParWDn8ya+VKn+5luiv8N+O5UIQa5pRvHh1awc2UiwquDzUD2YhOB01jurDiInY/jBhEI3cqEiCge3ByKIdTOx/Zw4mM4rvLLkpdcpGrvzf0Ty/s4crlTNrNlyjI7mRw9iRR02ZyOIsW/YS3UkrKlpSXehtpHk1owB/ZxSL/J0qYJGRNSUqYIUzX59nRcNsE23Q7YzGqTHPmgv18ELq2YrYv7C9bWrS9YJCjEaUmnlbO8kgErsXY/s1hoWrAyiOVH9hkqc1Ji65577h1aje6jFnbdx2sNy0d2BMKwPlliZ6Lh0vsYvQQci0nsCk70+I3cn9nFIGw8FL8kIH9UiS/ruSp3yFBQx0aYuHVeEgzRNF4P85zasraJErP9HqD7h1aizTi+5gtAiOT4TLqpZmj9EcykoJWS/3WEX0gIL7Jqml8pS2aLq32/bbqeParWOAzYYUwpJnFQdWsISImL+zioOrWEJETF/ZxSAAP7+44AAAACZVwXMVsDFu187QEYYM5aSBIK/Y03gGh5tbzaW95N6zLHYtQ4L7SwxAx9xQLcHE2hk4apg7C5h0BuyZHN7VIa1FcOlL3XqX5FSj5UMcuCEX6P92oYB83p3aILWXqUgvaeVRntkhXk1+9A07or96Qv5soQS8GHw+W9AAP/k8f6tgDS7wEtG+LBhJGlPgpOsWmPIbqqPrw1mkGHghizoHbjxJo7uonWVLF6kI2fd01rQTzwxivcKackqy+Za8czo+ZfhCvWGhThGAIYZreism/RtjH8WBsXs83D3p020c/ipO865o0L+znExekVTUDyBtv2Xwgz6+gDs3mG2AJL0EEgWTawkYSzsbVu8fPvc8XkT518LuYlAkqjAtuKWsPSijNLcRjxsxTK7J9eT86+lA2KlKp4TOwJuGXB6jPjkVpLQ8GMX8OPbL6PwhUSAimMKKJL24f4wH/OSi3d4x2ht6OQROOq5ZI3oGcA132ZhZYdFQZaYF3C5flBca74NJbXhKK2K2Qv2hgTydFZLVv+4UI0fwOFENQiJtRfcRp75Jh3020KD/vUCd1rfoR/LUVj2nTFCFOO6YrrzPWj9MhzYWznnWmVBgKsJ3rWcHMbuoIuKftzVNEpTmsDS8sjcO6ben+Rzp1XHGgR6q3KQ4rag5iqWF8ElqSxe3mrnhaWEUocJhTiNBhLhodHBPupE8mPxmv96jyIZy8GFRTAwPDhTGphGt3+x1ikbpJB4+URgu5MuF5Tn+fN42quOWV/aIYaz8+v6xA8acKDSmv5NGx8uQtbLuWfl9aLkTnEeF4NXgxGcy7TeLxJECAhrJ5/cw75wkE9PRgntEtjBmAN3Z6iR/5FBZhrLJ8Fmg2sN1ixICkD7MvjNSjhEba4ZN9dRDgkHSJRniwH1h3gE1Z98BzksAG177fNQpBXHK/hUdAq9WKIzHtNu9EMcIS3SUqqNRtm/s8jG9Kl6rwYFZInrzefckSj2M8nskCzIsj8QsPEoEDe1JPcDA4cNrbmYUdN7c9r+VgwXbR5tOBwbQJxnUfiueN9FWEsJZ9Z9ibPOKQQCseoEhgfpeKptKFv7WvSXRDSPLLI9Ss/96WihadlodxIOljyb4QwDqFHrGllFuYB/IJGm1mi1tcAS8GH4RI+JFJiXZhlYWWGGkCKkr/Ba5n5vRL1tAjwyE74OnSZa71NicKADsB7dVtRUdXLt1NKq3CgoNZdA7/M075S6v9UvJqp9E3NDKhe/7jKuZRvrNmnlVax3h2EbXsovwbfo6Ig4G87tb7Lu1hxHCIi7Tlz0JTMIhpgkSTtQF4cKpu/gLajayylmnXV0gmHHqWiizGxk7INJitjrV4mvjOGRaLGwn9kCq6UKW2hpMlw15eYkFN7NYEylMrYlVVa376sGReI67TNl7QOvYiqta9C6+mKHOtR3hPwibkoUdIVRoFrQVJoiax5vMEX3U0x60r0Oicj9EqcgF1BO8byaZ4qN5VnThET7Wx7lb2PZb+Ps1Re0MpG0eL4F8j3TvsWA7P3fvuKtd/WnjR7WwdgoHpOsGbREjqLR5pQjAQBn7WQN4JWWpwAAAAAAAAA=', rating: 4.8, collection: 'Best Seller', type: 'Trousers', gender: 'Women' },
{ id: '29', name: 'Slim Fit Oxford Shirt', price: 1570, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.59_vzU0jdbK8KaTvG2jmKQHaJ4?cb=thfvnext&pid=ImgDet&w=178&h=237&c=7&dpr=1.5&o=7&rm=3', rating: 3.6, collection: 'Deal of the Day', type: 'Shirts', gender: 'Men' },
{ id: '30', name: 'Minimalist Leather Wallet', price: 1420, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.ltwX1JYz_KiuNRtw4tMCAAHaHa?w=200&h=200&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.4, collection: 'Support', type: 'Accessories', gender: 'Women' },
{ id: '31', name: 'Retro Print Tee', price: 1740, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.ZrmkbgpWRs5XRdJ17qqvwAHaHa?w=194&h=194&c=7&r=0&o=5&cb=thfvnext&dpr=1.5&pid=1.7', rating: 3.7, collection: 'New Arrivals', type: 'T-Shirts', gender: 'Men' },
{ id: '32', name: 'Wide-Leg Cotton Trousers', price: 860, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.N6DPj626MU0_J28jgeUIegHaJ4?w=202&h=269&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.0, collection: 'Sale', type: 'Trousers', gender: 'Women' },
{ id: '33', name: 'Layered Charm Bracelet', price: 1210, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.eGo4DZm8VJ9-opWLsvcrawHaHa?w=184&h=184&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.2, collection: 'Best Seller', type: 'Accessories', gender: 'Women' },
{ id: '34', name: 'Striped Cotton Shirt', price: 1360, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.uuf_scMHAgutfs7oAMGdngAAAA?cb=thfvnext&pid=ImgDet&w=178&h=237&c=7&dpr=1.5&o=7&rm=3', rating: 4.1, collection: 'Support', type: 'Shirts', gender: 'Women' },
{ id: '35', name: 'Vintage Logo Tee', price: 980, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.gPXd1tEKgMiVEnizg9OpIwAAAA?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', rating: 4.3, collection: 'New Arrivals', type: 'T-Shirts', gender: 'Women' },
{ id: '36', name: 'Geometric Pendant Necklace', price: 1500, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.0mcPotZW2qhb0RNcTzDpTQHaJx?w=146&h=193&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 3.9, collection: 'Sale', type: 'Accessories', gender: 'Women' },
{ id: '37', name: 'Tapered Fit Cargo Pants', price: 1690, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.mj0fqdZRDmNIV0eSIpcIngAAAA?w=177&h=350&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3', rating: 4.7, collection: 'Deal of the Day', type: 'Trousers', gender: 'Men' },
{ id: '38', name: 'Classic Button-Down Shirt', price: 1090, imageUrl: 'https://thfvnext.bing.com/th/id/OIP.eJA2sakC_t_keCUUSI0CbgHaJS?cb=thfvnext&pid=ImgDet&w=178&h=223&c=7&dpr=1.5&o=7&rm=3', rating: 4.0, collection: 'Best Seller', type: 'Shirts', gender: 'Men' },

     ];
     constructor(private cartService: cartService,private router: Router,
      private scroller: ViewportScroller
     ) {}

     onClick(product: ProductListItem): void {
         this.cartService.addToCart(product);
        //  this.router.navigate(['home/cart']);
         this.scroller.scrollToPosition([0, 0]);
     }
}
