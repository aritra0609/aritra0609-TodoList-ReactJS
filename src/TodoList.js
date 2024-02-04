import React,{useState} from 'react';
import './App.css'; 
function TodoList(){
    const [activity,setActivity]=useState("");
    const [listData,setListData]=useState([]);
   
    function addActivity(){
           // setListData([...listData,activity])
            //console.log(listData);
            setListData((listData)=>{
                const updatedList=[...listData,activity];
                console.log(updatedList);
                setActivity('');
                return updatedList;
            })
    }
    function removeActivity(i){
            const updatedListData=listData.filter((elem,id)=>{
                return i!=id;
            })
            setListData(updatedListData);
    }
    function removeAll(){
        setListData([]);
    }
    
    return(
        <>
        <div className='container'>
            <div className='header'>Aritra's TODO LIST</div>
            <input type='text'  placeholder='Add Item' value={activity}  onChange={(e)=>setActivity(e.target.value)}/>
            <button className='add' onClick={addActivity} >Add</button>
            {listData!=[] && listData.map((data,i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className='listData'>{data}</div></p>
                        <div className='btn-position'><button onClick={()=>removeActivity(i)}>Remove</button></div>
                      
                    </>
                )
            })}
            {listData.length>=1 && <button onClick={removeAll}>Remove all</button>}
            
        </div>
        </>
    );
}
export default TodoList;