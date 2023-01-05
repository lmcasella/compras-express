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

  ngOnDestroy() {}
}
