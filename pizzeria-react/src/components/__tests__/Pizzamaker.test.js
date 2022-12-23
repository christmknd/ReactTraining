import Pizzamaker from "../Pizzamaker";
import {render, fireEvent} from '@testing-library/react'

describe( Pizzamaker, () => {
    it("first counter value is initialize to zero", () => {
        const {getByTestId} = render(<Counter initialCount={0}/>)
        const fisrtCountValue = Number(getByTestId("cheese-counter").textContent);
        expect(fisrtCountValue).toEqual(0)
    })

    it("first counter increments by one when is clicked", () => {
        const {getByTestId , getByRole} = render(<Counter initialCount={0}/>)
        const incrementBttn = getByRole("button",{name: "Increment"});
        fireEvent.click(incrementBttn); // clique sur le bouton 
        const cheeseCounterValue = Number(getByTestId("cheese-counter").textContent);
        expect(cheeseCounterValue).toEqual(1)
    })

    it("first counter decrements by one when is clicked", () => {
        const {getByTestId , getByRole} = render(<Counter initialCount={0}/>)
        const decrementBttn = getByRole("button",{name: "Decrement"});
        fireEvent.click(decrementBttn); // clique sur le bouton 
        const cheeseCounterValue = Number(getByTestId("cheese-counter").textContent);
        expect(cheeseCounterValue).toEqual(-1)
    })

    it("first counter should be zerp if restart button clicked", () => {
        const {getByTestId , getByRole} = render(<Counter initialCount={99}/>)
        const restartBttn = getByRole("button",{name: "RestartSecond"});
        fireEvent.click(restartBttn); // clique sur le bouton 
        const cheeseCounterValue = Number(getByTestId("cheese-counter").textContent);
        expect(cheeseCounterValue).toEqual(0)
    })
})