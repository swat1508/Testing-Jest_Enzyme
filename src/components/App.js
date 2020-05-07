import React from 'react';
/*
import CommentBox from './CommentBox';
import CommentList from './CommentList';
*/
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default function App() {
    return (
        <div>
            I am the App Component
            <CommentBox/>
            <CommentList/>
        </div>
    )
}
