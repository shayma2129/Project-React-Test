import {getBookById,deleteBook,listBooks,searchBooks,updateConditionBook, addBook,updateBook} from "../services/Bookservice"
import {  act} from "@testing-library/react"

describe("test function of books", () => {
    
    test("Testing getBookById",()=>{
        const expectedBook={
            id: 3,
            libelle: "Le Rouge et le Noir",
            auteur: "Stendhal",
            edition: 200,
            nbExemplaire: 5420,
            condition:"archived",
            EmpruntCondition:"Noemprun",
            dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
            dateRetourLivre:""
          }
        const testidS=3
        //const testidF=5
        //console.log(getBookById(mockBook,testidS))
        expect(getBookById(listBooks,testidS)).toEqual(expectedBook)
    })
    
    test("Testing add a book to the list of books",()=>{
        const expectedBook=[{
          id: 1,
          libelle: "Les Misérables, tome 1",
          auteur: "Victor Hugo",
          edition: 1000,
          nbExemplaire: 15000,
          condition:"Noarchived",
          EmpruntCondition:"emprun",
          dateEmprunt:"thur Jul 3 2020 15:22:16 GMT+0100",
          dateRetourLivre:"Mon Jul 18 2020 13:45:59 GMT+0100"
        },
        {
          id: 2,
          libelle: "Le Petit Prince",
          auteur: "Antoine de Saint-Exupéry",
          edition: 800,
          nbExemplaire: 25000,
          condition:"Noarchived",
          EmpruntCondition:"Noemprun",
          dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
          dateRetourLivre:""
        },
        {
          id: 3,
          libelle: "Le Rouge et le Noir",
          auteur: "Stendhal",
          edition: 200,
          nbExemplaire: 5420,
          condition:"archived",
          EmpruntCondition:"Noemprun",
          dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
          dateRetourLivre:""
        },{
            id: 4,
            libelle: "test",
            auteur: "chaima",
            edition: 5,
            nbExemplaire: 10,
            condition:"Noarchived",
            EmpruntCondition:"Noemprun",
            dateEmprunt:"",
            dateRetourLivre:""
          }]
          addBook("test","chaima",5,10,"Noarchived","Noemprun","","")
          //console.log(listBooks)
          expect(listBooks).toEqual(expectedBook)
    })
    test("Testing update a book",()=>{
        const expectedBook=[ {
          id: 1,
          libelle: "Les Misérables, tome 1",
          auteur: "Victor Hugo",
          edition: 1000,
          nbExemplaire: 15000,
          condition:"Noarchived",
          EmpruntCondition:"emprun",
          dateEmprunt:"thur Jul 3 2020 15:22:16 GMT+0100",
          dateRetourLivre:"Mon Jul 18 2020 13:45:59 GMT+0100"
        },
        {
          id: 2,
          libelle: "Le Petit Prince",
          auteur: "Antoine de Saint-Exupéry",
          edition: 800,
          nbExemplaire: 25000,
          condition:"Noarchived",
          EmpruntCondition:"Noemprun",
          dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
          dateRetourLivre:""
        },
            {
            id: 3,
            libelle: "Le Rouge et le Noir : update",
            auteur: "Stendhal test",
            edition: 300,
            nbExemplaire: 5420,
            condition:"Noarchived",
            EmpruntCondition:"Noemprun",
            dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
            dateRetourLivre:""
          }]
        const result=updateBook(3,"Le Rouge et le Noir : update","Stendhal test",300,5420,"Noarchived","Noemprun","Wed Apr 11 2001 01:00:00 GMT+0100","")
        //console.log(result)
        expect(result).toEqual(expectedBook)
    })
    test("Testing delete book by id",()=>{
        const goodresult=[
          {
            id: 1,
            libelle: "Les Misérables, tome 1",
            auteur: "Victor Hugo",
            edition: 1000,
            nbExemplaire: 15000,
            condition:"Noarchived",
            EmpruntCondition:"emprun",
            dateEmprunt:"thur Jul 3 2020 15:22:16 GMT+0100",
            dateRetourLivre:"Mon Jul 18 2020 13:45:59 GMT+0100"
          },
          {
            id: 2,
            libelle: "Le Petit Prince",
            auteur: "Antoine de Saint-Exupéry",
            edition: 800,
            nbExemplaire: 25000,
            condition:"Noarchived",
            EmpruntCondition:"Noemprun",
            dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
            dateRetourLivre:""
          }
        ]
        const idbook=3
        const books =deleteBook(idbook)
        //console.log(books)
       expect(books).toEqual(goodresult)   
    })
    test("Testing update condition",()=>{
        const expectedBook=[{
          id: 1,
          libelle: "Les Misérables, tome 1",
          auteur: "Victor Hugo",
          edition: 1000,
          nbExemplaire: 15000,
          condition:"Noarchived",
          EmpruntCondition:"emprun",
          dateEmprunt:"thur Jul 3 2020 15:22:16 GMT+0100",
          dateRetourLivre:"Mon Jul 18 2020 13:45:59 GMT+0100"
        },
        {
          id: 2,
          libelle: "Le Petit Prince",
          auteur: "Antoine de Saint-Exupéry",
          edition: 800,
          nbExemplaire: 25000,
          condition:"Noarchived",
          EmpruntCondition:"Noemprun",
          dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
          dateRetourLivre:""
        },
        {
          id: 3,
          libelle: "Le Rouge et le Noir",
          auteur: "Stendhal",
          edition: 200,
          nbExemplaire: 5420,
          condition:"Noarchived",
          EmpruntCondition:"Noemprun",
          dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
          dateRetourLivre:""
        }]
          const result=updateConditionBook(3,"Le Rouge et le Noir","Stendhal",200,5420,"Noarchived","Noemprun","Wed Apr 11 2001 01:00:00 GMT+0100","")
          expect(result).toEqual(expectedBook)
    })
    //you shouled Test with only to work correctly
    test.only("Testing search book by libelle", ()=>{
      
        let  mockgoodresult=
          [{
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
        
        let badresult=[
          {
            id: 2,
            libelle: "Le Petit Prince",
            auteur: "Antoine de Saint-Exupéry",
            edition: 800,
            nbExemplaire: 25000,
            condition:"Noarchived",
            EmpruntCondition:"Noemprun",
            dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
            dateRetourLivre:""
          },
          {
            id: 3,
            libelle: "Le Rouge et le Noir",
            auteur: "Stendhal",
            edition: 200,
            nbExemplaire: 5420,
            condition:"archived",
            EmpruntCondition:"Noemprun",
            dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
            dateRetourLivre:""
          }
        ]
        const searchvalue="Les Misérables, tome 1"
        const result=searchBooks(searchvalue)
       
       // console.log(result)
       expect(result).toEqual(mockgoodresult)
       //expect(result).toEqual(badresult)
       
    })
})