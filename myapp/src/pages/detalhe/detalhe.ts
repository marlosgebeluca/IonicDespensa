import { Component } from '@angular/core';
import { Produto, DespensaService } from '../../services/despensa.service';
import { NavParams, NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
  providers: [DespensaService]
})

export class DetalhePage {
  produto: Produto;

  constructor(private navParams: NavParams, public despensaService: DespensaService, public navCtrl: NavController) {
    this.produto = navParams.get('despensa');
  }

  excluir() {
    this.despensaService.remove(this.produto.id).subscribe(() => this.navCtrl.pop());
  }

  tirarFoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 150,
      targetWidth: 150,
    }).then(ImageData => {
      this.produto.foto = "data:image/jpeg;base64," + ImageData;
      this.despensaService.update(this.produto.id, this.produto)
        .subscribe();
    }, err => console.log(err))
  }

  alterarProduto(produto){
    this.despensaService.update(produto.id, produto).subscribe();  
  }
}