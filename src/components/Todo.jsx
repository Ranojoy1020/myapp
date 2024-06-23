import { useState, useEffect } from "react"

export default function Todo() {

    const LOCAL_STORAGE_KEY = 'todoList'

    const [inputData, setInput] = useState('');

    const [itemList, addToList] = useState(() => {
        return (localStorage.getItem(LOCAL_STORAGE_KEY).split(",") || []);
    });


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,itemList);
    }, [itemList])


    return(
        <div className="container-fluid d-flex flex-column align-items-center col-6 my-5">
            <h3 className="text-light">Add Shopping List Items Here 👇</h3>

            <div className="form-floating m-4 col-10">
                <div className="input-group">
                    <input type="text" className="form-control" id="todo" placeholder="Add Item" value={inputData} onChange={(e) => {
                        setInput(e.target.value);
                    }}/>
                    <button className="btn btn-lg btn-success" type="submit" onClick={() => {
                        if (!inputData) {
                            
                        }
                        else{
                            addToList([...itemList,inputData]);
                            setInput('')
                        }
                    }}>Add</button>
                </div>
            </div>

            <ul className="showData list-group m-4 col-10">
                {
                    itemList.map((item, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                {item}

                                <button className="btn btn-sm btn-danger float-end" onClick={() => {
                                    const updatedList = itemList.filter((value, ind) => {return index !== ind});
                                    addToList(updatedList);
                                    }}>Delete
                                </button>
                            </li>
                            );
                        })
                }

            </ul>

            <button className="btn btn-danger mx-4 col-3" onClick={() => {addToList([]);
                localStorage.removeItem('todoList');
            }}>Clear All</button>

        </div>
    )
}