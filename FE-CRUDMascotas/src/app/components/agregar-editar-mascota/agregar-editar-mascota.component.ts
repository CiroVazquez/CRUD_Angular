import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})

export class AgregarEditarMascotaComponent implements OnInit {
  loading: boolean = false; //Variable
  form: FormGroup; //Variable
  id: number;
  operacion: string = "Agregar";

  constructor(private fb: FormBuilder, 
    private _mascotaService: MascotaService, 
    private _snackBar: MatSnackBar, 
    private router:Router,
    private aRout: ActivatedRoute){ //A traves de inyeccion de dependencia ingreso una clase que se llama fb
    this.form = this.fb.group({  //La variable va a ser de tipo group porque voy a tener una serie de elementos
      nombre: ['',Validators.required],
      tipo: ['',Validators.required],
      raza: ['',Validators.required],
      genero: ['',Validators.required],
      color: ['',Validators.required],
      edad: ['',Validators.required],
      peso: ['',Validators.required],
    }) 

    this.id = Number(this.aRout.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void{
    if(this.id != 0){
      this.operacion = "Editar Mascota";
      this.obtenerMascota(this.id);
    }
  }

  obtenerMascota(id: number){
    this.loading = true;
    this._mascotaService.getMascotaById(id).subscribe(data => {
      this.form.patchValue({
        nombre: data.nombreMascota,
        tipo: data.tipoMascota,
        raza: data.razaMascota,
        genero: data.generoMascota,
        color: data.colorMascota,
        edad: data.edadMascota,
        peso: data.pesoMascota
      })
      console.log(data)
      this.loading = false;

    })
  }

  agregarEditarMascota() {
    
    //Armamos el objeto
    const mascota: Mascota = {
      nombreMascota: this.form.value.nombre,
      tipoMascota: this.form.value.tipo,
      razaMascota: this.form.value.raza,
      generoMascota: this.form.value.genero,
      colorMascota: this.form.value.color,
      edadMascota: this.form.value.edad,
      pesoMascota: this.form.value.peso
    }
    
    if(this.id !=0){
      mascota.id = this.id;
      this.editarMascota(this.id, mascota);
    }else{
      this.agregarMascota(mascota)
    }
  }

  editarMascota(id: number, mascota: Mascota){
    this.loading = true;
    this._mascotaService.updateMascota(id, mascota).subscribe(()=>{
      this.loading = false;
      this.mensajeExito('actualizada');
      this.router.navigate(['/listMascotas']);
    })
  }

  agregarMascota(mascota: Mascota){
    //Enviamos objeto al BackEnd
    this._mascotaService.addMascota(mascota).subscribe(data =>{
      this.mensajeExito('registrada');
      this.router.navigate(['/listMascotas'])
    })
  }

  
  mensajeExito(texto: string){
    this._snackBar.open(`La Mascota fue ${texto} con éxito`, '',{
    duration: 4000,
    horizontalPosition: 'right'
    });
  }

  

}

