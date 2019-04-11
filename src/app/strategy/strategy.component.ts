import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  @Input() name: string;
  @Input() cellIndex: number;
  @Input() summaryRowConfig: string[];
  legs: Array<string> = [];
  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
    this.isExpanded = true;
    const noOfLegs = Math.floor(Math.random() * (10 - 2) + 2);
    for (let i = 1; i <= noOfLegs; i++) {
      this.legs.push(`leg${i}`);
    }
  }

  toggleSummary() {
    this.isExpanded = !this.isExpanded;
  }

  cellClick(index: number) {
    console.log('Clicked on cell with Index', index);
  }

}
