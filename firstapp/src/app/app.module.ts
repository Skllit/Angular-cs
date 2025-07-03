import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';
import { MessageService } from './Services/message.service';
import { Append2Pipe } from './pipes/append2.pipe';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    Append2Pipe
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [MessageService,provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
