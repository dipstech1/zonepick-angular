import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type = "button";
  @Input() value = "";
  @Input() btnMode = 'primary'
  constructor() { }

  ngOnInit(): void {
  }

}
