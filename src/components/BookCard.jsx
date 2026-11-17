export default function BookCard({titre, auteur, estDisponible, onClickEmprunt}){
    return(
        <div style={{
            border: "3px solid grey",
            borderRadius: "10px",
            padding: "20px",
            margin: "10px",
            width: "300px"
        }}
        >
            <p>Titre: {titre}</p>
            <p>Auteur: {auteur}</p>
            <p>{estDisponible ? "🟢Disponible" : "🔴Emprunté"}</p>
            <button style={{
                  padding: "5px",
                  marginTop: "3px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  backgroundColor: estDisponible ? "#16a34a" : "#dc2626"
            }}
            onClick={onClickEmprunt}
            >
                {estDisponible ? "Emprunter" : "Rendre"}</button>

        </div>
    )
}