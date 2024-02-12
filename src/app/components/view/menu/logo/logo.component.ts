import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'menu-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

}
