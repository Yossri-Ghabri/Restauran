import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { NgxBootstrapModalHoverButtonToolipComponent } from './ngx-bootstrap-modal-hover-button-toolip/ngx-bootstrap-modal-hover-button-toolip.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxBootstrapModalHoverButtonToolipComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
