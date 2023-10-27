import { FaBabyCarriage, FaBroom, FaFacebook, FaGolfBall, FaInfo, FaInstagram, FaMagic, FaPeopleArrows, FaPinterest, FaStamp, FaWrench } from "react-icons/fa";

export const links = [
    {
        page:"home",
        sublinks: [
            {label: "about", icon: <FaInfo />, url: "/"},
            {label: "belief", icon: <FaMagic />, url: "/"},
            {label: "goal", icon: <FaGolfBall />, url: "/"}
        ]
    }, 
    {
        page: "service",
        sublinks: [
            {label: "general clean", icon: <FaBroom />, url: "/service"},
            {label: "child care", icon: <FaBabyCarriage />, url: "/service"},
            {label: "handy work", icon: <FaWrench />, url: "/service"}
        ]
    },
    {
        page: "employee",
        sublinks: [
            {label: "employee of the week", icon: <FaStamp />, url: "/employ"},
            {label: "employee of the month", icon: <FaStamp/>, url: "/employ"},
            {label: "employee of the year", icon: <FaStamp />, url: "/employ"}
        ]
    },
    {
        page: "contact",
        sublinks: [
            {label: "facebook", icon: <FaFacebook />, url: "/contact"},
            {label: "instagram", icon: <FaInstagram/>, url: "/contact"},
            {label: "pinterest", icon: <FaPinterest />, url: "/contact"}
        ]
    }
]