import React from "react"
import { render,fireEvent} from "@testing-library/react"
import Book from "../components/Book/Book"
describe("test book ", () => {
    const mockBook={
        id: 1,
        libelle: "Les Misérables, tome 1",
        auteur: "Victor Hugo",
        edition: 1000,
        nbExemplaire: 15000,
        condition:"Noarchived",
        EmpruntCondition:"emprun",
        dateEmprunt:"thur Jul 3 2020 15:22:16 GMT+0100",
        dateRetourLivre:"Mon Jul 18 2020 13:45:59 GMT+0100"
      }
    test("Testing render data in a modal",()=>{
        const mockdeleteBook =jest.fn()
        const mockupdateBook =jest.fn()
        const mockupdateConditionBook =jest.fn()
        
        const {getByTestId}=render(<Book
            libelle={mockBook.libelle}
            auteur={mockBook.auteur}
            edition={mockBook.edition}
            nbExemplaire={mockBook.nbExemplaire}
            condition={mockBook.condition}
            EmpruntCondition={mockBook.EmpruntCondition}
            dateEmprunt={mockBook.dateEmprunt}
            dateRetourLivre={mockBook.dateRetourLivre}
            deleteBook={mockdeleteBook}
            updateBook={mockupdateBook}
            updateConditionBook={mockupdateConditionBook}
            />)
        fireEvent.click(getByTestId("ShowModalBtn"))
      /* const libelle=getByLabelText("libelle")
        expect(libelle).toHaveTextContent(mockBook.libelle)
        const auteur=getByLabelText("auteur")
        expect(auteur).toHaveTextContent(mockBook.auteur)
        const edition=getByLabelText("edition")
        expect(edition).toHaveTextContent(mockBook.edition)
        const NbExempl=getByLabelText("NbExempl")
        expect(NbExempl).toHaveTextContent(mockBook.nbExemplaire)
        const condition=getByLabelText("condition")
        expect(condition).toHaveTextContent(mockBook.condition)
        const DateEmprunt=getByLabelText("DateEmprunt")
        expect(DateEmprunt).toHaveTextContent(mockBook.dateEmprunt)
        const DateRetour=getByLabelText("DateRetour")
        expect(DateRetour).toHaveTextContent(mockBook.dateRetourLivre)*/
    })
})