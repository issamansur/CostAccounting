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
    
    let costsContent = <p> В этом году расходов нет </p>;
    if (filteredCosts.length > 0) {
        costsContent = 
        filteredCosts.map(
            (cost) => (
                <CostItem
                    key={cost.id}
                    description={cost.description}
                    amount={cost.amount}
                    date={cost.date}
                />
            )
        );
    }

    return (
        <div>
            <Card className="costs">
                <CostsFilter 
                    year={selectedYear} 
                    onChangeYear={changeYearHandler}
                />
                {costsContent}
            </Card>
        </div>
    );
};

export default Costs;