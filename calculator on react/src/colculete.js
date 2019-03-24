import React, { Component } from 'react';
import './colculete.css';

class Colculete extends Component {
    constructor (props) {
        super(props);
        this.state = {value : ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.result = this.result.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleClick(e) {
        console.log(e.target.value);
        if ( this.state.value[this.state.value.length-1] === "+" && e.target.value === "+" || this.state.value[this.state.value.length-1] === "-" && e.target.value === "-" || this.state.value[this.state.value.length-1] === "*" && e.target.value === "*" || this.state.value[this.state.value.length-1] === "/" && e.target.value === "/") {
            return this.setState({value:this.state.value});
        }
        return this.setState({value: this.state.value + e.target.value});
    }    

    handleChange(e) {
        this.setState({value: this.state.value += e.target.value});
      }

      result(props) {
          if (this.state.value[this.state.value.length-1] === "+" || this.state.value[this.state.value.length-1] === "-"|| this.state.value[this.state.value.length-1] === "*"|| this.state.value[this.state.value.length-1] === "/") {
             return this.setState({value: this.state.value.slice(0, -1)});
          }
        var res = new Function ("", "return "+ this.state.value);
        this.setState({value:res()});
      }

      reset() {
          this.setState({value : ''});
      }
        


    render () {
        return (
            <div>
                <input  value={this.state.value} />
                <div className="container">
                <button onClick={this.handleClick} value="0">0</button>
                <button onClick={this.handleClick} value="1">1</button>
                <button onClick={this.handleClick} value="2">2</button>
                <button onClick={this.handleClick} value="3">3</button>
                <button onClick={this.handleClick} value="4">4</button>
                <button onClick={this.handleClick} value="5">5</button>
                <button onClick={this.handleClick} value="6">6</button>
                <button onClick={this.handleClick} value="7">7</button>
                <button onClick={this.handleClick} value="8">8</button>
                <button onClick={this.handleClick} value="9">9</button>
                <button onClick={this.handleClick} value="+">+</button>
                <button onClick={this.handleClick} value="-">-</button>
                <button onClick={this.handleClick} value="*">*</button>
                <button onClick={this.handleClick} value="/">/</button>
                <button onClick={this.result}>=</button>
                <button onClick={this.reset}>c</button>
                </div>
            </div>
        );
    }
}

export default Colculete;