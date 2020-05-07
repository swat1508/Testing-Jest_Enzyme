In App.test.js,
comment the below code:
/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
and write own code as below :
------------------------------------------------------
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);
  expect(div.innerHTML).toContain('Hi There !');
  ReactDOM.unmountComponentAtNode(div);
});
------------------------------------------------------

npm install --save redux react-redux

====================================================================================
App Component
CommentBox Component
CommentList Component
Comments Reducer
Save Comment Action
====================================================================================
Enzyme Setup
------------

npm install --save enzyme enzyme-adapter-react-16
In src folde parallel to index.js we will create a new file- "setupTests.js"
----------------------------------------------
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new Adapter()});
--------------------------------------------
=====================================================================================


Lec54 : npm install --save axios redux-promise moxios