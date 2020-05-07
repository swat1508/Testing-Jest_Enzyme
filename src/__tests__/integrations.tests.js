import React from 'react';
import {mount} from 'enzyme';
import Root from 'root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
moxios.install();
moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    status:200,
    response:[{name:'Fetched 1'},{name:'Fetched 2'}]
    });
})

afterEach(() => {
moxios.uninstall();
})


it('can fetch a list of comments and display them',(done) => {
//Attempt to render entire app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

//find "fetch comments" button and click it
    wrapped.find('.fetch-comments').simulate('click'); 
    
//introduce a tiny little pause
    //setTimeout(()=>{
        moxios.wait(()=> {
            wrapped.update();
            //expect to find a list of comments
            expect(wrapped.find('li').length).toEqual(2);
            done();
            wrapped.unmount();
    });
})
