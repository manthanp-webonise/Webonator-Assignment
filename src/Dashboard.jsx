import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addTodo ,deletetodo, edittodo, removetodo } from './actions/index';
import './Dashboard.css'
//import  api from './api/list';

const Dashboard = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    let history = useHistory();

        //console.log(list);
        //const retriveList = async() => {
        //const response = await api.get("/List");
        //return response.data;
        //};

  
    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(list))
       
        //const getAllList = async() => {
          // const allList = await retriveList();
           //if(allList) getInputData(allList);
       //}
       //getAllList();
    }, [list])

    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add Todos Here</figcaption>
                </figure>

                <div className="add_items">
                    <input className="input1" type="text" 
                    value={inputData} 
                    onChange={(e) => setInputData(e.target.value)}
                    placeholder="Add your todo list heres"
                    /> 
                    
                    <button 
                    className="add_btn" 
                    onClick={() => dispatch(addTodo(inputData),setInputData(''))}>
                       ADD
                    </button>
                </div>

                <div className="show_items"> {
                        list.map((elem) => {
                            return(
                            
                            <div className="each_item" key={elem.id}>
                            <h3>{elem.data}</h3>
                          
                           {/* <div className= "edit">
                                <button onClick={() => dispatch(edittodo(inputData),setInputData(''))} 
                               </div> className="edit_btn">Edit</button>
                            </div>*/}
                           
                            <div className="todo_btn">
                            <button 
                            className="delete_btn" title="Delete item"
                            onClick={ () => dispatch(deletetodo(elem.id))}>
                            DELETE
                           </button> 
                           </div>
                            </div> 
                           )
                       })
                   }            
                </div>

                <div className="remove_all">
                    <button className="remove_btn" onClick={() => dispatch(removetodo())}>
                        <span>CLEAR ALL</span>
                        </button>
                   </div>
                </div>
            
            <div className="Exit">
            <button onClick={()=> {history.push("/Login")}}
            className="exit">
                Logout
            </button>
        </div>

        </div>
        </>
    )
}

export default Dashboard
