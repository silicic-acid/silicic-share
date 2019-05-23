import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'si-footer',
  template: `
    <footer class="footer">
      <ng-content></ng-content>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {}
