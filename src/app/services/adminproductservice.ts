import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  image: string;
  name: string;
  category: string;
  brand?: string;
  price: number;
  stock: number;
  status: 'Active' | 'Inactive' | 'Out of Stock';
  description?: string;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop',
      name: 'Oxford Cotton Shirt',
      category: 'T-Shirts',
      brand: 'Nike',
      price: 1299,
      stock: 4,
      status: 'Active',
      description: 'Comfortable cotton t-shirt with classic fit',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&h=150&fit=crop',
      name: 'Slim Fit Jeans',
      category: 'Jeans',
      brand: 'Levi\'s',
      price: 2499,
      stock: 32,
      status: 'Active',
      description: 'Premium denim jeans with slim fit',
      createdAt: new Date('2024-01-14')
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=150&h=150&fit=crop',
      name: 'Summer Dress',
      category: 'Dresses',
      brand: 'Zara',
      price: 1899,
      stock: 18,
      status: 'Active',
      description: 'Light and comfortable summer dress',
      createdAt: new Date('2024-01-13')
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop',
      name: 'Running Shoes',
      category: 'Shoes',
      brand: 'Adidas',
      price: 3499,
      stock: 25,
      status: 'Active',
      description: 'Professional running shoes with cushioning',
      createdAt: new Date('2024-01-12')
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop',
      name: 'Leather Belt',
      category: 'Accessories',
      brand: 'Fossil',
      price: 899,
      stock: 8,
      status: 'Out of Stock',
      description: 'Genuine leather belt with classic buckle',
      createdAt: new Date('2024-01-11')
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&h=150&fit=crop',
      name: 'Hooded Sweatshirt',
      category: 'T-Shirts',
      brand: 'Puma',
      price: 1799,
      stock: 0,
      status: 'Out of Stock',
      description: 'Comfortable hooded sweatshirt for casual wear',
      createdAt: new Date('2024-01-10')
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=150&h=150&fit=crop',
      name: 'Formal Shirt',
      category: 'T-Shirts',
      brand: 'Raymond',
      price: 2199,
      stock: 15,
      status: 'Active',
      description: 'Professional formal shirt for office wear',
      createdAt: new Date('2024-01-09')
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=150&h=150&fit=crop',
      name: 'Casual Sneakers',
      category: 'Shoes',
      brand: 'Converse',
      price: 2899,
      stock: 22,
      status: 'Active',
      description: 'Classic casual sneakers for everyday wear',
      createdAt: new Date('2024-01-08')
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=150&h=150&fit=crop',
      name: 'Evening Dress',
      category: 'Dresses',
      brand: 'H&M',
      price: 3999,
      stock: 5,
      status: 'Active',
      description: 'Elegant evening dress for special occasions',
      createdAt: new Date('2024-01-07')
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop',
      name: 'Wrist Watch',
      category: 'Accessories',
      brand: 'Casio',
      price: 1599,
      stock: 12,
      status: 'Active',
      description: 'Stylish wrist watch with leather strap',
      createdAt: new Date('2024-01-06')
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  productsChanged$: any;

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  addProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const newProduct: Product = {
      ...product,
      id: Math.max(...this.products.map(p => p.id)) + 1,
      createdAt: new Date()
    };
    this.products.push(newProduct);
    this.productsSubject.next([...this.products]);
    return of(newProduct);
  }

  updateProduct(id: number, updates: Partial<Product>): Observable<Product | undefined> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updates };
      this.productsSubject.next([...this.products]);
      return of(this.products[index]);
    }
    return of(undefined);
  }

  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.productsSubject.next([...this.products]);
      return of(true);
    }
    return of(false);
  }

  getProductsByStatus(status: Product['status']): Observable<Product[]> {
    const filtered = this.products.filter(p => p.status === status);
    return of(filtered);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filtered = this.products.filter(p => p.category === category);
    return of(filtered);
  }
}
