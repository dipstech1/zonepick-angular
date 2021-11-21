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
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  public get classes(): string[] {
    const mode = this.btnMode === "primary" ? 'primary-btn' : 'secondary-btn';

    return ['zonepick-button', `zonepick-button--${this.size}`, mode];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
