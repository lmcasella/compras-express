import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProductsList } from 'src/app/state/selectors/products.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}

  products$: Observable<any> = new Observable();

  ngOnInit() {
    this.products$ = this.store.select(selectProductsList);
  }

  // getItems() {
  //   this.homeService.getProducts().subscribe((data) => {
  //     this.items = [];
  //     data.forEach((element) => {
  //       this.items.push({
  //         id: element.payload.doc.id,
  //         ...(element.payload.doc.data() as {}),
  //       });
  //     });
  //     console.log(this.items);
  //   });
  // }

  ngOnDestroy() {}
}
