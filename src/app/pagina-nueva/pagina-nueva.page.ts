import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-nueva',
  templateUrl: './pagina-nueva.page.html',
  styleUrls: ['./pagina-nueva.page.scss'],
})
export class PaginaNuevaPage implements OnInit {

	public elementounico: any;
	public especie: any;
	public indice: number;
	
  constructor(private fire: AngularFirestore,
    public http: HttpClient,
	private route: ActivatedRoute, private router: Router) { 
	this.route.queryParams.subscribe(params=>{
		this.indice = params["indice"];
		//alert(this.indice);
	});	
	}
	
  guardando(){
	  //alert("entre a guardar");
    let idDoc = this.fire.createId();
    this.fire.doc("/starwars/" + idDoc)
      .set(this.elementounico); 
	//alert("termine de guardar");	  
  }

  ngOnInit() {		
		this.http.
		get("https://swapi.co/api/people/" + this.indice)
		.subscribe((data: any)=>{
			this.elementounico = [];
			this.elementounico = data;									
			this.http.
			get(this.elementounico.species[0])
			.subscribe((data: any)=>{
				this.especie = [];				
				this.especie = data;													
			});	
		});			
  }

}
