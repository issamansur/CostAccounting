import React, { useState } from "react";

import "./Costs.css";

import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import Card from "../UI/Card";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');

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
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    );
};

export default Costs;