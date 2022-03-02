import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import {map, switchMap, take, tap} from 'rxjs/operators';
import { User } from 'app/core/user/user.types';
import { QRScan } from 'app/core/services/qrscan.types';
import {of, throwError} from "rxjs/index";
import {InventoryPagination, InventoryProduct} from "../../modules/admin/apps/ecommerce/inventory/inventory.types";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class QRService
{
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
    private _qrInfo: ReplaySubject<QRScan> = new ReplaySubject<QRScan>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User)
    {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<User>
    {
        return this._user.asObservable();
    }

    /**
     * Getter for qr
     */
    get qrInfo$(): Observable<QRScan>
    {
        return this._qrInfo.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    /**
     * Get QR by id
     */
    getQRInfor(id: string): Observable<{ data: any }>
    {
        return this._httpClient.post<{ data: any }>(`${environment.baseUrl}qr/get`, {
            data : {
                id: id,
            }
        }).pipe(
            tap((response) => {

                // this._pagination.next(response.data);
                // this._products.next(response.data.docs);

            })
        );
    }


    /**
     * Get QR rate list
     */
    getRateList(id: string): Observable<{ data: any }>
    {
        return this._httpClient.post<{ data: any }>(`${environment.baseUrl}qr/rate/get`, {
            data : {
                id: id,
            }
        }).pipe(
            tap((response) => {

                // this._pagination.next(response.data);
                // this._products.next(response.data.docs);

            })
        );
    }

    /**
     * send QR rate list
     */
    sendRate(ProductStoreId: string,Rate: string,Infor : any,Content: string): Observable<{ data: any }>
    {
        return this._httpClient.post<{ data: any }>(`${environment.baseUrl}qr/rate`, {
            data : {
                ProductStoreId: ProductStoreId,
                Rate: Rate,
                FullName: Infor.TenCoSo,
                Mobile: Infor.Mobile,
                Content: Content
            }
        }).pipe(
            tap((response) => {

                // this._pagination.next(response.data);
                // this._products.next(response.data.docs);

            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any>
    {
        return this._httpClient.patch<User>('api/common/user', {user}).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }
}
