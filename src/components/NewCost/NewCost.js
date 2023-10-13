import "./NewCost.css";

import CostForm from "./CostForm";
import { useState } from "react";

const NewCost = (props) => {

    const saveCostDataHandler = (data) => {
        const newCost = {
            ...data,
            id: Math.random().toString()
        }

        props.onAddNewCost(newCost);
        setIsFormVisible(false);
    };

    const showForm = () => {
        setIsFormVisible(true);
    }

    const cancelHandler = () => {
        setIsFormVisible(false);
    }
    
    const [isFormVisible, setIsFormVisible] = useState(false);

    if (!isFormVisible){
        return (
            <div className="new-cost"> 
                <button onClick={showForm}>
                    Добавить новый расход
                </button>
            </div>
        );
    }

    return (
        <div className="new-cost">
            {!isFormVisible &&
                <button onClick={showForm}>
                    Добавить новый расход
                </button>        
            }
            {isFormVisible &&
                <CostForm 
                    onSaveCostData={saveCostDataHandler}
                    onCancel={cancelHandler}
                />
            }
        </div>
    );
}

export default NewCost;