import { Component } from "react";


type CounterState = {
    count: number
}
export class Counter extends Component<{}, CounterState> {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                
            </div>
        )
    }
}