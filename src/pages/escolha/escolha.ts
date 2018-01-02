import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

  public palestra;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.palestra = navParams.get('palestraSelecionada');
  }



}
