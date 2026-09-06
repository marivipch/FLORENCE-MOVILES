import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
  standalone:true,
  imports: []
})
export class ConsultasComponent  implements OnInit {

  @Input() medico: any;

  constructor() { }

  ngOnInit() {}

}
