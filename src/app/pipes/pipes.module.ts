import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumDeclPipe } from './num-decl.pipe';
import { ReduceStringPipe } from './reduce-string.pipe';



@NgModule({
  declarations: [
    NumDeclPipe,
    ReduceStringPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumDeclPipe,
    ReduceStringPipe,
  ]
})
export class PipesModule { }
