import { Component } from "@angular/core";
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { Router } from "@angular/router";
import { take } from "rxjs";
import { UserService } from "src/app/core/user.service";
import { AddressAddFormComponent } from "src/app/shared/address-add-form/address-add-form.component";
import { ApiService } from "./api.service";
import { createFavoriteAddressInterface, readFavoriteAddressInterface } from "./favorite-address.interface";

@Component({
    selector: 'app-private-favorid-addresses',
    templateUrl: 'private-favorid-addresses.component.html',
    styleUrls: ['private-favorid-addresses.component.scss'],
    providers: [ApiService]
})
export class PrivateFavoridAddressesComponent {
    constructor(private _apiService: ApiService, private _dialog: MatDialog, private _router: Router, private _userService: UserService) { }
    favoriteAdresses: readFavoriteAddressInterface[] = [];
    loading = false;
    ngOnInit(): void {
        this.loading = true;
        console.log(+this._userService.id);
        
        this._apiService.readFavorteAddresses().subscribe({
            next: (data) => {
                console.log(data);

                this.favoriteAdresses = [...data];
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
            closeOnNavigation: true,
            hasBackdrop: true,
            disableClose: true,

        });
        dialogRef.afterClosed().pipe(take(1)).subscribe((value: createFavoriteAddressInterface) => {
            if (value) {
                this._addAddress(value);
            }
        });
    }

    onEditClick(id: number) {
        this._router.navigate([`/private-favorid-addresses/edite/${id}`]);
    }

    private _addAddress(data: createFavoriteAddressInterface): void {
        data.userId = +this._userService.id;
        this._apiService.crateFavorteAddresses(data).subscribe({
            next: (data) => {
                this.favoriteAdresses.push(data);
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
}