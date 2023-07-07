import { Component } from "react";

class Counter extends Component {
    state = { count:0 } 
    render() { 
        return (
            <h3>Counter :{this.state.count}</h3>
        );
    }
}
 
export default Counter ;
