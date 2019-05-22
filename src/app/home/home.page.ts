import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from "../modal/modal.page";
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public elementos: any;
	public elementos1: any;	
	public elementos2: any;

	constructor( 
	private fire: AngularFirestore,
	public http: HttpClient,
    public modalController: ModalController,
	private route: Router
	) {
	
	}	
		
	async abrir_modal( index: number ){		
		const modal = await this.modalController.create({
		component: ModalPage,
		componentProps: { elementounico: this.elementos[index] }
		});
		await modal.present();    
	}
	
	abrir_pagina( index: number ){				 
		let navegationExtras: NavigationExtras= {
			queryParams:{
				"indice":index+1
			}
		};
		this.route.navigate(['/pagina-nueva'], navegationExtras );		
	}
		
	ngOnInit() {
		alert("Consultando información");
		this.http.
		get("https://swapi.co/api/people/")
		.subscribe((data: any)=>{
			this.elementos1 = [];
			this.elementos1 = data.results;									
			this.http.
			get("https://swapi.co/api/people/?page=2")
			.subscribe((data: any)=>{
				this.elementos2 = [];				
				this.elementos2 = data.results;									
				this.elementos = this.elementos1.concat(this.elementos2);
				this.elementos.splice(15);
				alert("Termine consulta");
			});
		});						
	}

}

/*
En caso de quererlo ver en el modal
<th> 
		<p>
			<ion-button (click)="abrir_modal( i )">Más información.</ion-button>
		</p>	  
	</th>


*/
