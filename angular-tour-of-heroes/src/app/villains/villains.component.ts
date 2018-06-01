import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain/villain';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {

  villain: Villain = {
    id: 1,
    name: 'Blender Man'
  };

  constructor() { }

  ngOnInit() {
  }

}
