import { Component, OnInit, HostListener } from '@angular/core';
import { NbLayoutScrollService, NbLayoutRulerService, NbLayoutDimensions, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private scroll: NbLayoutScrollService, private ruler: NbLayoutRulerService, private router: Router, private toastrService: NbToastrService) {
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

  goToCart() {
    this.router.navigate(['/pages/store/shopping-cart']);
  }
  addToCart(position, status) {
    this.toastrService.show(
      status || 'Success',
      `Añadido al carrito`,
      { position, status });
  }
  floatToInt(n){
    return Math.round(n);
  }
  loadNext() {
    var next_page = [
      { 
        id:0,
        name:"CABAÑA PARA 5 - LA LLANERITA", 
        brand:"Cofrem", 
        brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
        final_date: "", 
        full_price:526200, 
        current_price:439300, 
        image: "https://lh4.googleusercontent.com/WE924j-Dvjjzp73NrmepILuFcrnU8Ocse5AHD-0p1ApBbsKO1R0A2hzxIf2nkWhod6rk-yHtIOrK5GgVvJfe=w792-h620", 
        description: `
        EN LA LLANERITA ENCONTRARÁS GRATIS: <br />
        - Caminata Ecológica <br />
        <br />
        Y CON PAGOS ADICIONALES EN SITIO: <br />
        - Ciclopaseo <br />
        - Cabalgata <br />
        - Pasadía (adultos / niños)
        `
      },
      { 
        id:1,
        name:"CABAÑA PARA 6 - LA LLANERITA", 
        brand:"Cofrem", 
        brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
        final_date: "", 
        full_price:588200, 
        current_price:491200, 
        image: "https://lh4.googleusercontent.com/WE924j-Dvjjzp73NrmepILuFcrnU8Ocse5AHD-0p1ApBbsKO1R0A2hzxIf2nkWhod6rk-yHtIOrK5GgVvJfe=w792-h620", 
        description: `
        EN LA LLANERITA ENCONTRARÁS GRATIS: <br />
        - Caminata Ecológica <br />
        <br />
        Y CON PAGOS ADICIONALES EN SITIO: <br />
        - Ciclopaseo <br />
        - Cabalgata <br />
        - Pasadía (adultos / niños)
        `
      },
      { 
        id:2,
        name:"CABAÑA PARA 711.200 - LA LLANERITA", 
        brand:"Cofrem", 
        brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
        final_date: "", 
        full_price:711200, 
        current_price:593700, 
        image: "https://lh4.googleusercontent.com/WE924j-Dvjjzp73NrmepILuFcrnU8Ocse5AHD-0p1ApBbsKO1R0A2hzxIf2nkWhod6rk-yHtIOrK5GgVvJfe=w792-h620", 
        description: `
        EN LA LLANERITA ENCONTRARÁS GRATIS: <br />
        - Caminata Ecológica <br />
        <br />
        Y CON PAGOS ADICIONALES EN SITIO: <br />
        - Ciclopaseo <br />
        - Cabalgata <br />
        - Pasadía (adultos / niños)
        `
      },
    ]
    this.products.push(...next_page);
  }

  products=[
    { 
      id:0,
      name:"Zapatos", 
      brand:"Nike", 
      brand_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png", 
      final_date: "", 
      full_price:250000, 
      current_price:100000, 
      image: "https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/2015-nike-mag-02_hd_1600.jpg",
      description: `
      La legión de fanáticos de Volver Al Futuro seguramente alucinó con tener alguna vez en sus pies las Nike “autoajustables” que Marty McFly usaba en el futuro. 
      `
    },
    { 
      id:0,
      name:"Balón", 
      brand:"Adidas", 
      brand_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8JcbKaY6BoBsZwLni3SvqBf-enGRikUxvXTR5odBoTlxZEcv", 
      final_date: "", 
      full_price:100000, 
      current_price:50000, 
      image: "https://i.ebayimg.com/images/g/ieIAAOSwuspY98ZW/s-l300.jpg",
      description: `
      Adidas Jabulani: El balón de la copa confederaciones 2010
      `
    },
  ];

}
