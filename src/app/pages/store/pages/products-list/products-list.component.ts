import { Component, OnInit, HostListener } from '@angular/core';
import { NbLayoutScrollService, NbLayoutRulerService, NbLayoutDimensions } from '@nebular/theme';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private scroll: NbLayoutScrollService, private ruler: NbLayoutRulerService) {
    this.scroll.onScroll()
      .subscribe((event) => this.onScroll());
  }
  ngOnInit() {
  }
  scroll_heigth: Number;
  scroll_position: Number;
  onScroll() {
    this.scroll.getPosition().subscribe(position => this.scroll_position = position.y);
    this.ruler.getDimensions().subscribe(position => this.scroll_heigth = position.scrollHeight - position.clientHeight);
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

  goToCart() {}

  loadNext() {
    var next_page = [
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
      { name:"Balón", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://images-na.ssl-images-amazon.com/images/I/915sNertZ-L._SX425_.jpg", description: "Descripción y especificaciones del producto mencionado"},
    ]
    this.products.push(...next_page);
  }

  products=[
    { name:"Zapatos sadasda", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
    { name:"Zapatos", brand:"Nike", brand_image: "", final_date: "03/06/2019", full_price:100000, current_price:80000, image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/calzado-tanjun-NwTz9kxD.jpg", description: "Descripción y especificaciones del producto mencionado" },
  ];

}
