import "./CostItem.css";

import Card from "../UI/Card";

import CostDate from "./CostDate";

const CostItem = (props) => (
    <Card className="cost-item">
        <CostDate date={props.date}/>
        <div className="cost-item__description">
            <h2>{props.description}</h2>
            <div className="cost-item__price">${props.amount}</div>
        </div>
    </Card>
);

export default CostItem;