import React from "react"
import { render ,act,fireEvent} from "@testing-library/react"
import BookForm from "../components/BookForm/BookForm"
import user from "@testing-library/user-event"

describe("test add a book", () => {
  test("Work without crashing", () => {
    const mockaddBook = jest.fn();
    const { debug } = render(<BookForm addBook={mockaddBook} />);
    //debug()
  });
  test("Testing book : libelle ,auteur , edition , nombre d'exemplaire ,button submit ...", () => {
    const mockaddBook = jest.fn();
    const { debug, getByLabelText,getByTestId} = render(
      <BookForm addBook={mockaddBook} />
    );
    fireEvent.click(getByTestId("showtoggle"))
    const libelle = getByLabelText(/libelle/i);
    //debug(libelle)
    expect(libelle).toBeTruthy();
    expect(libelle).toHaveAttribute("type", "text");
    const auteur = getByLabelText(/auteur/i);
    //debug(auteur)
    expect(auteur).toBeTruthy();
    expect(auteur).toHaveAttribute("type", "text");
    const Edition = getByLabelText(/edition/i);
    //debug(Edition)
    expect(Edition).toBeTruthy();
    expect(Edition).toHaveAttribute("type", "text");
    const nbExemplaire = getByLabelText(/Nombre exemplaire/i);
    //debug(nbExemplaire)
    expect(nbExemplaire).toBeTruthy();
    expect(nbExemplaire).toHaveAttribute("type", "number");
    expect(getByTestId("submit")).toBeTruthy()
  });
  test("Testing change input and Button", async () => {
    const promise=Promise.resolve()
    const mockaddBook = jest.fn(()=>promise)
    const { debug, getByLabelText,getByTestId } = render(<BookForm addBook={mockaddBook} />)
    
    fireEvent.click(getByTestId("showtoggle"))
    const libelle = getByLabelText(/libelle/i)
    const Booklibelle="Le Bruit et la Fureur"
    user.type(libelle, Booklibelle)
    expect(libelle).toHaveValue(Booklibelle)
    debug(libelle) 

    const auteur = getByLabelText(/auteur/i)
    const BookAuteur="William Faulkner	"
    user.type(auteur, BookAuteur)
    expect(auteur).toHaveValue(BookAuteur)
    debug(auteur) 

    const edition = getByLabelText(/edition/i)
    const BookEdition="1500"
    user.type(edition, BookEdition)
    expect(edition).toHaveValue(BookEdition)
    debug(edition)

    const nbExemplaire = getByLabelText(/Nombre exemplaire/i)
    const BookNbExemplaire="2"
    user.type(nbExemplaire, BookNbExemplaire)
    debug(nbExemplaire)

    const submitBtn = getByTestId("submit")
    user.click(submitBtn)
    await act(() => promise)
    expect(mockaddBook).toHaveBeenCalled()
    expect(mockaddBook).toHaveBeenCalledTimes(1) 
  })
});
