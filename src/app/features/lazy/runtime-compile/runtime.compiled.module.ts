import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';


import { RuntimeCompiledComponent }   from './runtime-compiled.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RuntimeCompiledComponent
  ],
  entryComponents: [
    RuntimeCompiledComponent
  ],
})
export class RuntimeCompiledModule {

}
