import {Fr} from "./language/fr";
import {En} from "./language/en";
import {Injectable} from "@angular/core";
/**
 * Created by Valentin on 02/12/2016.
 */
@Injectable()
export class NuTranslate {

    private i18n : string;
    private language : any;

    constructor() {
        this.i18n = 'fr';
        this.changeLanguage(this.i18n);
    }

    get(local : string) {
        let translated: String = this.language.translations[local];
        return translated ? translated : '[!] ' + local + ' [!]';
    }

    changeLanguage(language : string) {
        this.i18n = language;
        switch (this.i18n) {
            case 'fr' : this.language = new Fr(); console.log("change to french"); break;
            case 'en' : this.language = new En(); console.log("change to english"); break;
        }
    }
}
