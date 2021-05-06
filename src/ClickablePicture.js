import React from "react"

class ClickablePicture extends React.Component{
    state= {
        img: this.props.img,
    }

    changePicture = () => {
        if (this.state.img === this.props.img) {
            this.setState ({
               img: this.props.imgClicked
             })
        } else {
            this.setState ({
                img: this.props.img
              })
        }

    }

    render() {
        return (
            <img src={this.state.img} onClick={this.changePicture} />
        )
      
    }

}

export default ClickablePicture