import { Component, EventEmitter, input, Input, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input({required: true}) user!: User; 
  @Output() select = new EventEmitter();
  @Input({required: true}) selected!:boolean;

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
  }
}
