export default function Projetos() {
  const projetos = [
    {
      nome: "Kit Card",
      descricao: "Aplicativo de flash cards para aprender idiomas.",
      link: "https://github.com/seu-usuario/kit-card",
    },
  ];

  return( 
      <div>Meus Projetos Pessoais
        <div>{projetos.map((projeto ,index) => (
            <div key={index} >{projeto.nome}</div>
        ))}</div>
      </div>
)
}
