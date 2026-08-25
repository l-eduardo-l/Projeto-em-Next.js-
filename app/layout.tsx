//Importa o css global da aplicação.
import "./global.css"

//Layout principal que define a estrutura base de todas as páginas.
export default function RootLayout(

//Recebe o objeto props inteiro(sem desestruturação) e define que ele possui a propriedade children.
  props: Readonly<{
        children: React.ReactNode;
  }>
) {
  return (

//Define a estrutura HTML base e renderiza dentro do body o conteúdo da página atual.
    <html lang="pt-BR">
      <body>{props.children}</body>
    </html>
  );
}