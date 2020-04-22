import React from 'react';
import { render } from '@testing-library/react';
import Body from '../containers/Body';
import ReactDOM from 'react-dom';
import About from '../components/About';
import Projects from '../components/Projects';
import {shallow, mount} from 'enzyme';

describe('Body', () => {
    it('Body mounts to DOM', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Body />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('componentDidMount is called in Body.js', () => {
        jest.spyOn(Body.prototype, 'componentDidMount')
        const wrapper = shallow(<Body />)
        expect(Body.prototype.componentDidMount.mock.calls.length).toBe(1)
    })
    it('getApi is called in Body.js', () => {
        jest.spyOn(Body.prototype, 'getApi')
        const wrapper = shallow(<Body />)
        expect(Body.prototype.getApi.mock.calls.length).toBe(1)
    })
    // it('Renders About in Body.js', () => {
    //     const component = shallow(<Body />);
    //     expect(component.exists(About)).toEqual(true);
    // })
    // it('Renders Projects in Body.js', () => {
    //     const component = shallow(<Body />);
    //     expect(component.exists(Projects)).toEqual(true);
    // })
})