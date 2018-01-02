import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { EscolhaPage } from '../escolha/escolha';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   programacao: string = "Primeiro";
  isAndroid: boolean = false;


  public dia23;
  public dia24;
  public dia25;
  public dia26;

  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');

    this.dia23= [
      {img:'assets/imgs/denini.jpg',nome:'Denini Gabriel',tipo:"Oficina",titulo:"Ponteiro e Alocação Dinâmica em Linguagem C", horario:"9:00 - 11:00h"},
      {img:'assets/imgs/gustavo.jpg',nome:'Gustavo Almeida',tipo:"Palestra",titulo:"Metodologias Ágeis", horario:"9:00 - 12:00h"},
      {img:'assets/imgs/patricia.jpg',nome:'Patricia Lopes',tipo:"Palestra",titulo:"Computação em Nuvem", horario:"14:00 - 15:00h"},
      {img:'assets/imgs/eddie.jpg',nome:'Eddie Herson',tipo:"Palestra",titulo:"Sound Design", horario:"15:00 - 17:00h"},
      ];
      this.dia24= [
        {img:'assets/imgs/dayvid.jpg',nome:'Dayvid Silva',tipo:"Oficina",titulo:"Do miolo a casca, construindo uma API REST do zero com Node.js", horario:"9:00 - 12:00h"},
        {img:'assets/imgs/luan.jpg',nome:'Luan Augusto',tipo:"Não definido",titulo:"Não definido", horario:"14:00 - 16:00h"},
        {img:'assets/imgs/joao.jpg',nome:'João Neto',tipo:"Palestra",titulo:"KNoT: uma metaplataforma para Internet das Coisas", horario:"16:00 - 17:00h"}
        ];
        this.dia25= [
          {img:'assets/imgs/pedro.png',nome:'Pedro Vinícius',tipo:"Palestra",titulo:"Técnicas de Invasão", horario:"9:00 - 10:00h"},
          {img:'assets/imgs/eddie.jpg',nome:'Eddie Herson',tipo:"Mesa Redonda",titulo:"Todos os aspectos da música eletrônica: desde história, até o mercado.", horario:"10:00 - 12:00h"},
          {img:'assets/imgs/joedyson.jpg',nome:'Joédyson Bezerra',tipo:"Palestra",titulo:"Desenvolvendo aplicativos mobile híbrido com Ionic 3", horario:"14:00 - 15:00h"},
          {img:'assets/imgs/joao.jpg',nome:'João Neto',tipo:"Oficina",titulo:"Desenvolvendo uma aplicação web em microserviços com a Linguagem Go", horario:"15:00 - 17:00h"},
          ];
          this.dia26= [
            {img:'assets/imgs/sostenes.jpg',nome:'Sóstenes Gomes',tipo:"Oficina",titulo:"NoSQL + MongoDB: (Do conceito à aplicação, Implantando meu primeiro banco de dados distribuído.)", horario:"9:00 - 12:00h"},
            {img:'assets/imgs/rhuan.jpg',nome:'Rhuan Campos',tipo:"Palestra",titulo:"O mundo conectado na sua mão", horario:"14:00 - 15:00h"},
            {img:'assets/imgs/mylena.jpg',nome:'Mylena Suellen',tipo:"Palestra",titulo:"Marketing Digital", horario:"15:00 - 16:00h"},
            {img:'assets/imgs/aurineque.jpg',nome:'Aurineque Da Costa',tipo:"Palestra",titulo:"Criptomoedas e Blockchain (Open your Mind)", horario:"16:00 - 17:00h"},
            ];

  }
  Openmodal(palestra){
    this.navCtrl.push(EscolhaPage, { palestraSelecionada: palestra});
  }

}
