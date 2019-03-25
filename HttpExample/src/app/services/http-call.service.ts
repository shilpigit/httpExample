import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private _httpCall: HttpClient) { }

  getTitlesByNormalsubscribercall()
  {
    return this._httpCall.get('https://jsonplaceholder.typicode.com/posts').pipe(
      retry(1),
      catchError(this.handleError));
  }

  getBodyById(id): Observable<any> 
  {    
    return this._httpCall.get('https://jsonplaceholder.typicode.com/posts?id='+id
    ).pipe(
      catchError(this.handleError)
    );
  }


// change spell in URL and run will create hhtp error response
  private handleError(errorResponse: HttpErrorResponse)
  //private handleError(errorResponse)
  {
    let errorMessage = ''
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log("Client Side Error: " + errorResponse.error.message + errorResponse.error.filename)

       // client-side error
       errorMessage = `Error: ${errorResponse.error.message}`;
    }
    else
    {
      console.log("Server Side Error: " + errorResponse.error.message + errorResponse.error.filename)

       // server-side error
       errorMessage = `Error Code: ${errorResponse.status}\nMessage: ${errorResponse.message}`;
    }
    return throwError('This page is not working correctly. Error in Page!!!!');
    
    
  }
}
