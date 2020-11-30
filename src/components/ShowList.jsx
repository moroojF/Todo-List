import React from 'react';
import './Style.css';

const ShowList = (props) => {

    return (
        <>
            <div className="col-9">
                <ul>{
                    props.myList.map((item, i) =>
                        <li className={item.taskState ? "complete" : "active"} key={i} onClick={e => props.toggle(i)}>{item.myTask}</li>
                    )
                }</ul></div>
            <div className="col-3 text-right">
                <p className="text-left">Click the button below to remove the checked tasks:</p>
                <button type="submit" className="btn btn-outline-secondary mx-1" onClick={e => props.cleanList(props.myList.filter(p => p.taskState === true))}>remove</button></div>
        </>
    )
}
export default ShowList;