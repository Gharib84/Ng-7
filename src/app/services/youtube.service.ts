import { Injectable, Inject, InjectionToken } from '@angular/core';
import { SearchTracks } from "../models/search-tracks";
import { Observable } from "rxjs";
import { map, filter, debounceTime } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

export const Youtube_API = new InjectionToken<string>("Yotube_API");
export const Youtube_Url = new InjectionToken<string>("Youtube_Url");


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient, @Inject(Youtube_API) private API:string,
  @Inject(Youtube_Url) private Url:string) {

   }
   search($query:string):Observable<SearchTracks[]>{
     const params:string = [
       `q=${$query}`,
       `key=${this.API}`,
       `part=snippet`,
       `type=video`,
       `maxResults=21`
     ].join("&");
     let ULRS = `${this.Url}/?${params}`;
     return this.http.get<SearchTracks[]>(ULRS).pipe(
       map((response) => {
          return <any>response["items"].map((item) => {
            return new SearchTracks({
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              imgUrl: item.snippet.thumbnails.medium.url
            })
         })
       })
     )
   }
}
