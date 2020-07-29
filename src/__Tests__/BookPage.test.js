import React from "react"
import { render,user, act} from "@testing-library/react"
import BookPage from "../components/BookPage/BookPage"
import {addBook as mockAddBook,deleteBook as mockDeleteBook} from "../services/Bookservice"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"
jest.mock("../services/Bookservice")

describe("test bookPage  ", () => {
    const mockBook={
        id: 7,
        libelle: "Test",
        auteur: "Victor Hugo",
        edition: 50,
        nbExemplaire: 20,
        condition:"Noarchived",
        EmpruntCondition:"Noemprun",
        dateEmprunt:"",
        dateRetourLivre:""
      }
      beforeEach(() => {
        jest.clearAllMocks()
      })
    test.skip("Testing the integration between BookForm and BookPage",async()=>{
        mockAddBook.mockResolvedValue(mockBook)
        const promise = Promise.resolve({
        success: true,
    })
        mockDeleteBook.mockImplementation(() => promise)
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const {getByTestId}=render(
          <Router history={history}>
          <BookPage />
          </Router>)
           const Title =  getByTestId("libelle")
           expect(Title).toHaveTextContent("Test")
         /*const deleteBookBtn = getByTestId("deletebtn")
         user.click(deleteBookBtn)
         expect(mockDeleteBook).toHaveBeenCalled()
         expect(mockDeleteBook).toHaveBeenCalledTimes(1)*/
         await act(() => promise)
     
    })
})