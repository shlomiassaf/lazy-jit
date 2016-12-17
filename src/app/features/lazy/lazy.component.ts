import {
  Component,
  Compiler,
  NgModuleFactory,
  NgModuleRef,
  Injector,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ReflectiveInjector
} from '@angular/core';

import { COMPILER_PROVIDERS }  from '@angular/compiler';

import { RuntimeCompiledModule, RuntimeCompiledComponent } from './runtime-compile';

@Component({
  selector: 'my-lazy',
  templateUrl: './lazy.component.html'
})

export class LazyComponent {
  @ViewChild('vcRef', {read: ViewContainerRef}) vcRef: ViewContainerRef;
  private injector: Injector;
  private compiler: Compiler

  constructor(injector: Injector) {
    this.injector = ReflectiveInjector.resolveAndCreate(COMPILER_PROVIDERS, injector);
    this.compiler = this.injector.get(Compiler);
  }

  add(): void {

    const moduleFactory: NgModuleFactory<RuntimeCompiledModule> = this.compiler.compileModuleSync(RuntimeCompiledModule);
    const moduleRef: NgModuleRef<RuntimeCompiledModule> = moduleFactory.create(this.injector);

    const injector = moduleRef.injector;


    const cmpRef = this.vcRef.createComponent<RuntimeCompiledComponent>(
      injector.get(ComponentFactoryResolver).resolveComponentFactory(RuntimeCompiledComponent),
      this.vcRef.length,
      injector);
  }
}
