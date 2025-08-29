import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Body } from "../body/body";
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ProductGrid } from '../product-grid/product-grid';


@Component({
  selector: 'app-home',
  imports: [Navbar, Body,Header,Footer,ProductGrid],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
