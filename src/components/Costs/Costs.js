import React, { useState } from "react";

import "./Costs.css";

import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import CostItem from "./CostItem";

const Costs = (props) => {
    const [inputYear, setInputYear] = useState('2020');

    const changeYearHandler = (year) => {
        setInputYear(year);
    };
    
    return (
        <div>
            <Card className="costs">
                <CostsFilter 
                    year={inputYear} 
                    onChangeYear={changeYearHandler}
                />
                
                {props.costs.map(
                    (cost) => (
                        <CostItem 
                            description={cost.description}
                            amount={cost.amount}
                            date={cost.date}
                        />
                    )
                )}
            </Card>
        </div>
    );
};

export default Costs;