import { Component } from '@angular/core';  
import { NavController, NavParams } from 'ionic-angular';  
import { TareasService } from '../../services/tareas';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
    providers: [TareasService]
})
export class DetailsPage {  
    
    public tarea;

    constructor(private tareas: TareasService, 
                private nav: NavController, 
                private navParams: NavParams) {

        this.tarea = navParams.get('tarea');

        
    }
}
