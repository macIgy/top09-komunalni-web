import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/services/dynamicScriptService.service';

@Component({
  selector: 'app-aktuality',
  templateUrl: './aktuality.component.html',
  styleUrls: ['./aktuality.component.scss']
})
export class AktualityComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('twitterWidget').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }


}
