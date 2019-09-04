/**
 * Created by kedar on 28/8/19.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'taskbar-demo',
  templateUrl: './taskbar.demo.html',
})
export class TaskbarDemo {

  taskBarName: any;
  singlePersonName: any;
  singleChat = false;
  items =[];

  constructor() {
    this.taskBarName = [
      {
        "personName": "Johnny Depp",
        "path": "assets/images/taskbar-person/1.jpg"
      },
      {
        "personName": "Angelina Jolie",
        "path": "assets/images/taskbar-person/2.jpg"
      },
      {
        "personName": "Leonardo DiCaprio",
        "path": "assets/images/taskbar-person/3.jpg"
      },
      {
        "personName": " Tom Cruise",
        "path": "assets/images/taskbar-person/4.jpg"
      },
      {
        "personName": " Sylvester Stallone",
        "path": "assets/images/taskbar-person/5.jpg"
      },
      {
        "personName": "Arnold Schwarzenegger",
        "path": "assets/images/taskbar-person/6.jpg"
      },
      {
        "personName": "Christian Bale",
        "path": "assets/images/taskbar-person/7.jpg"
      },
      {
        "personName": "Hugh Jackman",
        "path": "assets/images/taskbar-person/8.jpg"
      },
      {
        "personName": "Will Smith",
        "path": "assets/images/taskbar-person/9.jpg"
      },
      {
        "personName": " Vin Diesel",
        "path": "assets/images/taskbar-person/10.jpg"
      },
      {
        "personName": "Scarlett Johansson",
        "path": "assets/images/taskbar-person/11.jpg"
      }
    ]
  }

  onNameClick(data: any) {
    if (this.items && this.items.length === 0) {
      this.items.push(data);
    } else {
      let flag = false;
      this.items.forEach(element => {
        if (element.personName === data.personName) {
          flag = true;
        }
      });
      if (!flag) {
        this.items.push(data);
      }
    }
  }
  onItemRemove(node: any) {
    this.items.forEach((element: any, index) => {
      if (element.personName === node.personName) {
        this.items.splice(index, 1);
      }
    });
  }

}



