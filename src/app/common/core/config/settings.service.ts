import {EventEmitter, Injectable} from '@angular/core';
import {FlipperConfig} from './flipper-config';
import * as Dot from 'dot-object';
import merge from 'deepmerge';
import { AppHttpClient } from '../http/app-http-client.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Settings {

    /**
     * HttpClient Service instance.
     */
    private http: AppHttpClient;

    /**
     * Public settings.
     */
    private all: FlipperConfig = {};

    /**
     * Backend CSRF TOKEN.
     */
    public csrfToken: string;

    /**
     * Fired when any of the settings are changed manually.
     */
    public onChange: EventEmitter<string> = new EventEmitter();

    /**
     * Set multiple settings on settings service.
     */
    public setMultiple(settings: FlipperConfig) {
        for (const key in settings) {
            let value = settings[key];

            if (value === '0' || value === '1') {
                value = parseInt(value);
            }

            this.set(key, value);
        }
    }

    public merge(config: object) {
        this.all = merge(this.all, config);
    }
    public getAssetJson(filename): Observable<any> {

      return this.http.get('assets/lists/' + filename + '.json');
  }
  httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}
    /**
     * Set single setting.
     */
    public set(name: keyof FlipperConfig|any, value: FlipperConfig[keyof FlipperConfig]|any, fireEvent = false) {
        Dot['set'](name, value, this.all);
        if (fireEvent) { this.onChange.emit(name); }
    }

    /**
     * Get a setting by key, optionally providing default value.
     */
    public get(name: keyof FlipperConfig|any, defaultValue: any = null): any {
        const value = Dot.pick(name, this.all);

        if (value == null) {
            return defaultValue;
        } else {
            return value;
        }
    }

    /**
     * Get all settings.
     */
    public getAll() {
        return this.all;
    }

    /**
     * Check if setting with specified name exists.
     */
    public has(name: keyof FlipperConfig): boolean {
        return !!Dot.pick(name as string, this.all);
    }

    /**
     * Get a json setting by key and decode it.
     */
    public getJson(name: keyof FlipperConfig, defaultValue: any = null) {
        const value = this.get(name, defaultValue);
        if (typeof value !== 'string') { return value; }
        return JSON.parse(value);
    }

    /**
     * Get base url for the app.
     */
    public getBaseUrl(forceServerUrl = false): string {
        // sometimes we might need to get base url supplied by backend
        // even in development environment, for example, to prevent
        // uploaded images from having proxy urls like "localhost:4200"
        if (this.has('base_url') && (this.get('vebto.environment') === 'production' || forceServerUrl)) {
            return this.get('base_url') + '/';
        } else if (document.querySelector('base')) {
            return document.querySelector('base')['href'];
        } else {
            const loc = window.location;
            return (loc.protocol + '//' + (loc.host + '/' + loc.pathname).replace('//', '/'))
                .replace(/\/[a-z]+\.html/, '/');
        }
    }

    /**
     * Get app's asset base url.
     */
    public getAssetUrl(suffix?: string): string {
        let uri = (this.get('vebto.assetsUrl') || this.getBaseUrl());
        const prefix = this.get('vebto.assetsPrefix');

        // in production assets will be in "client" sub-folder
        if (this.get('vebto.environment') === 'production' && prefix) {
            uri += prefix + '/';
        }

        uri += 'assets/';

        if (suffix) { uri += suffix; }

        return uri;
    }

    /**
     * Save specified setting on the server.
     */
    public save(params: {client?: object, server?: object}) {
        this.setMultiple(params.client);
        const encoded = btoa(encodeURIComponent(JSON.stringify(params)));
        return this.http.post('settings', {settings: encoded});
    }

    /**
     * Check if any social login is enabled.
     */
    public anySocialLoginEnabled() {
        const names = ['facebook', 'google', 'twitter'];
        return names.filter(name => this.get('social.' + name + '.enable')).length > -1;
    }

    /**
     * Set HttpClient instance.
     */
    public setHttpClient(http: AppHttpClient) {
        this.http = http;
    }
}
