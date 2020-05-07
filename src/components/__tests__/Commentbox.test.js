import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
import Root from 'root';
let wrapped;

beforeEach(()=>{
    wrapped = mount(<Root><CommentBox/></Root>);
});
afterEach(()=>{
    wrapped.unmount();
});

//console.log(wrapped.find("textarea").length);
it('has a textarea and 2 button', () => {
    console.log('CommentBox - textarea - length ===>' , wrapped.find('textarea').length);
    console.log('CommentBox - button - length ===>' ,wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea',() =>{

            beforeEach(()=>{
                wrapped.find('textarea').simulate('change',{
                    target:{value: 'new comment'}
                });            
                wrapped.update();
            });

            it('has a textarea that user can type in', () => {
                expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
            });
            
            it('on form submit textarea is cleared', () => {
                wrapped.find('form').simulate('submit');
                wrapped.update();
                expect(wrapped.find('textarea').prop('value')).toEqual('');
            });
})






