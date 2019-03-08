import { Component, OnInit } from '@angular/core';
import { SearchTracks } from "../../models/search-tracks";

@Component({
  selector: 'app-youtubesearch',
  templateUrl: './youtubesearch.component.html',
  styleUrls: ['./youtubesearch.component.scss']
})
export class YoutubesearchComponent implements OnInit {
      results: SearchTracks[];
      loading: boolean;
  constructor() { }

  ngOnInit() {
  }
  update(results: SearchTracks[]):void{
    this.results = results;
  }

}
