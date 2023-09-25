import "./NewCost.css";

import CostForm from "./CostForm";

const NewCost = (props) => {

    const saveCostDataHandler = (data) => {
        const newCost = {
            ...data,
            id: Math.random().toString()
        }

        props.onAddNewCost(newCost);
    };

    return (
        <div className="new-cost"> 
            <CostForm 
                onSaveCostData={saveCostDataHandler}
            />
        </div>
    );
}

export default NewCost;