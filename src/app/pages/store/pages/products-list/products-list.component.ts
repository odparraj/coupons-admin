import { Component, OnInit, HostListener } from '@angular/core';
import { NbLayoutScrollService, NbLayoutRulerService, NbLayoutDimensions, NbToastrService, NbSearchService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  type:string = "";
  products=[];
  taxons=[];
  form: FormGroup;
  page: number = 1;
  products_per_page = 10;
  scroll_allowed = true;
  en_consulta = false;
  search = "";
  min_price : string;
  max_price : string;

  constructor(private scroll: NbLayoutScrollService, private ruler: NbLayoutRulerService, private router: Router, private toastrService: NbToastrService, private http: HttpClient, private formBuilder: FormBuilder, private searchService: NbSearchService, private route: ActivatedRoute) {
    this.scroll.onScroll().subscribe((event) => this.onScroll());
    this.form = this.formBuilder.group({
      taxons: new FormArray([])
    });
    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.search = data.term;
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  async ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
    })
    this.getProducts(1);
    let taxonomies = {};
    await this.http.get('api/taxonomies').toPromise().then((data) => {
      let taxonomies_local = data['data'] as [];
      taxonomies_local.forEach(taxonomy => {
        taxonomies[taxonomy['id']] = taxonomy;
      });
    });
    await this.http.get('api/taxons').toPromise().then((data) => {
      let taxons = data['data'] as [];
      let taxons_local = [];
      taxons.forEach((taxon) => {
        if(taxon['parent_id'] == null){
          taxons_local[taxon['id']] = {
            'id': taxon['id'],
            'name': `${taxonomies[taxon['taxonomy_id']]['name']} / ${taxon['name']}`,
          };
        } else {
          taxons_local[taxon['id']] = {
            'id': taxon['id'],
            'name': `${taxons_local[taxon['parent_id']]['name']} / ${taxon['name']}`,
          };
        }
        this.taxons.push(taxons_local[taxon['id']]);        
      });
    }).catch(console.error);
    console.log(this.taxons);
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.taxons.map((o, i) => {
      const control = new FormControl(false);
      (this.form.controls.taxons as FormArray).push(control);
    });
    console.log(this.form.value.taxons);
  }

  scroll_heigth: Number;
  scroll_position: Number;

  onScroll() {
    if(this.scroll_heigth == this.scroll_position && this.scroll_allowed) {
      this.loadNext();
    }
  }

  searchKey: string;
  data = [];

  searchByKey() {}

  searchClear() {
    this.searchKey = '';
    this.searchByKey();
  }

  goToCart() {
    this.router.navigate(['/pages/store/shopping-cart']);
  }

  addToCart(data, position, status) {
    switch(this.type){
      case 'product': {
        this.http.post('api/me/cart', {product_id: data.id, quantity: 1}).toPromise().then((data) => {
          console.log('add...', data);
        });
        this.toastrService.show(
          status || 'Success',
          `Añadido al carrito`,
          { position, status });
        break;
      }
      case 'service': {
        this.router.navigate(['/pages/store/service'],{ queryParams: {service_id: data.id, service_name: data.name, service_price: data.price, service_description: data.description} });
        break;
      }
      default: {
        break;
      }
    }
  }

  floatToInt(n){
    return Math.round(n);
  }

  loadNext() {
    if(this.scroll_allowed){
      this.page ++;
      this.getProducts(this.page);
    }
  }
  
  loadFirst() {
    console.log(this.min_price);
    console.log(this.max_price);
    this.scroll_allowed = true;
    this.page = 1;
    this.products = [];
    this.getProducts(this.page);
  }

  async getProducts(page){
    if(!this.en_consulta){
      let filter = "";
      filter = filter.concat(this.min_price ? '&min_price='.concat(this.min_price) : "" );
      filter = filter.concat(this.max_price ? '&max_price='.concat(this.max_price) : "" );
      filter = filter.concat(this.search ? '&name='.concat(this.search,'&description=',this.search) : "" );
      this.form.value.taxons.forEach((taxon,id) => {
        filter = filter.concat(taxon ? '&taxon[]='.concat(this.taxons[id].id) : "");
      });
      this.en_consulta = true;
      await this.http.get(`api/products?page=${page}&type=${this.type}${filter}`).toPromise().then((data) => {
        let products = data['data'] as [];
        if(products.length) {
          Array.prototype.push.apply(this.products, products);
        } else {
          this.scroll_allowed = false;
        }
        this.en_consulta = false;
      }).catch(console.error);
    }
  }
}
