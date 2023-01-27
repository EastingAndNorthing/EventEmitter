export type MyCustomEventArgs = {
    type: 'click'|'hover';
    someValue: number;
}

export class MyCustomEvent extends CustomEvent<MyCustomEventArgs> {
    constructor(data?: MyCustomEventArgs) {
        super('MyCustomEvent', { detail: data });
    }
}
