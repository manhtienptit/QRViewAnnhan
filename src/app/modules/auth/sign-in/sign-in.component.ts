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
    productStoreID: number = 1;


    imageIndex : number = 0;
    imageLinkCurrent: string = ''


    rateValue: string = '1' ;

    qrInfo$: QRScan;
    rateList$: any = [
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        { ProductStoreId: 1, Rate: "1", FullName: "Khách hàng số 1", Mobile: "0349800629", Content: "Đánh giá sản phẩm này như này", TimeSend: "01/10/1991" },
        ];
    id: string = '';
    rating: number = 2;

    public form: FormGroup;

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
        this.form = this._formBuilder.group({
            rating1: [2, Validators.required],
            rate_val: ['', Validators.required]
        });


        this._router.queryParams
            .subscribe(params => {
                    this.id = params.product;
                    this.productStoreID = params.product;
                    this._qrService.getQRInfor(this.id)
                        .subscribe((product) => {

                            this.qrInfo$ = (product?.data?.data !== undefined ? product?.data?.data : '');

                            this.imageLinkCurrent = this.qrInfo$.Info?.ProductImageNames[0].link;

                            this.caculatorRate(this.qrInfo$.Info?.RateValue , this.qrInfo$.Info?.RateCount)

                            this._qrService.getRateList(this.id)
                                .subscribe((rateList) => {

                                    console.log(rateList)

                                    this.rateList$ = (rateList?.data?.ListData !== undefined ? rateList?.data?.ListData : '');



                                });

                        });
                }
            );

        // Get the qr
        // this.qrInfo$ = this..qrInfo$;

        // Get the product by id


    }


    sendReview(value : string) : void {


        if(this.form.value.rate_val.trimEnd().trim() === null || this.form.value.rate_val.trimEnd().trim() === '') {
            alert('Vui lòng nhập đánh giá trước khi gửi!!')
            return;
        }

        this._qrService.sendRate(this.id , this.form.value.rating1 , this.qrInfo$.Info, this.form.value.rate_val)
            .subscribe((product) => {
                 alert('Gửi đánh giá thành công!')
                location.reload();

            });
    }

    prevImage() : void {
        if(this.imageIndex > 0){
            this.imageIndex--;
            this.imageLinkCurrent = this.qrInfo$.Info?.ProductImageNames[this.imageIndex].link
        }
    }


    nextImage() : void {
        if(this.imageIndex < this.qrInfo$.Info?.ProductImageNames?.length - 1 ){
            this.imageIndex++;
            this.imageLinkCurrent = this.qrInfo$.Info?.ProductImageNames[this.imageIndex].link
        }
    }

    caculatorRate(num1 : string , num2 : string): void {

        var cacheValue =  parseFloat(num1) / parseFloat(num2)

        this.rateValue = cacheValue.toFixed(2);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


}
