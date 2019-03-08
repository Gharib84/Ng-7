import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchTracks } from '../../models/search-tracks';
import { YoutubeService } from "../../services/youtube.service";
import { fromEvent, Observable } from "rxjs";
import { map, filter, switchAll, debounceTime, tap } from "rxjs/operators";

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
   @Output() loading:EventEmitter<boolean> = new EventEmitter<boolean>();
   @Output() results:EventEmitter<SearchTracks[]> = new EventEmitter<SearchTracks[]>();

  constructor( private youtube_service: YoutubeService,  private el:ElementRef) {

   }

  ngOnInit(): void{
    fromEvent(this.el.nativeElement, "keyup").pipe(
      map((e:any) => e.target.value)
    )
    .pipe(
      filter((text) => text.length > 1)
    )
    .pipe(
      debounceTime(250)
    )
    
    .pipe(
      switchAll()
    )
    .pipe(
      tap(() => this.loading.emit(true))
    )
    .pipe(
      map(($q:string) => this.youtube_service.search($q))
    )
    .subscribe(
       () =>{
         

      },
      (e:any) =>{
        console.log("err" + e);
        this.loading.emit(false);
      },
      () =>{
        console.log("Done");
      }
    );
  }

}
