import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  constructor(private homeService: HomeService) {
    this.getItems();
  }

  items: any[] = [];

  getItems() {
    this.homeService.getProducts().subscribe((e) => {
      e.forEach((element) => {
        this.items.push({
          id: element.payload.doc.id,
          ...(element.payload.doc.data() as {}),
        });
      });
    });
  }
}
