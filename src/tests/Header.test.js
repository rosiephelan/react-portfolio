import React from 'react';
import { render } from '@testing-library/react';
import Header from '../containers/Header';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

describe('Header', () => {
    it('Header mounts to DOM', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})