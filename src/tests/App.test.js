import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import ReactDOM from 'react-dom';
import Header from '../containers/Header';
import Body from '../containers/Body';
import {shallow, mount} from 'enzyme';

describe('App', () => {
  it('App mounts to DOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('Renders Header in App.js', () => {
    const component = shallow(<App />);
    expect(component.exists(Header)).toEqual(true);
  })
  it('Renders Body in App.js', () => {
    const component = shallow(<App />);
    expect(component.exists(Body)).toEqual(true);
  })
});