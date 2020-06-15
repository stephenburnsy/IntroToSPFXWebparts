import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { checkboxWithLabel, checkboxProps } from '../../src/webparts/checkbox/checkbox';

describe('Examining the syntax of Jest tests', () => {
    let component: ReactWrapper<checkboxProps, any>;
    let checkbox: checkboxWithLabel;
    let props: checkboxProps;

    beforeEach(()=>{
        // set up the props of the component.
        
        props={
            labelOff: "Off",
            labelOn: "On"
        }
        // mount the component
        component = mount(React.createElement(
            checkboxWithLabel,props
        ));
    });

    it('should mount the component', () => {
        let html = component.render();
        // let inp = <input type=\"checkbox\">Off>
        expect(html.html()).toContain('Off')
        expect(html.children.length).toEqual(1);

     });
  });