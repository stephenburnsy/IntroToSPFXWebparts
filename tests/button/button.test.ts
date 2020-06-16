import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { button, buttonProps } from '../../src/webparts/button/button';

describe('Examining the syntax of Jest tests', () => {
    let component: ReactWrapper<buttonProps, any>;
    let checkbox: button;
    let props: buttonProps;

    beforeEach(()=>{
        // set up the props of the component.
        
        props={
           text:"button"
        }
        // mount the component
        component = mount(React.createElement(
            button,props
        ));
    });

    it('should mount the component', () => {
        let html = component.render();
        // let inp = <input type=\"checkbox\">Off>
        expect(html.html()).toContain('button')
        expect(html.children.length).toEqual(1);
     });

    it('should call the on click and keydown and type is not submit', (done) => {
        // update the props
        let counter = 0;
        // function that just increases the counter
        const onclicker= () =>{ counter++}

        props.onClick = onclicker;
        props.onKeyDown = onclicker;
        // set the function as both the onclick and keydown, if either is called the counter will increase
        component.setProps({type:"Button", onClick:onclicker, onKeyDown:onclicker}, ()=>{
            let button = component.childAt(0);
            // call the onclick
            button.simulate('click');
            expect(counter).toBe(1);
            // call the keydown
            button.simulate('keyDown');
            expect(counter).toBe(2);
            done()

        })
     });
     
     it('should call the on click and keydown and type is  submit', (done) => {
        // update the props
        let counter = 0;
        // function that just increases the counter
        const onclicker= () =>{ counter++}

        props.onClick = onclicker;
        props.onKeyDown = onclicker;
        // set the function as both the onclick and keydown, if either is called the counter will increase
        component.setProps({type:"Submit", onClick:onclicker, onKeyDown:onclicker}, ()=>{
            let button = component.childAt(0);
            // call the onclick
            button.simulate('click');
            expect(counter).toBe(0);
            // call the keydown
            button.simulate('keyDown');
            expect(counter).toBe(0);
            // the counter should remain 0 since its a sumbit.
            done()

        })
     });
     
  });