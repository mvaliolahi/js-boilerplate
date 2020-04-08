import Sample from '../src/sample';

test ('it should says hello word!', () => {
    expect((new Sample()).sayHello()).toBe('Hello World!');
});
