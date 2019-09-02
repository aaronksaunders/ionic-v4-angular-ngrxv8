import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as Actions from "../item.actions";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "./modal/modal.page ";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  items$: Observable<any>;

  constructor(
    private store: Store<{ itemData: any }>,
    public modalController: ModalController
  ) {
    this.items$ = store.pipe(select("item"));
  }

  addItem(_value: string) {
    this.store.dispatch(
      Actions.addItem({
        item: {
          id: new Date().getTime(),
          name: _value,
          updated: new Date()
        }
      })
    );
  }
  removeItem(_item) {
    this.store.dispatch(Actions.removeItem({ item: _item }));
  }
  reset() {
    this.store.dispatch(Actions.clearItems());
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { aParam: "aParam - value" }
    });

    modal.onWillDismiss().then(({ data }) => {
      console.log(data);
      if (data.cancelled) {
        console.log("cancelled");
      } else {
        this.addItem(data.response);
      }
    });

    return await modal.present();
  }
}
