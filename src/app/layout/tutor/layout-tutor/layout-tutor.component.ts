import { Component } from '@angular/core';
import { HeaderTutorComponent } from "../header-tutor/header-tutor.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-tutor',
  imports: [HeaderTutorComponent, RouterOutlet],
  templateUrl: './layout-tutor.component.html',
  styleUrl: './layout-tutor.component.scss'
})
export default class LayoutTutorComponent {

}
