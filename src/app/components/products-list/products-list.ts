import { Component } from '@angular/core';
import { Productservice } from '../../services/productservice';
import { ProductListItem } from '../../models/product.types';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rating } from '../rating/rating';
import { Router } from '@angular/router';
import { cartService } from '../../services/cart-Service';
import { ProductDetailComponent } from '../product-detail/product-detail';

@Component({
  selector: 'app-products-list',
  standalone: true,
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css'],
  imports: [CurrencyPipe, Rating, FormsModule, CommonModule, ProductDetailComponent],
  providers: [Productservice]
})
export class ProductsList {
  products: ProductListItem[] = [];
  filteredProducts: ProductListItem[] = [];
  selectedProduct: ProductListItem | null = null;

  searchTerm: string = '';
  selectedCollection: string = 'All';
  selectedType: string = 'All';
  selectedGender: string = 'All';

  collections: string[] = ['All', 'New Arrivals', 'Sale', 'Deal of the Day', 'Best Seller'];
  types: string[] = ['All', 'Shirts', 'T-Shirts', 'Trousers', 'Accessories'];
  genders: string[] = ['All', 'Men', 'Women'];

  constructor(private productService: Productservice, private router: Router, private cartService: cartService) {
    this.products = this.productService.getProductList();
    this.filteredProducts = [...this.products];
  }

  onProductClick(product: ProductListItem): void {
    this.selectedProduct = product;
  }

  addToCart(product: ProductListItem): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/home/cart']);
  }

  closeDetail(): void {
    this.selectedProduct = null;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onCollectionChange(collection: string): void {
    this.selectedCollection = collection;
    this.applyFilters();
  }

  onTypeChange(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }

  onGenderChange(gender: string): void {
    this.selectedGender = gender;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCollection = this.selectedCollection === 'All' || product.collection === this.selectedCollection;
      const matchesType = this.selectedType === 'All' || product.type === this.selectedType;
      const matchesGender = this.selectedGender === 'All' || product.gender === this.selectedGender;
      return matchesSearch && matchesCollection && matchesType && matchesGender;
    });
  }

  trackByProduct(index: number, product: ProductListItem): string {
    return product.id;
  }
}
