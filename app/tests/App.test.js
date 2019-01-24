import React from 'react';
import { shallow, mount, render }  from '../../enzyme'
import App from '../components/App';

describe('App Component', () => {
    let shallowwrapper;

    beforeEach(() => {
      shallowwrapper = shallow(<App />);
    });

    it('App Component Contains Topbar', () => {
      expect(shallowwrapper.find('div.topbar').exists()).toBe(true)
    })


    it('app component renders with div having class row', () => {
      expect(shallowwrapper.find('.panelListWrapper').exists()).toBe(true);
    })
})
