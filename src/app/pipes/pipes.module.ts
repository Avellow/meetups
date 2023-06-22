import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumDeclPipe } from './num-decl.pipe';



@NgModule({
  declarations: [
    NumDeclPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumDeclPipe
  ]
})
export class PipesModule { }
