import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  users = DUMMY_USERS;
  protected readonly title = signal('first-angular-app');
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
