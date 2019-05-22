import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public datos:any;
  public consulta: number;
  public especie: any;
  @Input() elementounico: any;

  constructor( private fire: AngularFirestore,
    public http: HttpClient ) { }

  guardando(){
	  //alert("entre a guardar");
    let idDoc = this.fire.createId();
    this.fire.doc("/starwars/" + idDoc)
      .set(this.elementounico); 
	//alert("termine de guardar");	  
  }

  ngOnInit() {	 
	  this.http.
			get(this.elementounico.species[0])
			.subscribe((data: any)=>{
				this.especie = [];				
				this.especie = data;													
			});	      
  }

}
