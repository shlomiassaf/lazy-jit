import { Component } from '@angular/core';

@Component({
  selector: 'runtime-compiled-component',
  template: `<h1>I was Compiled and instantiated at runtime - {{title}}</h1>`
})
export class RuntimeCompiledComponent {
  title = 'Lazy AOT!';
}
