import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  @Input() name: string;
  legs : Array<string> = [];

  constructor() { }

  ngOnInit() {
    for(let i=1; i<10;i++){
      this.legs.push(`leg${i}`);
    }
  }

}
