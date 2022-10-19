import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    selector: 'app-public-favorid-addresses',
    templateUrl: 'public-favorid-addresses.component.html',
    styleUrls: ['public-favorid-addresses.component.scss'],
    providers: [ApiService]
})
export class PublicFavoridAddressesComponent implements OnInit {
    constructor(private _apiService: ApiService) { }

    ngOnInit(): void {
        this._apiService.readPublicAddresses().subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    onAddButton(): void {
        this._apiService.cratePublicAddresses({
            address: 'Mandaba',
            latitude: 35.212,
            longitude: 42.222
        }).subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    onUpdateButton(): void {
        this._apiService.updatePublicAddress(1, {
            address: 'ali',
            latitude: 352.25,
            longitude: 42.00
        }).subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    onDeleteButton(): void {
        this._apiService.deletePublicAddress(3).subscribe({
            next: (data) => {
                console.log(data);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
}