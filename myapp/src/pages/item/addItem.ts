import { Component } from '@angular/core';
import { Produto, DespensaService } from '../../services/despensa.service';
import { NavParams, NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-addItem',
  templateUrl: 'addItem.html',
  providers: [DespensaService]
})

export class AddItemPage {
  produto: Produto;
  nome: string = "";
  foto: string = "";
  quantidade: number = 0;

  constructor(private navParams: NavParams, public despensaService: DespensaService, public navCtrl: NavController) {
    this.produto = navParams.get('despensa');
  }

  tirarFoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 150,
      targetWidth: 150,
    }).then(ImageData => {
      this.foto = "data:image/jpeg;base64," + ImageData;
    }, err => console.log(err))
  }

  incluir(){
     this.despensaService.add({ title: this.nome, quantidade: this.quantidade, foto: this.foto }).subscribe(() => this.navCtrl.pop());
  }
}