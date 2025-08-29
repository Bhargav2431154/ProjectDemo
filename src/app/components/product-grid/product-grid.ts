import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {
  products = [
    {
      image: 'assets/images/product1.avif',
      link: '/products-page',
      brand: 'H&M Shirts',
      originalPrice: 2499,
      discountedPrice: 1499
    },
    {
      image: 'assets/images/product2.avif',
      link: '/products-page',
      brand: 'Zara Cargo Jeans',
      originalPrice: 2999,
      discountedPrice: 1799
    },
    {
      image: 'assets/images/product3.avif',
      link: '/products-page',
      brand: 'Levi\'s',
      originalPrice: 3499,
      discountedPrice: 1999
    },
    {
      image: 'assets/images/product4.avif',
      link: '/products-page',
      brand: 'Jack & Jones',
      originalPrice: 2799,
      discountedPrice: 1599
    },
    {
      image: 'assets/images/product5.avif',
      link: '/products-page',
      brand: 'Roadster',
      originalPrice: 1999,
      discountedPrice: 999
    },
    {
      image: 'https://thfvnext.bing.com/th/id/OIP.gdbtSlJToadXz4AW4v0qGgHaFO?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
      link: '/products-page',
      brand: 'Adidas Shoe',
      originalPrice: 2299,
      discountedPrice: 1299
    },
    {
      image: 'assets/images/product7.avif',
      link: '/products-page',
      brand: 'Tommy Hilfiger',
      originalPrice: 3999,
      discountedPrice: 2499
    },
    {
      image: 'assets/images/product8.avif',
      link: '/products-page',
      brand: 'Allen Solly',
      originalPrice: 1899,
      discountedPrice: 1099
    },
    {
      image: 'https://thfvnext.bing.com/th/id/OIP.dtY1qot0pli5U2aQHALLtwHaHa?w=181&h=181&c=7&r=0&o=7&cb=thfvnext&dpr=1.5&pid=1.7&rm=3',
      link: '/products-page',
      brand: 'Nike Shoe',
      originalPrice: 2199,
      discountedPrice: 1399
    },
    {
      image: 'assets/images/product10.avif',
      link: '/products-page',
      brand: 'Peter England',
      originalPrice: 1699,
      discountedPrice: 899
    },
    {
      image: 'assets/images/product11.avif',
      link: '/products-page',
      brand: 'Wrangler',
      originalPrice: 2599,
      discountedPrice: 1499
    },
    {
      image: 'assets/images/product13.avif',
      link: '/products-page',
      brand: 'Flying Machine',
      originalPrice: 2099,
      discountedPrice: 1199
    },
        {
      image: 'https://thfvnext.bing.com/th/id/OIP.oa_6ZX84ENY5JN2ejMhYPwHaJQ?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
      link: '/products-page',
      brand: 'Peter England',
      originalPrice: 1699,
      discountedPrice: 899
    },
    {
      image: 'assets/images/product11.avif',
      link: '/products-page',
      brand: 'Wrangler',
      originalPrice: 2599,
      discountedPrice: 1499
    },
    {
      image: 'assets/images/product5.avif',
      link: '/products-page',
      brand: 'Roadster',
      originalPrice: 1999,
      discountedPrice: 999
    },
    {
      image: 'https://thfvnext.bing.com/th/id/OIP.kl3xTO2YKhpSV7RAjE2ypAHaHa?cb=thfvnext&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3',
      link: '/products-page',
      brand: 'H&M Shirts',
      originalPrice: 2499,
      discountedPrice: 1499
    },
    {
      image: 'assets/images/product2.avif',
      link: '/products-page',
      brand: 'Zara Cargo Jeans', 
      originalPrice: 2999,
      discountedPrice: 1799
    },
    {
      image: 'https://thfvnext.bing.com/th/id/OIP.WzaBde0DiN6DGTjaZyQkogHaHa?w=160&h=180&c=7&r=0&o=5&cb=thfvnext&dpr=1.5&pid=1.7',
      link: '/products-page',
      brand: 'Levi\'s',
      originalPrice: 3499,
      discountedPrice: 1999
    }
  ];
}
