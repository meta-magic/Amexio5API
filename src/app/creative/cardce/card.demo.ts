/**
 * Created by sagar on 04/02/19.
 */

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'card-ce-demo', templateUrl: './card.demo.html'
})
export class CreativeCardDemo {
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  contactList: any = [];
  constructor(private http: HttpClient) {
      this.getHtmlAndTypeScriptCode();
      this.contactList = [
        {
          'name': 'Ketan Gote',
          'description': 'UI/UX, Microservice, Kubernetes, Docker ',
          'imagepath': 'assets/images/profile/ketan.jpg',
          'bgcolor': 'linear-gradient(40deg,#12c2e9, #ec38bc)'
        },
        {
        'name': 'Sagar Jadhav',
        'description': 'Angular, Java, Microservices',
        'imagepath': 'assets/images/profile/sagar.jpeg',
        'bgcolor': 'linear-gradient(40deg,#141E30,#243B55)'
      },
      {
        'name': 'Dattaram Gawas',
        'description': 'UI / UX Desinger',
        'imagepath': 'assets/images/profile/dats.jpg',
        'bgcolor': 'linear-gradient(40deg,#a8ff78, #78ffd6)'
      },
      {
        'name': 'Rashmi Thakker',
        'description': 'UI Developer',
        'imagepath': 'assets/images/profile/rashmi.jpg',
        'bgcolor': 'linear-gradient(40deg,#457fca, #5691c8)'
      },
      {
        'name': 'Ashwini Agre',
        'description': 'UI Developer',
        'imagepath': 'assets/images/profile/ashwini.jpg',
        'bgcolor': 'linear-gradient(40deg,#bc4e9c, #f80759)'
      },
      {
        'name': 'Deepali Arvind',
        'description': 'Security Analyst',
        'imagepath': 'assets/images/profile/dipali.jpg',
        'bgcolor': 'linear-gradient(40deg,#40E0D0, #FF0080)'
      }
      ];
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/creative/cardce/creative.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/creative/cardce/creative.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }
}


