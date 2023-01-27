# EventEmitter
An Event Emitter in TypeScript that supports custom events.

The custom event arguments are supported by intellisense :)

## Usage

```ts
import { EventEmitter } from './EventEmitter';

const events = new EventEmitter();
```

```js
import { MyCustomEvent, SomeOtherEvent } from './MyCustomEvent';

/* Emit a custom (typed) event */
events.emit(new MyCustomEvent({ type: 'click', someValue: 33 }));

events.emit(new SomeOtherEvent(42069));

```

```js
/* Listen to events - args are type hinted :) */
events.on(MyCustomEvent, args => {
  console.log(args.type, args.someValue); // Outputs: 'click', 33
});

events.on(SomeOtherEvent, value => {
  console.log(value); // Outputs: 42069
});

```
