import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, first } from 'rxjs';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})


export class VerMascotaComponent implements OnInit {
  id: number;
  mascota!: Mascota;
  loading: boolean = false;
  mascota$!: Observable<Mascota>

  constructor(private _mascotaService: MascotaService, private aRoute: ActivatedRoute){
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }


  ngOnInit(): void {
    this.obtenerMascota();
  }

  obtenerMascota(){
    this.loading = true;
    this._mascotaService.getMascotaById(this.id).subscribe(data => {
      this.mascota = data;
      this.loading = false;
    })
  }

}






