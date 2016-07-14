import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoHeader from '../../src/components/TodoHeader';
import {expect} from 'chai';

const {renderIntoDocument, Simulate} = TestUtils;

describe('TodoHeader', () => {
    it('calls a callback on submit', () => {
        var addedItem = false;
        const addItem = () => addedItem = true;
        const component = renderIntoDocument(
            <TodoHeader addItem={addItem} />
        );

        const input = component.refs.addTodoInput;
        input.value = 'This is a new item';
        Simulate.change(input);
        Simulate.keyPress(input, {key: "Enter", keyCode: 13, which: 13});

        expect(addedItem).to.equal(true);
    });
});
