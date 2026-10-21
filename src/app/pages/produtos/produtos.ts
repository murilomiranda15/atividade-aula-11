import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {
  nome:string = '';
  preco:number = 0;

  registros:any[] = [];
  salvar(){
    this.registros.push({nome:this.nome, preco:this.preco});
  }
}
