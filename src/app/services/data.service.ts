import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';



export class DataService {

constructor(private url: string, private http: HttpClient) {  }

  getAll(){
    return this.http.get<any>(this.url)
    .pipe(
        map( (response: any) => response)
    )
    .pipe(
      catchError(this.handleError)
    );
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        map( (response: any) => response)
    )
    .pipe(
      catchError(this.handleError)
    );
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead : true }))
    .pipe(
        map( (response: any) => response)
    )
    .pipe(
      catchError(this.handleError));
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
    .pipe(
        map( (response: any) => response)
    )
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    return throwError(new AppError(error));
  }
}
