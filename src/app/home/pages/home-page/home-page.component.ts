import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../../state/actions/products.actions';
import { Observable } from 'rxjs';
import { selectProductsLoading } from '../../../state/selectors/products.selectors';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectProductsLoading);

    this.store.dispatch(loadProducts());
  }
}
