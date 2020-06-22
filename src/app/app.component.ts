import { Component, OnInit } from '@angular/core';
import { DynamicLoaderService } from 'angular-dynamic-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-dynamic-loader-app';

  constructor(private loader: DynamicLoaderService) { }

  ngOnInit() {
  }

  startLoader() {
    /** loader starts */
    this.loader.show();

    setTimeout(() => {
      /** loader ends after 5 seconds */
      this.loader.hide();
    }, 5000);
  }
}
