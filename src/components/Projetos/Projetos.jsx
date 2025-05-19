import "./Projetos.css"

export default function Projetos() {
  const projetos = [
    {
      nome: "Kit Card",
      descricao: "Aplicativo de flash cards para aprender idiomas.",
      link: "https://github.com/renatog17/flashcards-react",
    },
    {
      nome: "Página Estética Integrativa",
      descricao: "Landing Page para uma clínica de estética",
      link: "https://estetica-integrativa-cd.vercel.app/"
    }
  ];

  return( 
    <div className="container">
    <h2 className="titulo">Meus Projetos Pessoais</h2>
    <div className="grid-projetos">
      {projetos.map((projeto, index) => (
        <div className="card" key={index}>
          <h3>{projeto.nome}</h3>
          {projeto.descricao && <p>{projeto.descricao}</p>}
          {projeto.link && (
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
)
}
