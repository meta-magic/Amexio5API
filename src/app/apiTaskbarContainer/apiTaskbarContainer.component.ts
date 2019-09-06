import { Component, OnInit } from '@angular/core';
import { windowContainerService } from '../service/windowContainerService.service';
@Component({
    selector: 'api-taskbar-container',
    templateUrl: 'apiTaskbarContainer.component.html'
})

export class ApiTaskbarContainerComponent implements OnInit {
    taskBarName: any;
    singlePersonName: any;
    singleChat = false;
    items =[];
  
    constructor(public taskBarService: windowContainerService ) {
      this.taskBarName = [
        {
          "personName": "Johnny Depp",
          "path": "assets/images/taskbar-person/1.jpg",
          "type": "type1"
        },
        {
          "personName": "Angelina Jolie",
          "path": "assets/images/taskbar-person/2.jpg",
          "type": "type2",
          "imagePath": "assets/images/taskbar/image/angi.jpg"
  
        },
        {
          "personName": "Tom Cruise",
          "path": "assets/images/taskbar-person/4.jpg",
          "type": "type3",
          "videoPath": "assets/images/taskbar/image/tom.mp4"
        },
        {
          "personName": "Leonardo DiCaprio",
          "type": "type4",
          "path": "assets/images/taskbar-person/3.jpg",
  
        }
      ]
    }
  
    ngOnInit() { }

    onNameClick(data: any) {
      if (this.items && this.items.length === 0) {
        this.items.push(data);
      } else {
        let flag = false;
        this.items.forEach((element) => {
          if (element.personName === data.personName) {
            flag = true;
          }
        });
        if (!flag) {
          if (this.items.length < 3) {
            this.items.push(data);
          } else {
            debugger;
            this.items.push(data);
            this.items.splice (0,1);
          }
        }
      }
    }
    onitemremove(data: any) {
      this.items.forEach((element: any, index: any) => {
        if (element.personName === data.personName) {
          this.items.splice(index, 1);
        }
      });
    }
}