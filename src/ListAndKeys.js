import React from 'react';
class NumbersTable extends React.Component {
    state = {
        list: this.createList()
    }
    createList() {
        let arr = []
        for(let i = 1; i<=this.props.limit;i++) {
            arr.push(i)
        }
        return arr;
    }
   render() {
       return (
           <ul>
               {this.state.list.map((number, index)=> {
                if (number % 2 ===0){
                    return (
                    <div>
                    <li className="even" key={index} style={ { backgroundColor: "red" } }>{number}</li>
                    </div> )
                } else {
                    return (
                    <div>
                    <li className="even" key={index} style={ { backgroundColor: "white" } }>{number}</li>
                    </div> )
                }
               })}
           </ul>
       )
   }
}

export default NumbersTable