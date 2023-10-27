import { FaEdit, FaTrash } from "react-icons/fa";

const NeedItem = ({id, title,editItem, removeItem}) => {
    return ( 
        <li className="need-item">
            <div className="need-item-control">
                <h6>{title}</h6>
                <div className="need-btn-group">
                    <button
                    onClick={()=>editItem(id)}
                    className="edit-btn"><FaEdit /></button>
                    <button 
                    onClick={()=>removeItem(id)}
                    className="remove-btn"><FaTrash /></button>
                </div>
            </div>
        </li>
     );
}
 
export default NeedItem;