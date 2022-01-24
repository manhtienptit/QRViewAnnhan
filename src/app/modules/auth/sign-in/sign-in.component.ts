import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { QRService } from 'app/core/services/qr.service';
import {Observable} from "rxjs/index";
import {InventoryProduct} from "../../admin/apps/ecommerce/inventory/inventory.types";
import {QRScan} from "../../../core/services/qrscan.types";

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;
    cers: any[] = [1]

    qrInfo$: QRScan;
    rateList$: any[];
    id: string = '';

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _qrService: QRService,
        private _formBuilder: FormBuilder,
        private _router: ActivatedRoute
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            phoneNumber     : ['', [Validators.required]],
            password  : ['', Validators.required],
            rememberMe: ['']
        });


        this._router.queryParams
            .subscribe(params => {
                    this.id = params.product;
                    this._qrService.getQRInfor(this.id)
                        .subscribe((product) => {

                            this.qrInfo$ = (product?.data?.data !== undefined ? product?.data?.data : '');

                            this._qrService.getRateList(this.id)
                                .subscribe((rateList) => {

                                    console.log(rateList)

                                });

                        });
                }
            );

        // Get the qr
        // this.qrInfo$ = this..qrInfo$;

        // Get the product by id


    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


}
