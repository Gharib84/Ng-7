import { Component, OnInit, Input } from '@angular/core';
import { SearchTracks } from "../../models/search-tracks";

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
    @Input() result: SearchTracks;
  constructor() { }

  ngOnInit() {
  }

}
