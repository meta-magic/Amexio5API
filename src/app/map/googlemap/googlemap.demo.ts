/**
 * Created by sagar on 9/1/18.
 */

import { Component } from '@angular/core';
import { GoogleMapOverlays } from 'amexio-ng-extensions';


@Component({
  selector: 'googlemap-demo',
  templateUrl: './googlemap.demo.html',
})
export class GoogleMapDemo {
  asyncFlag: boolean;
  data: GoogleMapOverlays[];
  markerdata: GoogleMapOverlays;
  script: string;

  constructor() {
  }
  removeLocation(event: any) {
    this.data = [];
  }
  addLocation(event: any) {
    this.data = [];
    this.data.push(new GoogleMapOverlays(43.653225, -79.383186, 'Toronto, Canada', true, 'assets/images/logos/amexio-logo.png', { country: 'Canada', capital: 'Toronto', population: '20, Million' }));
    this.data.push(new GoogleMapOverlays(39.904202, 116.407394, 'Beijing, China', true, 'assets/images/logos/amexio-logo.png', { country: 'China', capital: 'Beijing', population: '21, Million' }));
    this.data.push(new GoogleMapOverlays(-6.175110, 106.865036, 'Jakarta, Indonesia', true, 'assets/images/logos/amexio-logo.png', { country: 'Indonesia', capital: 'Jakarta', population: '9, Million' }));
    this.data.push(new GoogleMapOverlays(-15.826691, -47.921822, 'Brasília, Brazil', true, 'assets/images/logos/amexio-logo.png', { country: 'Brazil', capital: 'Brasília', population: '2.41, Million' }));
    this.data.push(new GoogleMapOverlays(9.0765, 7.3986, 'Abuja, Nigeria', true, 'assets/images/logos/amexio-logo.png', { country: 'Nigeria', capital: 'Abuja', population: '776,298' }));
    this.data.push(new GoogleMapOverlays(23.8103, 90.4125, 'Dhaka, Bangladesh', true, 'assets/images/logos/amexio-logo.png', { country: 'Bangladesh', capital: 'Dhaka', population: '8, Million' }));
    this.data.push(new GoogleMapOverlays(55.7558, 37.6173, 'Moscow, Russia', true, 'assets/images/logos/amexio-logo.png', { country: 'Russia', capital: 'Moscow', population: '11, Million' }));
    this.data.push(new GoogleMapOverlays(35.6895, 139.6917, 'Tokyo, Japan', true,'assets/images/logos/amexio-logo.png', { country: 'Japan', capital: 'Tokyo', population: '9.73, Million' }));
    this.data.push(new GoogleMapOverlays(19.4326, - 99.1332, 'Mexico City, Mexico', true, 'assets/images/logos/amexio-logo.png', { country: 'Mexico', capital: 'Mexico City', population: '8.51, Million' }));
    this.data.push(new GoogleMapOverlays(14.5995, 120.9842, 'Manila, Philippines', true, 'assets/images/logos/amexio-logo.png', { country: 'Philippines', capital: 'Manila', population: '1.73, Million' }));
    this.data.push(new GoogleMapOverlays(8.9806, 38.7578, 'Addis Ababa, Ethiopia', true,'assets/images/logos/amexio-logo.png', { country: 'Ethiopia', capital: 'Addis Ababa', population: '33, Lakh' }));
    this.data.push(new GoogleMapOverlays(30.0444, 31.2357, 'Cairo, Egypt', true, 'assets/images/logos/amexio-logo.png', { country: 'Egypt', capital: 'Cairo', population: '19, Million' }));
    this.data.push(new GoogleMapOverlays(35.6892, 51.3890, 'Tehran, Iran', true, 'assets/images/logos/amexio-logo.png', { country: 'Iran', capital: 'Tehran', population: '8.96, Million' }));
    this.data.push(new GoogleMapOverlays(52.5200, 13.4050, 'Berlin, Germany', true,'assets/images/logos/amexio-logo.png', { country: 'Germany', capital: 'Berlin', population: '3.57, Million' }));
    this.data.push(new GoogleMapOverlays(39.9334, 32.8597, 'Ankara, Turkey', true, 'assets/images/logos/amexio-logo.png', { country: 'Turkey', capital: 'Ankara', population: '5.44, Million' }));
    this.data.push(new GoogleMapOverlays(13.7563, 100.5018, 'Bangkok, Thailand', true, 'assets/images/logos/amexio-logo.png', { country: 'Thailand', capital: 'Bangkok', population: '8, Million' }));
    this.data.push(new GoogleMapOverlays(48.8566, 2.3522, 'Paris, France', true, 'assets/images/logos/amexio-logo.png', { country: 'France', capital: 'Paris', population: '2.2, Million' }));
    this.data.push(new GoogleMapOverlays(51.5074, -0.1278, 'london, United Kingdom', true, 'assets/images/logos/amexio-logo.png', { country: 'United Kingdom', capital: 'london', population: '8.1, Million' }));
    this.data.push(new GoogleMapOverlays(41.9028, 12.4964, 'Rome, Italy', true, 'assets/images/logos/amexio-logo.png', { country: 'Italy', capital: 'Rome', population: ',2.8 Million' }));
    this.data.push(new GoogleMapOverlays(-33.9249, 18.4241, 'Cape Town, South Africa', true,'assets/images/logos/amexio-logo.png', { country: 'South Africa', capital: 'Cape Town', population: ',4 Lakh' }));
    this.data.push(new GoogleMapOverlays(40.4168, -3.7038, 'Madrid, Spain', true, 'assets/images/logos/amexio-logo.png', { country: 'Spain', capital: 'Madrid', population: ',3.16 Million' }));
    this.data.push(new GoogleMapOverlays(50.4501, 30.5234, 'Kiev, Ukraine', true, 'assets/images/logos/amexio-logo.png', { country: 'Ukraine', capital: 'Kiev', population: ',2.8 Million' }));

  }

  onMarkerClick(event: GoogleMapOverlays) {
    this.markerdata = event;
  }
}


