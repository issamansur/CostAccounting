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
                <CostsFilter year={inputYear} onChangeYear={changeYearHandler} />
                
                <CostItem date={props.costs[0].date} description={props.costs[0].description} amount={props.costs[0].amount}/>
                <CostItem date={props.costs[1].date} description={props.costs[1].description} amount={props.costs[1].amount}/>
                <CostItem date={props.costs[2].date} description={props.costs[2].description} amount={props.costs[2].amount}/>
            </Card>
        </div>
    );
};

export default Costs;