import { Provider } from "react-redux"
import Header from "../components/Header"
import { render,screen } from "@testing-library/react"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom"

test("Test if button exist in header",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>

    <Header/>
    </Provider>
    </BrowserRouter>

)
    const button = screen.getByRole("heading")
    expect(button).toBeInTheDocument();

})