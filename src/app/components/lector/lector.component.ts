import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IonInput, IonButton } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.scss'],
  standalone:true,
  imports: [IonInput, IonButton, FormsModule]
})
export class LectorComponent  implements OnInit {
  codUid: string= "";
  lecturas: Subscription;
  ipLector: string= "http://10.128.222.221/"
  noPac: string = "";
  http: any;
  actualizar: any;

  @Output() pacEncontrado = new EventEmitter();

  constructor(pet: HttpClient, detec: ChangeDetectorRef) {
    this.http= pet;
    this.actualizar= detec;
  }

  ngOnInit() {
    this.lecturas= interval(1000).subscribe(()=>{this.leerPulsera();})
  }

  leerPulsera(){
    this.http.get(this.ipLector).subscribe((res:any)=>{
      this.codUid= res["uid"];
      this.actualizar.detectChanges();
    })
  }

  buscar() {
    let api = `http://127.0.0.1:8000/pacientes/${this.codUid}`;

    this.http.get(api).subscribe(
      (res: any) => {
        this.noPac = "";
        this.pacEncontrado.emit(res);
      },
      () => {
        this.noPac = "PACIENTE NO SE ENCUENTRA EN EL SISTEMA";
        this.pacEncontrado.emit(null);
      }
    );
  }

}
