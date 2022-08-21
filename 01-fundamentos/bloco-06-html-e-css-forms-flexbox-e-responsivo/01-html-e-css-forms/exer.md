 # Criando um formulário para concorrer a uma viagem
Imagine que você está surfando na internet. Você agora é uma pessoa desenvolvedora, cansada após finalmente terminar seus estudos e pensando nas suas maravilhosas e merecidas férias.
Então, você se depara com um anúncio do concurso TrybeTrip, que premia com uma viagem totalmente paga e com várias opções de destino. Como você imagina que seria a página para concorrer a essa viagem?
Concorda que seria uma espécie de formulário?
O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado form.html. A estruturação de sua página deverá ficar semelhante com a imagem abaixo.
 ### Formato do Formulário TrybeTrip.
A imagem acima foi criada no Excalidraw, ele serve para criar diagramas e estruturas num quadro branco, muito útil para tirar aquela ideia de layout de sua cabeça e colocá-la em visualização. Outra ferramenta ótima para quem se interessa em design é o Figma. Vale a pena dar uma olhada.
Dicas:

    Crie o costume de adicionar ID's a elementos únicos e classes a elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora;
    Procure saber mais sobre as Tags <label> e <fieldset> clicando nas documentações a seguir:
        Label;
        Fieldset.

    O formulário deverá permitir que a pessoa usuária insira os seguintes campos:

    Nome Completo:
        Limitado entre 10 e 40 caracteres.
    E-mail:
        Limitado entre 10 e 50 caracteres.
    Destino Preferido:
        4 opções: Cidade, Campo, Praia, Montanhas.
    Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
        Limite de 500 caracteres.
    Qual a melhor data para realizar sua viagem?
    Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
    Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

Esses serão os principais campos utilizadas nos próximos exercícios.

    Crie um botão para enviar as informações preenchidas.

Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.

    Dica: Coloque a tag <script> no final do seu body.

    Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?
    Crie um botão que limpe as informações contidas nos campos;
