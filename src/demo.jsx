const newList = this.state.list.filter(item => item !== listItem);
const list3 = [...this.state.list2, listItem];
this.setState({ list: newList, list2: list3 });