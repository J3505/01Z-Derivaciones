import { Component } from '@angular/core';
import { HeaderProfesorComponent } from "../header-profesor/header-profesor.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-profesor',
  imports: [HeaderProfesorComponent, RouterOutlet],
  templateUrl: './layout-profesor.component.html',
  styleUrl: './layout-profesor.component.scss'
})
export default class LayoutProfesorComponent {

}
