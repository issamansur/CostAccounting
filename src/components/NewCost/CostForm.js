import { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
    /*
    const [userInput, setUserInput] =  useState(
        {
            name: '',
            amount: '',
            date: ''
        }
    );

    const nameChangeHandler = (event) => {
        setUserInput(
            ...userInput,
            name: event.target.value
        );
    };

    const amountChangeHandler = (event) => {
        setUserInput(
            ...userInput,
            amount: event.target.value
        );
    };

    const dateChangeHandler = (event) => {
        setUserInput(
            ...userInput,
            date: event.target.value            
        );
    };
        
    */
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return (
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input 
                        type='text'
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input 
                        type='number'
                        min='0.01' 
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input 
                        type='date' 
                        min='2023-01-01' 
                        step='2100-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-cost__actions">
                    <button type='submit'>
                        Добавить расход
                    </button>
                    <button type='submit'>
                        Отмена
                    </button>
                </div>
            </div>
        
        </form>
    );
}

export default CostForm;