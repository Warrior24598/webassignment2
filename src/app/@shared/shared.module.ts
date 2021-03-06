import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [LoaderComponent, FooterComponent, HeaderComponent, CartDialogComponent, CartItemComponent],
  exports: [LoaderComponent, FooterComponent, HeaderComponent, CartItemComponent],
})
export class SharedModule {}
