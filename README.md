# EventEmitter
An Event Emitter in TypeScript that supports custom events.

The custom event arguments are supported by intellisense :)

## Usage

### Instantiate the emitter
```js
import { EventEmitter } from './EventEmitter';

const events = new EventEmitter();
```

### Create and emit custom events

```js
import { MyCustomEvent, SomeOtherEvent } from './MyCustomEvent';

events.emit(new MyCustomEvent({ type: 'click', someValue: 33 }));

events.emit(new SomeOtherEvent(42069));

```

### Listen to custom events

```js
/* Args are type hinted based on the given event :) */
events.on(MyCustomEvent, args => {
  console.log(args.type, args.someValue); // Outputs: 'click', 33
});

events.on(SomeOtherEvent, value => {
  console.log(value); // Outputs: 42069
});

```

### `once()` 
```js

/* Respond to an event only once */
events.once(SomeOtherEvent, value => {
  console.log(value); // Outputs: 42069
});

```
