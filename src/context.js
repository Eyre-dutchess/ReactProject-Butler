import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { links } from "./navData";
import {peopleList} from "./listData";
const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const AppContext = React.createContext();
const allCatos = ["all", ...new Set(peopleList.map((person)=> person.category))]


const AppProvider = ({children}) =>{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [title, setTitle] =  useState({name: "", sublinks: []});
    const [location, setLocation] = useState({});

    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState({});
    const [age, setAge] = useState("");

    const [people, setPeople] = useState(peopleList);
    const [cato, setCato] = useState(allCatos);

    //note, need, form, alert
    const [alert, setAlert]= useState({show:false, type:"", msg:""})
    function showAlert(show= false, type="" , msg=""){
        setAlert({show, type, msg})
    }

    //category
    function setNewList(category){
        if(category === "all"){
            setPeople(peopleList);
            return;
        }

             const newCatoList = peopleList.filter((item)=> item.category === category);
            setPeople(newCatoList);
        }
       
    //employee
    const getPerson = async () =>{
        setLoading(true);
        try {
            const resp = await fetch(randomUrl);
            const data = await resp.json();
            console.log(data.drinks[0])
            const {idDrink, strDrink,  strDrinkThumb, strInstructions} = data.drinks[0];
            const newPerson = {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strInstructions,
                    
                }

            setPerson(newPerson)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getPerson();
        getAge()
    }, [])
    function getAge(){
        const newNum = Math.floor(Math.random()*50);
        if(newNum < 20) {
            setAge(newNum + 20)
        }
        else{
            setAge(newNum)
        }
    }
    //navbar
    function toggleSidebar(){
        setSidebarOpen(!sidebarOpen)
    }
    function openSubmenu(title, coordinates){
        const newTitle = links.find((item)=> item.page === title);
        setTitle(newTitle);
        setLocation(coordinates)
        setSubmenuOpen(true)
    }
    function closeSubmenu(){
        setSubmenuOpen(false)
    }
     return (
        <AppContext.Provider
        value = {{
            sidebarOpen, toggleSidebar, setSubmenuOpen,
            submenuOpen, openSubmenu, closeSubmenu, title, location,
            loading, person, age , getPerson, 
            people, cato, setNewList,
            alert, showAlert,
        }}
        >
            {children}
        </AppContext.Provider>
     )

    }
export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
