import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './component/listuser/listuser.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import {UserService} from './shared_service/user.service';
import { HomeComponent } from './component/home/home.component';
import { ListsongComponent } from './component/listsong/listsong.component';
import { SongFormComponent } from './component/song-form/song-form.component';
import { SongService } from './shared_service/song.service';
import { ListcourseComponent } from './component/listcourse/listcourse.component';
import { CourseFormComponent } from './component/course-form/course-form.component';

const appRoutes:Routes=[
{path:"",component:HomeComponent},
{path:"student",component:ListuserComponent},
{path:"student/change",component:UserFormComponent},
{path:"song",component:ListsongComponent},
{path:"song/change",component:SongFormComponent},
{path:"course",component:ListcourseComponent},
{path:"course/change",component:CourseFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent,
    HomeComponent,
    ListsongComponent,
    SongFormComponent,
    ListcourseComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
