import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomePageComponent implements OnInit {
 logo:string="../../../assets/images/grocery.jpg";
 images = [
    // '../../../assets/images/welcome.',
    '../../../assets/images/first.jpg',
    'https://i.postimg.cc/htzt6498/finacarosel2.jpg',
    'https://i.postimg.cc/fLbFqydD/finalcarosel3.jpg'
];

  constructor(
    config: NgbCarouselConfig,
    private route: Router
  ) {
    config.interval = 2000;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  gotoLogin(): void {
    this.route.navigate(['/client-login'])
  }

}
