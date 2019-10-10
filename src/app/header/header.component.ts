import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isRed: boolean;
  addColor: string = 'green';
  visability: boolean;
  newPhone: string;
  arrPhone: Array<string> = ['iPhone XIR', 'iPhone XI Pro', 'iPhone Max Pro'];
  editStatus: boolean;
  editIndex: number;
  constructor() { }

  ngOnInit() {
  }

  changeStatus(): void {
    this.isRed = !this.isRed;
    if (this.addColor === 'green') {
      this.addColor = 'yellow';
    } else {
      this.addColor = 'green';
    }
  }

  toggle(): void {
    this.visability = !this.visability;
    console.log(this.visability);
  }

  add(): void {
    if (this.newPhone) {
      this.arrPhone.push(this.newPhone);
    }
    this.newPhone = '';
  }

  delete(index: number): void {
    this.arrPhone.splice(index, 1);
  }

  edit(index: number): void {
    this.newPhone = this.arrPhone[index];
    this.editIndex = index;
    this.editStatus = true;
  }

  saveEdit(): void {
    this.arrPhone.splice(this.editIndex, 1, this.newPhone);
    // this.arrPhone[this.editIndex] = this.newPhone;
    this.newPhone = '';
    this.editStatus = false;
  }

}

const arr: any[] = [];
