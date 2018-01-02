import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare const google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 @ViewChild('map') mapRef:ElementRef;


  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
      this.DisplayMap();
    }

    DisplayMap() {
      const location = new google.maps.LatLng(-8.2388743,
        -35.98174918);

      const options = {
        center:location,
        zoom:18,
        streetViewControl:false,
      };

      const map = new google.maps.Map(this.mapRef.nativeElement,options);

      this.addMarker(location,map);
    }

    addMarker(position,map) {
      return new google.maps.Marker({
        position,
        map,
        title: 'UPE CARUARU'
      });
    }
}
