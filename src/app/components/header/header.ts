import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit, OnDestroy {
  open = false;
  currentUser: User | null = null;
  private userSub!: Subscription;

  constructor(public router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userSub = this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/landing-page']);
  }
}
