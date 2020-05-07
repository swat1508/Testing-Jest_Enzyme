import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
/*
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
*/
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
let wrapped;

beforeEach(()=>{
     wrapped= shallow(<App/>);
});
// console.log('wrapped.find(CommentBox) ==> ' , wrapped.find(CommentBox));
// console.log('wrapped.find(CommentList) ==> ' , wrapped.find(CommentList));

it('shows a comment box' , () => {   
   /* 
   const div  = document.createElement('div');
    ReactDOM.render(<App/>,div);
    console.log(div.innerHTML);
    expect(div.innerHTML).toContain('Comment-Box');
    ReactDOM.unmountComponentAtNode(div);  */
    console.log('App - CommentBox- length ==> ' , wrapped.find(CommentBox).length);
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows comment list' , () => {
     console.log('App - CommentList- length ==> ' , wrapped.find(CommentList));
     expect(wrapped.find(CommentList).length).toEqual(1);
 });