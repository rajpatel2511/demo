const List2 = (props) =>{        
  // console.log(props);
return(
<ul>
  {  
      props.lists2.map((listItem)=>{
       return (<><li key={listItem}>{listItem} <input type="checkbox" onChange={(event)=>props.check2(event,listItem)}/> </li>

        
       </>)})
  }
</ul>
);};
export default List2;
