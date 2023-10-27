import Alert from "./Alert";
import NeedItem from "./NeedItem";
// import { useGlobalContext } from "../context";
import { useState } from "react";
import { useEffect } from "react";
const LSNeed = () =>{
    let LSList = localStorage.getItem("need_list");
    if(LSList){
        return (LSList=JSON.parse(localStorage.getItem("need_list")))
    }else{
         return []
    }
}
const ServiceNeed = () => {
    const [name, setName] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState("");
    const [list, setList] = useState(LSNeed);
    const [alert, setAlert]= useState({show:false, type:"", msg:""})
    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            showAlert(true, "danger", "Enter a valid value!")
        }
        else
        if(name && isEditing){
            setList(list.map((item)=>{
                if(item.id === editId){
                    return {...item, title: name}
                }else{
                    return item
                }
            }))
            setName("");
            setIsEditing(false);
            setEditId("");
            showAlert(true, 'success', 'value changed');
        }
        else{
            setList([...list, {id: Date.now().toString(), title: name}]);
            setName("")
            showAlert(true, "success", "New item added!")
        }
    }

    useEffect(()=>{
        localStorage.setItem("need_list", JSON.stringify(list))
    }, [list])
    function clearList(){
        setList([]);
        showAlert(true, "danger", "List is empty!")
    }
    function removeItem(id){
        const newList = list.filter((item)=> item.id !== id);
        setList(newList);
        showAlert(true, "danger", "Item removed from the list!")
    }
    function editItem(id){
        const curItem = list.find((item)=> item.id === id);
        setEditId(id);
        setIsEditing(true);
        setName(curItem.title);
    }
    function showAlert(show= false, type="" , msg=""){
        setAlert({show, type, msg})
    }
    return ( 
        <section className="need-section">
            {alert.show && <Alert {...alert} removeAlert = {showAlert}/>}
            <h2>What you need...</h2>
            <form onSubmit={handleSubmit} className="need-form">
                <input 
                value={name}
                onChange = {(e)=> setName(e.target.value)}
                type="text" className="need-input" placeholder="e.g. house" />
                <button className="need-btn">{isEditing?"Edit" :"Submit"}</button>
            </form>
            {list.length > 0 &&
            <section className="list-container">
                <ul className="need-list">
                {list.map((item)=>{
                    return(
                      <NeedItem key={item.id} {...item} editItem ={editItem} removeItem = {removeItem}/>
                    )
                })}
                
                </ul>
            <button onClick={clearList} className="btn clear-btn">Clear List</button>
            </section>
            }
            

        </section>
     );
}
 
export default ServiceNeed;