import React from "react"

class LikeButton extends React.Component {
    state= {
        counter: 0 
    }
    addOne = () => {
        this.setState({
            counter: this.state.counter +1
        })
    }

    render() {
        const {counter} = this.state
        return (
            <div>
                <button onClick={this.addOne}>{counter} Likes</button>
            </div>
        )
    }
}

export default LikeButton