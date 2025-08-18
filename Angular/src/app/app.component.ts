import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent {
  dataSource: DataSource;

  constructor(service: Service) {
    this.dataSource = new DataSource({
      store: new ArrayStore({
        key: 'id',
        data: service.generateData(100),
      }),
    });
  }
}
