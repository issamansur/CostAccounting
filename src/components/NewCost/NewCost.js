import "./NewCost.css";

import CostForm from "./CostForm";

const NewCost = (props) => {

    const SaveCostDataHandler = (data) => {
        const newCost = {
            ...data,
            id: Math.random().toString()
        }

        props.OnAddNewCost(newCost);
    };

    return (
        <div className="new-cost"> 
            <CostForm 
                OnSaveCostDate={SaveCostDataHandler} 
            />
        </div>
    );
}

export default NewCost;