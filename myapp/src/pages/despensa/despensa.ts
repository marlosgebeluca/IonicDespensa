import { Component } from '@angular/core';
import { Produto, DespensaService } from '../../services/despensa.service';
import { AlertController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DetalhePage } from '../detalhe/detalhe';
import { AddItemPage } from '../item/addItem';

@Component({
  selector: 'page-despensa',
  templateUrl: 'despensa.html',
  providers: [DespensaService]
})

export class DespensaPage {
  items: Observable<Produto[]>;

  constructor(private despensaService : DespensaService, public alertCtrl: AlertController, public navCtrl: NavController){ }

  ionViewWillEnter() {
    this.items = this.despensaService.get();
  }

  addProduto(ev, produto: Produto){
    // let prompt = this.alertCtrl.create({
    //   title: 'Adicionar Produto',
    //   inputs: [{name: 'produto', placeholder: 'Digite seu produto'},
    //   {name: 'quantidade', placeholder: 'Digite a quantidade', type: 'number', value: "0" }],
    //   buttons:[
    //     {text: 'Cancelar'},
    //     {
    //       text: 'Salvar',
    //       handler: data => {
    //         this.despensaService.add({ title: data.produto, quantidade: data.quantidade })
    //           .subscribe(() =>  this.items = this.despensaService.get() );
    //       }
    //     }
    //   ]
    // });

    // prompt.present();
    this.navCtrl.push(AddItemPage, {despensa: produto });
  }

  removerProduto(ev, produto: Produto){
    this.despensaService.remove(produto.id)
      .subscribe(() => this.items = this.despensaService.get());
    ev.stopPropagation();
  }

  detalhe(ev, produto: Produto){
    this.navCtrl.push(DetalhePage, {despensa: produto });
    ev.stopPropagation();
  }
}