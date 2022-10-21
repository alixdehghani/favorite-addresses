import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { take } from "rxjs";
import { AddressAddFormComponent } from "../address-add-form/address-add-form.component";
import { ApiService } from "./api.service";
import { createPublicAddressInterface, readPublicAddressInterface } from "./public-address.interface";

@Component({
    selector: 'app-public-favorid-addresses',
    templateUrl: 'public-favorid-addresses.component.html',
    styleUrls: ['public-favorid-addresses.component.scss'],
    providers: [ApiService]
})
export class PublicFavoridAddressesComponent implements OnInit {
    constructor(private _apiService: ApiService, private _dialog: MatDialog, private _router: Router) { }
    publicAdresses: readPublicAddressInterface[] = [];
    loading = false;
    ngOnInit(): void {
        this.loading = true;
        this._apiService.readPublicAddresses().subscribe({
            next: (data) => {
                console.log(data);
                
                this.publicAdresses = [...data];
                this.loading = false;
            },
            error: (err) => {
                this.loading = false;
            }
        });
    }

    onAddBtnClicked() {
        const dialogRef = this._dialog.open(AddressAddFormComponent, {
            width: '70%',
        });
        dialogRef.afterClosed().pipe(take(1)).subscribe((value: createPublicAddressInterface) => {
            if (value) {
                this._addAddress(value)
            }
        })
    }

    onEditClick(id: number) {
        this._router.navigate([`/public-favorid-addresses/edite/${id}`])
    }

    private _addAddress(data:createPublicAddressInterface): void {
        this._apiService.cratePublicAddresses(data).subscribe({
            next: (data) => {
                this.publicAdresses.push(data)
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

   
}