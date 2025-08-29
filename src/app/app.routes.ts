
import { Routes } from '@angular/router';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';
import { CartComponent } from './components/cart/cart';
import { ProductPage } from './components/product-page/product-page';
import { UserLogin } from './components/user-admin-login/user-login';
import { UserRegister } from './components/user-register/user-register';
import { AboutUs } from './components/about-us/about-us';
import { NewArrivals } from './components/new-arrivals/new-arrivals';
import { DealsOfTheDay } from './components/deals-of-the-day/deals-of-the-day';
import { Sale } from './components/sale/sale';
import { ContactUs } from './components/contact-us/contact-us';
import { LoginPage } from './components/login-page/login-page';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { AdminDashboardOverview } from './components/admin-dashboard-overview/admin-dashboard-overview';
import { AdminProducts } from './components/admin-products/admin-products';
import { AdminSales } from './components/admin-sales/admin-sales';
import { AdminCustomers } from './components/admin-customers/admin-customers';
import { Adminlogin } from './components/adminlogin/adminlogin';
import { OrderSummaryComponent } from './components/order-summary/order-summary';
import { OrderHistoryComponent } from './components/order-history/order-history';
import { TrackOrderComponent } from './components/track-order/track-order';
import { OrderDetailsComponent } from './components/order-details/order-details';
import { AuthGuard } from './guards/auth.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LoginPage },
  { path: 'login', component: UserLogin },
  { path: 'register', component: UserRegister, canDeactivate: [UnsavedChangesGuard] },

  // Protected user routes
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: 'home/cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'products-page', component: ProductPage, canActivate: [AuthGuard] },
  { path: 'aboutus', component: AboutUs, canActivate: [AuthGuard] },
  { path: 'new-arrivals', component: NewArrivals, canActivate: [AuthGuard] },
  { path: 'deals-of-the-day', component: DealsOfTheDay, canActivate: [AuthGuard] },
  { path: 'sale', component: Sale, canActivate: [AuthGuard] },
  { path: 'contact-us', component: ContactUs, canActivate: [AuthGuard] },
  { path: 'order-summary', component: OrderSummaryComponent, canActivate: [AuthGuard] },
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: 'order-details/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
  { path: 'track-order/:id', component: TrackOrderComponent, canActivate: [AuthGuard] },

  // Admin login (public)
  { path: 'adminlogin', component: Adminlogin },

  // Admin dashboard (protected — use AdminGuard if needed)
  {
    path: 'admin',
    component: AdminDashboard,
    canActivate: [AuthGuard], // or [AdminGuard] if you separate roles
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardOverview },
      { path: 'products', component: AdminProducts },
      { path: 'sales', component: AdminSales },
      { path: 'customers', component: AdminCustomers }
    ]
  },

  { path: '**', component: NotFound }
];


