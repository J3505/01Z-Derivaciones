import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-derivacion',
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './derivacion.component.html',
  styleUrl: './derivacion.component.scss'
})
export default class DerivacionComponent {
  
  visible: boolean = false;
  showDialog() {
    this.visible = true;
}

}
