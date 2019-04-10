import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
