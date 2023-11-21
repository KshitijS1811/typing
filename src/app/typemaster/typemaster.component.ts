import { Component } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-typemaster',
  templateUrl: './typemaster.component.html',
  styleUrls: ['./typemaster.component.css']
})
export class TypemasterComponent {

  myText : string= ''

  enteredText :string = '';

  constructor(private rs:RandomService){}

  ngOnInit(){
    this.getQuote();
  }

  onInput(value:string){
    this.enteredText=value;
    console.log(this.enteredText);

  }

  compare(t1:string, e1 :string){
    if(!e1) return "pending";

    return t1 === e1 ? "correct" : "incorrect";
  }
 

  

  getQuote(){
    this.rs.getRandomQuote().subscribe(res=>{
      this.myText=res;
      console.log(this.myText);
    });
  }

}
