import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';
//import {ProfileService} from './services/profile.service';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {ProfileService} from './services/profile.service';
import {FormsModule} from '@angular/forms';



const appRoutes: Routes = [
  {path: '', component: ListuserComponent},
  {path: 'op', component: UserFormComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
