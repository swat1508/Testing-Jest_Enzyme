import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';
import axios from 'axios';

export function saveComment(comment){
    return{
        type:SAVE_COMMENT,
        payload:comment
    };
}

export function fetchComments(){
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    // let resp;
    // axios.get('http://jsonplaceholder.typicode.com/comments')
    // .then(response  => {
    //     //const data= response.data.map(user => user.id);
    //     console.log('response is ', response.data);
    //     resp=response;
    // })

    return {
        type: FETCH_COMMENTS,
        payload:response
    }
}