import React from "react";
import TodoLostPng  from  "../../asset/TodoList.png"
import DebtFreePng from "../../asset/DebtFree.png"
import TodoListM from "../../asset/TodoListM.png"
import Global from "../../asset/Global.png"
import './myWork.css'

const MyWork = () => {
    return (
        <div className="myWorkCommon">
            <div className='Edu'>
                <span className="educationText">My Work</span>
            </div>
            <div className="myWork">
                <div className="workTodo">
                    <div className="imgHref">
                        <a  href="https://todo-list-b3286.web.app/" target="_blank" >
                            <img src={TodoLostPng} alt="Todo" className="img"/>
                        </a>
                    </div>

                </div>
                <div className="workDebt">
                    <div className='imgHref'>
                        <a href="https://debtfree.arpify.com/" target="_blank" >
                            <img src={DebtFreePng} alt="debt" className="img"/>
                        </a>
                    </div>

                </div>
            </div>
            <div className="myWork">
                <div className="workTodo">
                    <div className="imgHref">
                        <a  href="https://table-4a0c3.web.app/" target="_blank" >
                            <img src={TodoListM} alt="Todo" className="img"/>
                        </a>
                    </div>

                </div>
                <div className="workDebt">
                    <div className='imgHref'>
                        <a href="https://global-31165.web.app" target="_blank" >
                            <img src={Global} alt="debt" className="img"/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default MyWork
