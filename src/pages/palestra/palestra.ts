import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { EscolhaPage } from '../escolha/escolha';


@Component({
  selector: 'page-palestra',
  templateUrl: 'palestra.html'
})
export class PalestraPage {
   programacao: string = "Primeiro";
  isAndroid: boolean = false;


  public dia23;
  public dia24;
  public dia25;
  public dia26;

  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');

    this.dia23= [
      {img:'assets/imgs/denini.jpg',nome:'Denini Gabriel',tipo:"Oficina",titulo:"Ponteiro e Alocação Dinâmica em Linguagem C", horario:"9:00 - 11:00h",descricao:"Será abordado um tema que para muitos é dificil, de uma forma totalmente prática e divertida Alocação dinâmica e ponteiros são bases da linguagem C então vamos dominar esse assunto"},
      {img:'assets/imgs/gustavo.jpg',nome:'Gustavo Almeida',tipo:"Palestra",titulo:"Metodologias Ágeis", horario:"9:00 - 12:00h",descricao:"Apresentação ao universo ágil, Métodos Ágeis e breve visão PMBOK vs Métodos Ágeis"},
      {img:'assets/imgs/patricia.jpg',nome:'Patricia Lopes',tipo:"Palestra",titulo:"Computação em Nuvem", horario:"14:00 - 15:00h",descricao:"Computação em nuvem é uma tecnologia que vem sendo adotada por diversas empresas no Brasil. Essa adoção se dá devido ás diversas vantagens que a técnica proporciona alguns dos tópicos que serão abordados nesta palestra são: conceito,características,modelo de nuvem, modelo de serviços em nuvem, além das vantagens mencionadas e desafios para sua implementação. Então se você não sabe o que é computação em nuvem ou deseja aprender mais, participe da palestra "},
      {img:'assets/imgs/eddie.jpg',nome:'Eddie Herson',tipo:"Palestra",titulo:"Sound Design", horario:"15:00 - 17:00h",descricao:"Tutorial de como juntar 2 músicas eletrônicas(ou mais) em apenas uma. Obervação: Levar fones de ouvido."},
      ];
      this.dia24= [
        {img:'assets/imgs/dayvid.jpg',nome:'Dayvid Silva',tipo:"Oficina",titulo:"Do miolo a casca: construindo uma API REST do zero com Node.js", horario:"9:00 - 12:00h",descricao:"Node.js é um interpretador de código JavaScript que funciona do lado do servidor. Seu objetivo é ajudar programadores na criação de aplicações de alta escalabilidade (como um servidor), com códigos capazes de manipular dezenas de milhares de conexões simultâneas, numa única máquina física."},
        {img:'assets/imgs/luan.jpg',nome:'Luan Augusto',tipo:"Oficina",titulo:"Programação Orientada a Objetos em Java", horario:"14:00 - 16:00h",descricao:"Para aqueles que estão iniciando no mundo da programação orientada a objetos, será abordado os conceitos indispensáveis do paradigma com uma linguagem de programação nativa em orientação a objetos, o Java."},
        {img:'assets/imgs/joao.jpg',nome:'João Neto',tipo:"Palestra",titulo:"KNoT: uma metaplataforma para Internet das Coisas", horario:"16:00 - 17:00h",descricao:"Uma das principais ameaças ao potencial da IoT é a falta de interoperabilidade entre as heterogêneas plataformas de software e hardware existentes no mercado. Para resolver isso, o CESAR (Centro de Estudos e Sistemas Avançados do Recife) desenvolveu o KNoT, uma solução que não pretender atuar como mais uma plataforma tradicional, mas sim fazer as plataformas existentes conversarem. Nesta atividade, iremos aprender como desenvover uma aplicação simples com o KNoT, utilizando todos os seus componentes."}
        ];
        this.dia25= [
          {img:'assets/imgs/pedro.png',nome:'Pedro Vinícius',tipo:"Palestra",titulo:"Técnicas de Invasão", horario:"9:00 - 10:00h",descricao:"Alguns cenários e técnicas sobre segurança da informação."},
          {img:'assets/imgs/eddie.jpg',nome:'Eddie Herson',tipo:"Mesa Redonda",titulo:"Todos os aspectos da música eletrônica: desde história, até o mercado.", horario:"10:00 - 12:00h",descricao:"Mesa redonda de discussão aberta sobre música eletrônica. Vamos entender e conversar sobre, história, sub-gêneros, artistas e mercado nacional e internacional."},
          {img:'assets/imgs/joedyson.jpg',nome:'Joédyson Bezerra',tipo:"Palestra",titulo:"Desenvolvendo aplicativos mobile híbrido com Ionic 3", horario:"14:00 - 15:00h",descricao:"Com a chegada do Ionic 3 uma tecnologia híbrida onde criamos um aplicativo para Ios , Android e Windows phone com um único código sem precisar programar em java ou objective - c só utilizando typescript. Possibilitando assim entregas mais rápidas, uma única equipe e manutenção mais barata"},
          {img:'assets/imgs/joao.jpg',nome:'João Neto',tipo:"Oficina",titulo:"Desenvolvendo uma aplicação web em microserviços com a Linguagem Go", horario:"15:00 - 17:00h",descricao:"A linguagem de programação Go está ganhando força no mercado de desenvolvimento ao redor do mundo. Criada por experientes engenheiros do Google, a linguagem pretende ser simples, robusta e escalável. Nesta atividade, vamos entender melhor como utiliza-la para desenvolver aplicações web que seguem a arquitetura de microserviços."},
          ];
          this.dia26= [
            {img:'assets/imgs/sostenes.jpg',nome:'Sóstenes Gomes',tipo:"Oficina",titulo:"NoSQL + MongoDB: (Do conceito à aplicação, Implantando meu primeiro banco de dados distribuído.)", horario:"9:00 - 12:00h",descricao:"Que tal aprender praticando, sobre NoSQL e bancos de dados distribuídos, umas das tecnologias mais importantes na área de TI!? Venha se libertar das correntes do modelo relacional e também da falta de tolerância a falhas. Não sabe que bichos são esses? Então vem com a gente!"},
            {img:'assets/imgs/rhuan.jpg',nome:'Rhuan Campos',tipo:"Palestra",titulo:"O mundo conectado na sua mão", horario:"14:00 - 15:00h",descricao:"Uma conversa desmistificando um pouco sobre como pode todo o mundo está alcançável na sua mão de forma simples e rápida."},
            {img:'assets/imgs/mylena.jpg',nome:'Mylena Suellen',tipo:"Palestra",titulo:"Identidade Digital: Por que o programador precisa do marketing digital", horario:"15:00 - 16:00h",descricao:"Uma conversa com programadores e futuros programadores sobre a importância da sua identidade na rede social, já que a procura por saber quem você é começa pelo seu perfil."},
            {img:'assets/imgs/aurineque.jpg',nome:'Aurineque Da Costa',tipo:"Palestra",titulo:"Criptomoedas e Blockchain (Open your Mind)", horario:"16:00 - 17:00h",descricao:"Atualmente vemos várias notícias sobre as criptomoedas, sobre tudo o bitcoin. Isso deve-se ao fato da bitcoin ser algo revolucionário, e também por sua crescente jamais vista. Nesse cenário de muita empolgação também surge o medo e as dúvidas, com muitos passando a focar apenas no que está a sua frente sem perceber o que realmente está acontecendo. Por um lado vemos a bitcoin com sua alta absurda e os críticos falando de bolha e falhas no sistema. Por outro temos o surgimento de algo tão revolucionário quanto a própria Internet. Vamos ampliar nossa visão e olhar para totalidade, para assim podermos ver o que ninguém consegue imaginar."},
            ];

  }
  Openmodal(palestra){
    this.navCtrl.push(EscolhaPage, { palestraSelecionada: palestra});
  }

}
