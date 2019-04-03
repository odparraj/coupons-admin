import { Component, OnInit, HostListener } from '@angular/core';
import { NbLayoutScrollService, NbLayoutRulerService, NbLayoutDimensions } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private scroll: NbLayoutScrollService, private ruler: NbLayoutRulerService, private router: Router) {
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
      name:"INGRESO PARQUE/PISCINA - LA VIDA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "", 
      full_price:10000, 
      current_price:8500, 
      image: "https://lh4.googleusercontent.com/lbYpXe12X4QgowuSvdCRIJyP-PEYvrPzRIcQr3KFTBJJcY9zDDZKTJMxM_wn7iXobBMGBK1Ely5TK9EiT8Oz=w792-h620-rw",
      description: `
      ADICIONALES CON PAGO EN SITIO:
      <br />JUEGOS INFANTILES X30 MINUTOS
      <br />INGRESO PISCINA + GORRO DESECHABLE
      <br />INGRESO PARQUE, PISCINA+GORRO DESECHABLE
      <br />UNA HORA DE BOLOS
      <br />UNA HORA DE BOLOS + MEDIAS DESECHABLES (4 UND)
      <br />JUEGOS INFANTILES X 1 HORA 
      <br />LINEA DE BOLOS PARA TORNEOS
      <br />PASADIA 
      `
    },
    { 
      id:0,
      name:"INGRESO PARQUE/PISCINA - ARIARI", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "", 
      full_price:10000, 
      current_price:8500, 
      image: "https://lh6.googleusercontent.com/KGQiq-GLVBcSsqd60gTUgEcpBu8skH0e7n71m8Q-mKM_EP1KKQ-SgyCYmBtaBzJwwtDvrsB0oGsFmtEUi-V6=w1299-h620",
      description: `
      `
    },
    { 
      id:0,
      name:"CABAÑA 4 PAX - YURIMENA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "", 
      full_price:507300, 
      current_price:427400, 
      image: "https://lh5.googleusercontent.com/WfSlrQ1auhzJUamd3TCl2An30VvQAOsXz0oXmN2qXyjiAishZ-nGxuooBh05xx3o75xUZcmV1qk-rj9WHZcV=w792-h620-rw", 
      description: `
      EN YURIMENA ENCONTRARÁS GRATIS: <br />
      - Caminata Ecológica <br />
      - Recreación Dirigida <br />
      <br />
      Y CON PAGOS ADICIONALES EN SITIO: <br />
      - Ciclopaseo <br />
      - Cabalgata <br />
      - Pasadía (adultos / niños) <br />
      `
    },
    { 
      id:1,
      name:"CABAÑA ADICIONAL - YURIMENA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "", 
      full_price:65300, 
      current_price:53900, 
      image: "https://lh5.googleusercontent.com/WfSlrQ1auhzJUamd3TCl2An30VvQAOsXz0oXmN2qXyjiAishZ-nGxuooBh05xx3o75xUZcmV1qk-rj9WHZcV=w792-h620-rw", 
      description: "CABAÑAS YURIMENA ADICIONAL"
    },
    { 
      id:2,
      name:"CABAÑA HOTEL - YURIMENA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "", 
      full_price:394800, 
      current_price:272600, 
      image: "https://lh5.googleusercontent.com/WfSlrQ1auhzJUamd3TCl2An30VvQAOsXz0oXmN2qXyjiAishZ-nGxuooBh05xx3o75xUZcmV1qk-rj9WHZcV=w792-h620-rw", 
      description: `
      EN YURIMENA ENCONTRARÁS GRATIS: <br />
      - Caminata Ecológica <br />
      - Recreación Dirigida <br />
      <br />
      Y CON PAGOS ADICIONALES EN SITIO: <br />
      - Ciclopaseo <br />
      - Cabalgata <br />
      - Pasadía (adultos / niños)
      `
    },
    { 
      id:3,
      name:"CABAÑA HOTEL ADICIONAL - YURIMENA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "", 
      full_price:86900, 
      current_price:72500, 
      image: "https://lh5.googleusercontent.com/WfSlrQ1auhzJUamd3TCl2An30VvQAOsXz0oXmN2qXyjiAishZ-nGxuooBh05xx3o75xUZcmV1qk-rj9WHZcV=w792-h620-rw", 
      description: "CABAÑAS HOTEL YURIMENA ADICIONAL"
    },
    { 
      id:4,
      name:"ALQUILER SALON YURIMENA DIA COMPLETO ( 220 PAX) - YURIMENA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "", 
      full_price:505000, 
      current_price:417000, 
      image: "https://lh5.googleusercontent.com/WfSlrQ1auhzJUamd3TCl2An30VvQAOsXz0oXmN2qXyjiAishZ-nGxuooBh05xx3o75xUZcmV1qk-rj9WHZcV=w792-h620-rw", 
      description: `
      EN YURIMENA ENCONTRARÁS GRATIS: <br />
      - Caminata Ecológica <br />
      - Recreación Dirigida <br />
      <br />
      Y CON PAGOS ADICIONALES EN SITIO: <br />
      - Ciclopaseo <br />
      - Cabalgata <br />
      - Pasadía (adultos / niños)
      `
    },
    { 
      id:3,
      name:"SET DE CAFETERIA - YURIMENA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      final_date: "",
      current_price:84900, 
      image: "https://lh5.googleusercontent.com/WfSlrQ1auhzJUamd3TCl2An30VvQAOsXz0oXmN2qXyjiAishZ-nGxuooBh05xx3o75xUZcmV1qk-rj9WHZcV=w792-h620-rw", 
      description: "SERVICIO DE RESTAURANTE Y CAFETERIA"
    },
  ];

}
