import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'si-full-width',
  templateUrl: './full-width.component.html',
  styleUrls: ['./full-width.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullWidthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
