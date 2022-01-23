import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     */
    constructor(private _authService: AuthService , private _toastr: ToastrService)
    {
    }

    showError() {
        this._toastr.error('Hết phiên làm việc', 'Vui lòng đăng nhập lại tìa khoản!!!');
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Clone the request object
        let newReq = req.clone();

        newReq = newReq.clone({
            headers: req.headers.set('Access-Control-Allow-Credentials', 'true')
        });

        newReq = newReq.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', '*')
        });

        // Request
        //
        // If the access token didn't expire, add the Authorization header.
        // We won't add the Authorization header if the access token expired.
        // This will force the server to return a "401 Unauthorized" response
        // for the protected API routes which our response interceptor will
        // catch and delete the access token from the local storage while logging
        // the user out from the app.


        // console.log(!AuthUtils.isTokenExpired(this._authService.accessToken))
        // console.log((this._authService.accessToken))


        if ( this._authService.accessToken
            // && !AuthUtils.isTokenExpired(this._authService.accessToken)
        )
        {
            newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this._authService.accessToken)
            });
        }

        // Response
        return next.handle(newReq).pipe(
            catchError((error) => {

                // console.log(error instanceof HttpErrorResponse)
                // console.log( error.error.errorCode === 401)
                // Catch "401 Unauthorized" responses
                if ( error instanceof HttpErrorResponse && (error.error.errorCode === 401 ))
                {
                    this.showError();

                    // Sign out
                    this._authService.signOut();

                    // Reload the app
                    location.reload();
                }

                return throwError(error);
            })
        );
    }
}
