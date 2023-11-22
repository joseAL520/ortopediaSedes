import { Component, OnInit } from '@angular/core';
import { ListRegisterService } from './services/list-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ortopedistas';

  constructor( private registeClient: ListRegisterService){}

  ngOnInit(){
    this.registeClient.getList().subscribe(resp => {
      console.log("Respoder",resp);
    })
  }
}
