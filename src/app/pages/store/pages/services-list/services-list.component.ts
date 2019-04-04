import { Component, OnInit } from '@angular/core';
import { NbLayoutRulerService, NbLayoutScrollService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

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

  goToService(id: number) {
    this.router.navigate(['/pages/store/service']);
  }
  floatToInt(n){
    return Math.round(n);
  }
  loadNext() { 

  }

  services=[
    { 
      id:0,
      name:"PARQUE LA VIDA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      max_discount: 20, 
      image: "assets/images/services_example/parque de la vidaCOFREM1.jpg", 
      description: `
      EN EL PARQUE ENCONTRARÁS:
      <br />JUEGOS INFANTILES
      <br />PISCINA
      <br />BOLOS
      <br />LINEA DE BOLOS PARA TORNEOS
      <br />PASADIA 
      `
    },
    { 
      id:1,
      name:"PARQUE ARIARI", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      max_discount: 25, 
      image: "assets/images/services_example/parqueAriariCOFREM1.jpg", 
      description: `
      `
    },
    { 
      id:2,
      name:"YURIMENA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      max_discount: 30, 
      image: "assets/images/services_example/CVYurimenaCOFREM1.jpg", 
      description: `
      EN YURIMENA ENCONTRARÁS: <br />
      - Caminata Ecológica <br />
      - Recreación Dirigida <br />
      - Ciclopaseo <br />
      - Cabalgata <br />
      - Pasadía (adultos / niños) <br />
      `
    },
    { 
      id:3,
      name:"CLA LLANERITA", 
      brand:"Cofrem", 
      brand_image: "https://www.cofrem.com.co/sites/all/themes/bootstrap/images/logo.png", 
      max_discount: 20, 
      image: "assets/images/services_example/CVLaLlaneritaCOFREM1.jpg", 
      description: `
      EN LA LLANERITA ENCONTRARÁS: <br />
      - Caminata Ecológica <br />
      - Ciclopaseo <br />
      - Cabalgata <br />
      - Pasadía (adultos / niños)
      `
    },
  ];

}
