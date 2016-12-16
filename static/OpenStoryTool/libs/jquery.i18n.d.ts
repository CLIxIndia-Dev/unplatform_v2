/// <reference path='jquery.d.ts'/>

interface I18n {
    debug: boolean;
    locale: string;

    load(path: string, locale: string);
}

interface JQueryStatic {
    i18n(): I18n;
    i18n(messageName:string): string;
}