import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DespensaPage } from '../pages/despensa/despensa';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AddItemPage } from '../pages/item/addItem';

@NgModule({
  declarations: [
    MyApp,
    DespensaPage,
    DetalhePage,
    AddItemPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DespensaPage,
    DetalhePage,
    AddItemPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
