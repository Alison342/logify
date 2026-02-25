import { Component } from '@angular/core';
import { Moviedb } from "../moviedb/moviedb";

@Component({
  selector: 'app-home',
  imports: [Moviedb],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
