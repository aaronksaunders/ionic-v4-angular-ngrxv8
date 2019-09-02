import { ModalPage } from "./modal/modal.page ";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

@NgModule({
  entryComponents: [ModalPage],

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: HomePage }])
  ],
  declarations: [HomePage, ModalPage]
})
export class HomePageModule {}
