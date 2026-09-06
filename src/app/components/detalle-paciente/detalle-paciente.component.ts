import { Component, OnInit, Input } from '@angular/core';
import {ConsultasComponent} from '../consultas/consultas.component';
@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.scss'],
  standalone:true,
  imports: [ConsultasComponent]
})
export class DetallePacienteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() pac: any = null;

}
