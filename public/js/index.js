import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import reducer from './reducers/reducer';

const store = createStore(reducer);


class App extends React.Component {
    add(text) {
        store.dispatch({type: 'ADD', text});
    }
    render(){
        return <div>
            <TodoList todos={store.getState().todos}/>
        </div>
    }

}

class TodoList extends React.Component{
    render(){
        return <div>
            hello
            {this.props.todos.map(todo=>{
                return <div>
                    {todo.text}
                </div>
                }
            )}
        </div>
    }
}

function renderFunction() {
    "use strict";
    render(<App/>, document.getElementById('root'))
}

store.subscribe(renderFunction);

renderFunction();

