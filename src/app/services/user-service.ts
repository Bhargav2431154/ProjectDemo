import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      username: "kishan123",
      email: "kishankr1122@gmail.com",
      phone: "1234567890",
      gender: "male",
      password: "kishan123",
    },
    {
      id: 2,
      username: "bhargav",
      email: "bhargav@gmail.com",
      phone: "1234567890",
      gender: "male",
      password: "bhargav",
    }
  ];

  private currentUserSubject = new BehaviorSubject<User | null>(this.loadUserFromStorage());
  currentUser$ = this.currentUserSubject.asObservable();

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUserSubject.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  updateCurrentUser(updatedUser: User): void {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      this.currentUserSubject.next(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  }

  register(user: User): void {
    const maxId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id!)) : 0;
    user.id = maxId + 1;
    this.users.push(user);
  }

  private loadUserFromStorage(): User | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }
}
