import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userEmail: string = '';
  userLogin: string = '';
  userPassword: string = '';
  userId: number = 1;
  editStatus: boolean;
  emptyStatus: boolean;
  users: Array<IUser> = [];
  toggle: boolean;
  someEditIndex: number;

  constructor() {
    this.users = arrUser;
    console.log(this.users);
  }

  ngOnInit() {
  }


  emptyField(): boolean {
    if ((this.userLogin.length !== 0) && (this.userPassword.length !== 0) && (this.userEmail.length !== 0)) {
      this.emptyStatus = false;
    } else {
      this.emptyStatus = true;
    }
    return this.emptyStatus;
  }

  addUser(): void {
    if (!this.emptyField()) {
      const newUser: User = new User(this.userId, this.userLogin, this.userPassword, this.userEmail);
      if (this.users.length > 0) {
        newUser.id = this.users.slice(-1)[0].id + 1;
      }
      this.users.push(newUser);
      this.userEmail = '';
      this.userPassword = '';
      this.userLogin = '';
    }
  }

  saveEditUser(): void {
    if (!this.emptyField()) {
      const newUser: User = new User(this.userId, this.userLogin, this.userPassword, this.userEmail);
      this.users[this.someEditIndex] = newUser;
      this.userEmail = '';
      this.userPassword = '';
      this.userLogin = '';
      this.toggle = false;
    }
  }

  delete(index): void {
    this.users.splice(index, 1);
  }

  edit(index): void {
    this.userEmail = this.users[index].email;
    this.userPassword = this.users[index].password;
    this.userLogin = this.users[index].login;
    this.toggle = true;
    this.someEditIndex = index;
    document.getElementsByClassName('')
  }

}

interface IUser {
  id: number;
  login: string;
  password: string;
  email: string;
}

class User implements IUser {
  constructor(
    public id: number,
    public login: string,
    public password: string,
    public email: string
  ) { }
}

const arrUser = [];
