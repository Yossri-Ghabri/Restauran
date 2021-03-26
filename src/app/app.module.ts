import {NgModule} from '@angular/core';
// import les modules
import {BrowserModule} from '@angular/platform-browser';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes, Router} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
// import les components
import {AppComponent} from './app.component';
import {NgxBootstrapModalHoverButtonToolipComponent} from './Components/ngx-bootstrap-modal-hover-button-toolip/ngx-bootstrap-modal-hover-button-toolip.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {HomeComponent} from './home/home.component';
import {CarteComponent} from './carte/carte.component';
import {ReserveComponent} from './reserve/reserve.component';
import {ContactComponent} from './contact/contact.component';
import {YossriComponent} from './Components/table/yossri.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {AddressComponent} from './Components/address/address.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {TreeComponent} from './Components/tree/tree.component';
import {MatTreeModule} from '@angular/material/tree';
import {AlertmsgComponent} from './Components/alertmsg/alertmsg.component';
import {MainDashComponent} from './main-dash/main-dash.component';
import {DishTableComponent} from './dish-table/dish-table.component';
/* import services */
import {QuickLunchService} from './services/quick-lunch.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'reserve', component: ReserveComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NgxBootstrapModalHoverButtonToolipComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    YossriComponent,
    DashboardComponent,
    AddressComponent,
    TreeComponent,
    AlertmsgComponent,
    MainDashComponent,
    DishTableComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTreeModule,
  ],
  providers: [QuickLunchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
