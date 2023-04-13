import React from "react";
import List from "./List";
import List2 from "./List2";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            list:[],
            list2: [],
        };
        this.getvalue = this.getvalue.bind(this);
        this.add = this.add.bind(this);
        this.reset = this.reset.bind(this);
        this.check = this.check.bind(this);
}
getvalue(event){
    this.setState({value: event.target.value});
    // console.log(event.target.value);
}
add() {
     this.setState({list:[...this.state.list, this.state.value]});
     this.setState({value: ""}) ;
    // console.log(this.state.value);
    
}
reset(){
    this.setState({list: []});
    this.setState({list2: []});

}
check(event, listItem) {
    const myArray = [...this.state.list]; 
    const index = myArray.indexOf(listItem);
    
    if (index !== -1) { 
      const newList = [...this.state.list2, listItem]; 
      myArray.splice(index, 1); 
      this.setState({list: myArray, list2: newList}); 
    }
  
    // add CSS style to selected item
    event.target.style.textDecoration = 'line-through';
  }

// check2(event, listItem) {
//     const index = this.state.list2.indexOf(listItem);

//     if (index !== -1) {
//       const newList = [...this.state.list, listItem];
//       const newList2 = [
//         ...this.state.list2.slice(0, index),
//         ...this.state.list2.slice(index + 1),
//       ];
//       this.setState({ list: newList, list2: newList2 });
//     }
//   }



render(){
    return (<> 
 
        <input type="text" placeholder="Type here" value={this.state.value}  onChange={this.getvalue}   />
        <input type="button" value="Add" onClick={this.add} />
        <input type="button" value="Reset" onClick={this.reset} />
        <List lists={this.state.list}  check={this.check} check2={this.check2} />
        <h2>------------------------------------------------------</h2>
        <List2 lists2={this.state.list2} check={this.check} check2={this.check2}/>

 
        </>

      
    )};
}

export default Todo;