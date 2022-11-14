import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { INote } from './INote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly API = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  list(
    numberPage: number,
    filter: string,
    favorite: boolean
  ): Observable<INote[]> {
    const itemsPage = 6;
    let params = new HttpParams()
      .set('_page', numberPage)
      .set('_limit', itemsPage);
    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }
    if (favorite) params = params.set('favorite', true);
    return this.http.get<INote[]>(this.API, { params });
  }

  // listFavotiresNotes(numberPage:number , filter:string): Observable<INote[]>{
  //   const itemsPage = 6;
  //   let params = new HttpParams()
  //     .set('_page', numberPage)
  //     .set('_limit', itemsPage)
  //     .set('favorite', true);
  //   if (filter.trim().length > 2) {
  //     params = params.set('q', filter);
  //   }
  //   return this.http.get<INote[]>(this.API, { params });
  // }

  create(note: INote): Observable<INote> {
    return this.http.post<INote>(this.API, note);
  }

  edit(note: INote): Observable<INote> {
    const url = `${this.API}/${note.id}`;
    return this.http.put<INote>(url, note);
  }

  changeFavorite(note: INote): Observable<INote> {
    note.favorite = !note.favorite;
    // const url = `${this.API}/${note.id}`;
    // return this.http.put<INote>(url , note);
    return this.edit(note);
  }

  delete(id: number): Observable<INote> {
    const url = `${this.API}/${id}`;
    return this.http.delete<INote>(url);
  }

  searchId(id: number): Observable<INote> {
    const url = `${this.API}/${id}`;
    return this.http.get<INote>(url);
  }
}
