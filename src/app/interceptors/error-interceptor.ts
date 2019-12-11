import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { toast } from 'bulma-toast';

export class ErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        //retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.error.message}`;
          }
          console.log(errorMessage);
          toast({
            message: errorMessage,
            duration: 5000,
            position: "top-center",
            type: "is-danger",
            dismissible: true,
            animate: { in: "fadeInLeftBig", out: "fadeOutRightBig" }
          });
          return throwError(errorMessage);
        })
      );
  }

}
