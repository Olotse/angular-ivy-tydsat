import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MycompoComponent } from "./mycompo/mycompo.component";
import { YoutubersService } from "./youtubers.service";
import { RouterModule } from "@angular/router";
import { AddYoutuberComponent } from "./add-youtuber/add-youtuber.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "youtubers", component: MycompoComponent },
      { path: "add", component: AddYoutuberComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MycompoComponent,
    AddYoutuberComponent
  ],
  bootstrap: [AppComponent],
  providers: [YoutubersService]
})
export class AppModule {}
