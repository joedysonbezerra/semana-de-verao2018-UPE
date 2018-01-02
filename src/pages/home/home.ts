import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl:AlertController , private iab:InAppBrowser, private network: Network) {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      let alert = this.alertCtrl.create({
        title: 'Ligue sua Internet',
        subTitle: 'Algumas funções podem não funcionar, sem a internet',
        buttons: ['OK']
      });
      alert.present();
    });

  }
  openWebpage(){
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.iab.create('https://www.even3.com.br/evento/login?evento=semanaupecaruaru', '_self',options);
  }
}
