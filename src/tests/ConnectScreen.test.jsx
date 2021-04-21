import ConnectScreen from '../screens/Connect/ConnectScreen';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});


describe('Connect provider screen', () => {
  it('Should render connect button', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<ConnectScreen/>));
    expect(button.text()).toContain("Connect Provider");
    
  });
});