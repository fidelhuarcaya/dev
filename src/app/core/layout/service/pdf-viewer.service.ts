import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, take, tap } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PdfViewerService {

    private _url: string='../../../../assets/files/CV-FIDEL-HUARCAYA.pdf';

    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    constructor() { }


}