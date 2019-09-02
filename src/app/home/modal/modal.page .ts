import { Input, Component } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal-page",
  templateUrl: "modal.page.html",
  styleUrls: []
})
export class ModalPage {
  // Data passed in by componentProps
  @Input() aParam: string;

  constructor(navParams: NavParams, public modalCtrl: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get("aParam"));
  }

  onSave(_value) {
    console.log(_value);
    this.modalCtrl.dismiss({
      "cancelled": _value == null,
      response: _value
    });
  }
}
