import { Component, OnInit, HostListener } from '@angular/core';
import { NbLayoutScrollService, NbLayoutRulerService, NbLayoutDimensions, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products=[];
  page: number = 1;
  products_per_page = 10;
  constructor(private scroll: NbLayoutScrollService, private ruler: NbLayoutRulerService, private router: Router, private toastrService: NbToastrService, private http: HttpClient) {
    this.scroll.onScroll()
      .subscribe((event) => this.onScroll());
  }
  ngOnInit() {
    this.getProducts(1);
  }
  scroll_heigth: Number;
  scroll_position: Number;
  onScroll() {
    if(this.scroll_heigth == this.scroll_position) {
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
  addToCart(id, position, status) {
    this.http.post('api/me/cart', {product_id: id, quantity: 1}).toPromise().then((data) => {
      console.log('add...', data);
    });
    this.toastrService.show(
      status || 'Success',
      `Añadido al carrito`,
      { position, status });
  }
  floatToInt(n){
    return Math.round(n);
  }
  loadNext() {
    //this.products.push(...next_page);
  }
  async getProducts(page){
    await this.http.get('api/products').toPromise().then((data) => {
      let products = data['data'] as [];
      this.products = products;
      // items.forEach((item) => {
      //   this.order['data'][item['id']] = item;
      // });
    }).catch(console.error);
  }

  // products=[
  //   { 
  //     id:0,
  //     name:"Zapatos", 
  //     brand:"Nike", 
  //     brand_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png", 
  //     final_date: "", 
  //     full_price:250000, 
  //     current_price:100000, 
  //     image: "https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/2015-nike-mag-02_hd_1600.jpg",
  //     description: `
  //     La legión de fanáticos de Volver Al Futuro seguramente alucinó con tener alguna vez en sus pies las Nike “autoajustables” que Marty McFly usaba en el futuro. 
  //     `
  //   },
  //   { 
  //     id:0,
  //     name:"Balón", 
  //     brand:"Adidas", 
  //     brand_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8JcbKaY6BoBsZwLni3SvqBf-enGRikUxvXTR5odBoTlxZEcv", 
  //     final_date: "", 
  //     full_price:100000, 
  //     current_price:50000, 
  //     image: "https://i.ebayimg.com/images/g/ieIAAOSwuspY98ZW/s-l300.jpg",
  //     description: `
  //     Adidas Jabulani: El balón de la copa confederaciones 2010
  //     `
  //   },
  // ];

}
