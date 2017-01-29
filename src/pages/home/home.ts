import { Component, OnInit } from '@angular/core';
// Importamos el servicio que creamos para las tareas
import { TareasService } from '../../services/tareas';
import { DetailsPage } from '../details/details';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //Añadimos TareasService como provider
  providers: [TareasService]
})
export class HomePage{

	public foundTareas;
	public listadoTareas;

  constructor(public navCtrl: NavController, private tareas:TareasService) { 
  }

  ionViewWillEnter() { // THERE IT IS!!!
        return this.tareas.getTareas().subscribe(data => {this.listadoTareas = data.json();},err => console.error(err),() => console.log('Aquí están las tareas'));
    }

  getTareas(){
  	this.tareas.getTareas().subscribe(
  		data => {this.foundTareas = data.json();},
  		err => console.error(err),
  		() => console.log('Aquí están las tareas')
  	);
  }

  goToDetails(tarea){
  	this.navCtrl.push(DetailsPage, { tarea: tarea });
  }

}
