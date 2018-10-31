import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private languages = [
    {
      name: "English",
      isoCode: "en"
    },
    {
      name: "中文（简体）",
      isoCode: "zh",
      useIdeograms: true
    }
  ];

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService
  ) {}

  public save(newLang: string): void {
    this.translate.use(newLang);
  }
}
