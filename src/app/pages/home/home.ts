import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  nome:string = '';
  curso:string = '';
  email:string = '';

  registros:any[] = [];
  salvar(){
    this.registros.push({nome:this.nome, curso:this.curso, email:this.email});
  }
}
