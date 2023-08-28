import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
   agora: Date = new Date();
   horaAtual: number = this.agora.getHours();
   valorBolo: number[] = [50, 48, 18]
  
   isHoraValida: boolean = this.horaAtual <= 8 && this.horaAtual > 18;
  
  
  ngOnInit(): void {
    console.log(this.isHoraValida);
  }


}
