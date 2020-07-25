import React from "react"
import { render ,fireEvent} from "@testing-library/react"
import BookList from "../components/BooksList/BooksList"
import mockBooks from "../mock/mockBooks"
import user from "@testing-library/user-event"

describe("test list of books", () => {
    test("Testing render an array of Book List",()=>{
        const deletemock=jest.fn()
        const updateConditionBookMock=jest.fn()
        const updateBookMock=jest.fn()
        const updateEmpruntMock=jest.fn()
        const booksComponent=render(<BookList books={mockBooks} deleteBook={deletemock}
            updateBook={updateBookMock} updateConditionBook={updateConditionBookMock} updateEmpruntConditionBook={updateEmpruntMock}/>)
        expect(booksComponent).toMatchSnapshot()
    })
    test("Testing the integration between Book and BookList",()=>{
        const deletemock=jest.fn()
        const updateConditionBookMock=jest.fn()
        const updateBookMock=jest.fn()
        const updateEmpruntMock=jest.fn()
        const mockBookExemple=[  {
            id: 1,
            libelle: "Les Misérables, tome 1",
            auteur: "Victor Hugo",
            edition: 1000,
            nbExemplaire: 15000,
            condition:"Noarchived",
            EmpruntCondition:"emprun",
            dateEmprunt:"thur Jul 3 2020 15:22:16 GMT+0100",
            dateRetourLivre:"Mon Jul 18 2020 13:45:59 GMT+0100"
          }]
        const {getByTestId}=render(<BookList books={mockBookExemple} deleteBook={deletemock}
            updateBook={updateBookMock} updateConditionBook={updateConditionBookMock} updateEmpruntConditionBook={updateEmpruntMock} />)
        
        fireEvent.click(getByTestId("deletebtn"))
        const deleteBookBtn=getByTestId("deletebtn")
        user.click(deleteBookBtn)
        expect(deletemock).toHaveBeenCalled()
        expect(deletemock).toHaveBeenCalledTimes(2)
        
        const AlertforArchive = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        fireEvent.click(getByTestId("archivedbtn"))
        const archivedBookBtn=getByTestId("archivedbtn")
        user.click(archivedBookBtn)
        expect(updateConditionBookMock).toHaveBeenCalled()
        expect(updateConditionBookMock).toHaveBeenCalledTimes(2)
        window.alert = AlertforArchive;

        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        fireEvent.click(getByTestId("Empruntbtn"))
        const empruntBookBtn=getByTestId("Empruntbtn")
        user.click(empruntBookBtn)
        expect(updateEmpruntMock).toHaveBeenCalled()
        expect(updateEmpruntMock).toHaveBeenCalledTimes(2)
        window.alert = jsdomAlert;
        
       /* fireEvent.click(getByTestId("updateBtn"))
        const updateBookBtn=getByTestId("updateBtn")
        user.click(updateBookBtn)
        expect(updateBookMock).toHaveBeenCalled()
        //expect(updateBookMock).toHaveBeenCalledTimes(2)*/

    })
   


})