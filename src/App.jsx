import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Une Si Longue Lettre", auteur: "Mariama Ba", estDisponible: true },
    { id: 2, titre: "Soudjata Keita", auteur: "Djibril Tamsir Niane", estDisponible: false },
    { id: 3, titre: "Malade Immaginaire", auteur: "Moliere", estDisponible: false },
    { id: 4, titre: "L enfant Noir", auteur: "Camara Laye", estDisponible: true },
    { id: 5, titre: "Sous L Orage", auteur: "Seydou Badian", estDisponible: true }
  ]);

const onClickEmprunt = (bookId) => {
  setBooks((books) =>
    books.map((book) =>
      book.id === bookId
        ? { ...book, estDisponible: !book.estDisponible }
        : book
    )
  );
};

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const ajouterLivre = (e) => {
    e.preventDefault();

    if (titre.trim() === "" || auteur.trim() === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouveauLivre = {
      id: Date.now(),
      titre: titre,
      auteur: auteur,
      estDisponible: true
    };

    setBooks([...books, nouveauLivre]);

    setTitre("");
    setAuteur("");
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Liste des Livres</h2>
      <div>
        {books.map((u) => (
          <BookCard
            titre={u.titre}
            auteur={u.auteur}
            estDisponible={u.estDisponible}
            key={u.id}
            onClickEmprunt={() => onClickEmprunt(u.id)}
          />
        ))}
      </div>
      <h2>Ajouter un livre</h2>
      <form onSubmit={ajouterLivre}>
        <input
          type="text"
          placeholder="Titre du livre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)
          }
        />
        <input type="text" placeholder="Auteur" value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;
