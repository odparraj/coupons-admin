import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    console.log("window scroll: ", scrollOffset);
  }

  searchKey: string;
  data = [];

  searchByKey() {}

  searchClear() {
    this.searchKey = '';
    //this.data = this.users;
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
    console.log(this.products)
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
