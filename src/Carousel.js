import React from "react"

class Carousel extends React.Component {
    
    state = {
        index: 0
    }

   right = () => {
       if(this.state.index < 3) {
           this.setState({
               index: this.state.index + 1
           })
       } else if(this.state.index === 3) {
        this.setState({
            index: 0
        })
       }
   }

    left = () => {
        if(this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        } else if(this.state.index === 0) {
            this.setState({
                index: 3
            })
        }
    }

    render() {
        
        return (
            <div>
                <button onClick={this.left}> Left </button>
                <img src={this.props.imgs[this.state.index]} alt="..." />
                <button onClick={this.right}> Right</button>
            </div>
        )
    }
}

export default Carousel

