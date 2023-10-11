import React, { useState } from "react";

import "./Costs.css";

import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import CostItem from "./CostItem";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(
        cost => cost.date.getFullYear().toString() === selectedYear
    )
    
    return (
        <div>
            <Card className="costs">
                <CostsFilter 
                    year={selectedYear} 
                    onChangeYear={changeYearHandler}
                />
                
                {filteredCosts.map(
                    (cost) => (
                        <CostItem
                            key={cost.id}
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