const List = (props) =>{        
    // console.log(props);

    return(
  
  <ul>
    {  
        props.lists.map((listItem)=>{
         return (<><li key={listItem}>{listItem}  <input type="checkbox" onChange={(event)=>props.check(event,listItem)}/></li>

          
         </>)})
    }
</ul>
);};

export default List;
