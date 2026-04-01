import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"
test('Testing for heading render in contact page', () => { 
    render(<Contact/>)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
 })

 test('Testing for button inside contact page',()=>{
    render(<Contact/>)
    const button = screen.getAllByRole("button")
    expect(button[0]).toBeInTheDocument();
 })

 test("Testing for text Hey inside contact page",() => {
    render(<Contact/>)
    const text = screen.getByText("Hey")
    expect(text).toBeInTheDocument();
 })

 test("Testing wheter contact page has 2 buttons",() => {
    render(<Contact/>);
    const btns = screen.getAllByRole("button")
    expect(btns.length).toBe(2);
 })