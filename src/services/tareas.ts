import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TareasService{

	constructor(private http: Http){
	}

	getTareas(){
		let tareas = this.http.get('http://localhost:8080/api/tareas');
		return tareas;
	}

}