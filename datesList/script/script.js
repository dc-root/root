var listDate = document.getElementById("listDate");
var listCaseP = document.querySelector(".listCase p");
var listCaseLi = document.querySelector(".listCase li");
var backgroundMain = document.querySelector("body");

// For date
var data = new Date();
var dia = ("0" + data.getDate()).slice(-2);
var mes = ("0" + (data.getMonth() + 1)).slice(-2);
var ano4 = data.getFullYear();
var Today = dia + ' / ' + (mes) + ' / ' + ano4;

// click the add button
function addDate() {
   var inputValue = document.getElementById("calendario").value.split('-').reverse().join(' / ');

   // new element in date list
   function newList() {
      listDate.innerHTML += `<li id="listDateLi" onclick="backwall()"><p>${inputValue}</p><img onclick="deleteDate()" src="assets/trash-alt-regular.svg"></li>`;
   }
   
   // Cases for commemorative days

      switch (inputValue) {
         case "":
            alert("você precisa adicionar uma data");
            break;
         case comemory[0]:         
            dayOne();
            newList()
            break;
         case comemory[1]:         
            carnaval()
            newList()
            break;
         case comemory[2]:         
            diaMulher()
            newList()
            break;
         case comemory[3]:         
            sextaSanta();
            newList()
            break;
         case comemory[4]:         
            pascoa();
            newList()
            break;
         case comemory[5]:         
            tiradentes();
            newList()
            break;
         case comemory[6]:         
            decBr();
            newList()
            break;
         case comemory[7]:         
            indio();
            newList()
            break;
         
         case comemory[8]:         
            trabalho();
            newList()
            break;

         case comemory[9]:         
            maes();
            newList()
            break;

         case comemory[10]:         
            corpus();
            newList()
            break;

         case comemory[11]:         
            namorados();
            newList()
            break;

         case comemory[12]:         
            revConstitucionalista()
            newList()
            break;

         case comemory[13]:         
            pais();
            newList()
            break;

         case comemory[14]:         
            folclore();
            newList()
            break;

         case comemory[15]:         
            soldado();
            newList()
            break;

         case comemory[16]:         
            independenciaBr();
            newList()
            break;

         case comemory[17]:         
            arvore();
            newList()
            break;

         case comemory[18]:         
            primavera();
            newList()
            break;

         case comemory[19]:         
            crianca();
            newList()
            break;

         case comemory[20]:         
            srAparecida();
            newList()
            break;

         case comemory[21]:         
            proff();
            newList()
            break;

         case comemory[22]:         
            Halloween();
            newList()
            break;

         case comemory[23]:         
            finados();
            newList()
            break;

         case comemory[24]:         
            procRepublica()
            newList()
            break;

         case comemory[25]:         
            concienciaN();
            newList()
            break;

         case comemory[26]:         
            black();
            newList()
            break;
            
         case comemory[27]:         
            natal();
            newList()
            break;
            
         case inputValue:
            newList()
            break;
      }
}

const comemory = [
   "01 / 01 / 2021", // Ano novo
   "16 / 02 / 2021", // Carnaval
   "08 / 03 / 2021", // Dia internacional da mulher
   "02 / 04 / 2021", // Sexta-fera Santa | Sexta feira da Paixão
   "04 / 04 / 2021", // Pascoa
   "21 / 04 / 2021", // Tiradentes
   "22 / 04 / 2021", // Descobrimento do Brasil
   "19 / 04 / 2021", // Dia do indio
   "01 / 05 / 2021", // Dia do Trabalho
   "09 / 05 / 2021", // Dia das Mães
   "03 / 06 / 2021", // Corpus Chtist
   "12 / 06 / 2021", // Dia dos Namorados
   "09 / 07 / 2021", // Revolução Constitucionalista
   "08 / 08 / 2021", // Dia dos Pais
   "22 / 08 / 2021", // Dia do flouclore
   "25 / 08 / 2021", // Soldado
   "07 / 09 / 2021", // Independência do Brasil
   "21 / 09 / 2021", // Dia da Arvore
   "22 / 09 / 2021", // Inicio da Primavera
   "10 / 10 / 2021", // Dia da criança
   "12 / 10 / 2021", // Nossa Senhora apareceda
   "15 / 10 / 2021", // Dia do Professor
   "31 / 10 / 2021", // Dia de Bruxas | Halloween
   "02 / 11 / 2021", // Dia de finados
   "15 / 11 / 2021", // Dia da Proclamação da Republica
   "20 / 11 / 2021", // Dia da Conciencia Negra
   "26 / 11 / 2021", // Blackfride
   "25 / 12 / 2021"  // Natal
]

// ---
var dayOne = () => {
   backgroundMain.style.backgroundImage = "url(https://images5.alphacoders.com/111/thumb-1920-1114952.jpg)"
   listCaseP.innerHTML = "✨ Ano Novo 🎉 🧨";
   listCaseLi.innerHTML = `O Ano-Novo é a comemoração de um novo ano que se inicia, e é celebrado na passagem de 31 de dezembro para o 1º de janeiro.
   <br/><br/>
   Também chamado de Réveillon, termo em francês que significa "despertar”.
   
   <br/><br/>
   Origem do Ano-Novo
   
   <br/><br/>
   Entre 753 a.C. e 476 d.C o início do ano civil acontecia no dia 1º de março. Para persas e fenícios, entre outros povos, a data ainda era outra, 23 de setembro.
   
   <br> 
   A comemoração de Ano-Novo com a data que conhecemos hoje tem sua origem em 46 a.C, quando o governador romano Júlio César criou um decreto para que o dia 1º de janeiro fosse o Dia do Ano-Novo.`

   listCaseP.innerHTML += `<p>Dia da Confraternização Universal 👩‍👩‍👧‍👧<p/>`
   listCaseLi.innerHTML += `<li>A Confraternização Universal ou Dia da Confraternização Universal é comemorado no dia 1º de janeiro de cada ano e é um feriado cívico.
   <br/><br/>
   O significado da celebração que dá as boas-vindas ao novo ano reflete o desejo de união entre os povos.
   
   <br/><br/>
   Origem do Dia da Confraternização Universal
   Com a Lei Nº 108, de 29 de outubro de 1935, no governo do presidente Getúlio,vargas, o primeiro dia do ano foi consagrado à comemoração da fraternidade universal e foi estabelecido como feriado nacional.

   <br/>
   Embora muitas fontes divulguem que o Dia da Confraternização Universal tenha sido criado pela Organização das Nações Unidas (ONU), a data não consta no seu calendário.</li>`
   
   listCaseP.innerHTML += `<p> 🕊 Dia Mundial da Paz</p>`;
   listCaseLi.innerHTML += `Com uma proposta bastante parecida, na mesma data é comemorado o Dia Mundial da Paz, a qual foi criada em 1967 pelo então Papa Paulo VI.
   <br/><br/>
   Apesar de ter sido estabelecida por um Papa, a celebração não é restrita aos católicos. Na altura da sua criação, o Papa Paulo VI declarou a importância do envolvimento de todas as pessoas, independentemente da sua religião e, assim, esse dia passou a ser comemorado em muitos países do mundo.
   <br/>
   O tema da comemoração de cada ano é escolhido pelo papa vigente. Milhares de pessoas assistem todos os anos o seu discurso no dia 1 de janeiro, que é tradicionalmente conhecido como a “Mensagem do Papa”.`
}
var carnaval = () => {
   backgroundMain.style.backgroundImage = "url(https://c4.wallpaperflare.com/wallpaper/567/189/86/beach-hat-dachshund-carnival-wallpaper-preview.jpg)"
   listCaseP.innerHTML = "✨ Carnaval 🎉 🥳";
   listCaseLi.innerHTML = `O Carnaval 2021 cai no dia 16 de fevereiro. Apesar de ser tradicionalmente um dia de folga, não é um feriado nacional, mas um ponto facultativo. No Rio de Janeiro, sim, é feriado estadual, conforme Lei nº 5243, de 14 de maio de 2008.
   <br/><br/>
   Esta é uma celebração de data móvel obrigatoriamente comemorada numa terça-feira, e que ocorre sempre 47 dias antes da Páscoa. Na verdade, o Carnaval compreende vários dias de folia, começando pelo fim de semana que antecede a terça de carnaval.
   <br/>
   Em 2021, em decorrência da Covid-19, o Carnaval deverá ser comemorado entre os dias 8 e 11 de julho, com a condição de que até lá a vacina contra o vírus esteja disponível em tempo hábil que permita a realização do evento.
   <br/>
   Alguns estados já se pronunciaram sobre o adiamento da festa para julho, como Bahia, Rio de Janeiro e São Paulo, quando acontecerão os tradicionais desfiles das escolas de samba. Em julho, é possível que haja também ponto facultativo.`
}

var diaMulher = () => {
   backgroundMain.style.backgroundImage = "url(https://c4.wallpaperflare.com/wallpaper/698/472/876/female-workout-fitness-gym-wallpaper-preview.jpg)"
   listCaseP.innerHTML = "✨ Dia internacional da Mulher 👧 🦸‍♀️";
   listCaseLi.innerHTML = `O Dia Internacional da Mulher ou Dia da Mulher é comemorado anualmente em 8 de março, e não é considerado um feriado nacional.
   <br/><br/>
   Trata-se de uma celebração de conquistas sociais, políticas e econômicas das mulheres ao longo dos anos, sendo adotado pela Organização das Nações Unidas e, consequentemente, por diversos países
   <br/>
   Esta data é marcada por presentes simbólicos, como flores, em especial rosas, poemas ou frases, por exemplo.`
}
var sextaSanta = () => {
   backgroundMain.style.backgroundImage = "url(https://www.diocesejoinville.com.br/restrito/img/noticias/f0ad582fc6d03d93b14c33e03c09ce96.png)"
   listCaseP.innerHTML = "✨ Sexta Feira Santa 🎉 🙏";
   listCaseLi.innerHTML = `A Sexta-feira Santa, também chamada de Sexta Feira da Paixão, é a sexta-feira que ocorre antes do domingo de Páscoa. Neste dia, os cristãos relembram a morte de Jesus Cristo.
   <br/><br/>
   Embora não seja um feriado federal, os municípios costumam declarar a Sexta-feira Santa como um feriado municipal, conforme a Lei n.º 9.093, de 12 de setembro de 1995.
   <br/><br/>
   Trata-se de uma comemoração móvel, que sucede o fim da Quaresma, período de penitência de 40 dias que começa a seguir do Carnaval, na Quarta-feira de cinzas.
   <br/>
   O dia da Paixão de Cristo é o primeiro dos três dias que celebram a ressurreição do Messias que, de acordo com a doutrina cristã, morreu na cruz para salvar os seres humanos dos seus pecados.`;
}

var pascoa = () => {
   backgroundMain.style.backgroundImage = "url(https://images4.alphacoders.com/684/thumb-1920-684500.jpg)"
   listCaseP.innerHTML = "✨ Pascoa 🐇 🥚";
   listCaseLi.innerHTML = `A Páscoa é uma celebração cristã comemorada anualmente ao domingo, conhecido como Domingo de Páscoa. É uma festa móvel, ou seja, a data de comemoração varia dependendo do ano. Porém, por norma, costuma acontecer entre os dias 22 de março e 25 de abril.
   <br/><br/>
   Esta é considerada uma das festas mais importantes para os cristãos, pois celebra a ressurreição de Jesus Cristo. Ela marca o fim da chamada Semana Santa, que se inicia no Domingo de Ramos e termina no domingo seguinte.
   <br/>
   Durante toda a semana há procissões e cerimônias especiais, sobretudo na quinta e na sexta-feira, conhecida como Sexta-feira Santa ou Sexta-Feira da Paixão (que marca a morte de Cristo na cruz). É no Sábado de Aleluia que é proclamada a ressurreição.`
}
var tiradentes = () => {
   backgroundMain.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/1/14/Resposta_de_Tiradentes.jpg)"
   listCaseP.innerHTML = "✨ Tiradentes 🦷 🚩";
   listCaseLi.innerHTML = `O Dia de Tiradentes é comemorado em 21 de abril, e é considerado um feriado nacional no Brasil.
   <br/><br>
   Esta data homenageia a figura do herói nacional Joaquim José da Silva Xavier, popularmente conhecido por “Tiradentes” (referência ao seu ofício de dentista).
   <br/>
   A celebração desta data é importante porque Tiradentes é considerado um brasileiro que lutou pela independência de Minas Gerais do domínio dos portugueses.
   <br/></br>
   Tiradentes foi um dentista, comerciante, minerador, militar e ativista político brasileiro, e atuava na época do Brasil Colonial nas capitanias de Minas Gerais e Rio de Janeiro.

   Tiradentes foi reconhecido como herói nacional e um mártir da Inconfidência Mineira, quando a República brasileira foi instalada através de um golpe em 15 de novembro de 1889.
   <br/><br/>
   Um dos primeiros atos do novo governo foi transformar a data em que ele foi executado, 21 de abril, em uma festa cívica a ser celebrada nos quartéis.

   Tiradentes é considerado um grande líder por ter lutado por seu povo e seus ideais, apesar de ser o mais humilde entre todos os membros do movimento, Tiradentes foi quem assumiu as maiores responsabilidades.`
}

var decBr = () => {
   backgroundMain.style.backgroundImage = "url(https://c.wallhere.com/photos/ae/37/video_games_ship-151611.jpg!d)"
   listCaseP.innerHTML = "✨ Descobrimento do Brasil 🖌 🇧🇷";
   listCaseLi.innerHTML = `O Dia do Descobrimento do Brasil é comemorado em 22 de abril, e não é um feriado nacional. Esta data marca a chegada dos navegadores portugueses ao território brasileiro pela primeira vez no ano de 1500.
   <br/><br/>
   Oficialmente, o descobridor do Brasil foi Pedro Álvares Cabral, mas o termo é usado apenas como referência, pois quando os portugueses chegaram o país já era habitado por várias comunidades indígenas. Estima-se que existiam no Brasil aproximadamente cinco milhões de índios naquela época.
   <br/><br/>
   O encontro entre os portugueses e os índios foi um verdadeiro choque cultural. Eles ficaram curiosos com os objetos, animais, metais e com as roupas.
   <br/>
   No início, o objetivo dos portugueses era catequizar os índios, mas depois iniciou-se o processo de colonização do Brasil e extração das matérias-primas do país, como o pau-brasil, por exemplo, fazendo com que a comunidade indígena fosse fortemente escravizada.`
}
var indio = () => {
   backgroundMain.style.backgroundImage = "url(https://s1.1zoom.me/b5243/989/Masks_War_bonnet_Dmitry_Arhar_Indians_Glance_521878_1920x1080.jpg)"
   listCaseP.innerHTML = "✨ Dia do indio 🏹";
   listCaseLi.innerHTML = `O Dia do Índio é celebrado anualmente em 19 de abril no Brasil.
   <br/><br/>
   Esta importante data serve para lembrar e reforçar a identidade do povo indígena brasileiro e americano na história e cultura atual.
   <br/><br/>
   Antes da chegada dos primeiros europeus em terras americanas, todos os países que formam este continente eram amplamente povoados por grandes nações indígenas. Infelizmente, a ganância e a crueldade humana fizeram com que muitas tribos fossem totalmente dizimadas e grande parte da cultura indígena foi esquecida.
   <br/><br/>
   Na tentativa de preservar as tradições e identidade dos indígenas, o Dia do Índio surgiu para não deixar as novas gerações esquecerem das verdadeiras raízes que formam o povo brasileiro.
   <br/><br/>
   A Funai - Fundação Nacional do Índio - é uma das principais instituições brasileiras que se dedica a defender a cultura e os direitos dos povos indígenas do país.
   <br/>
   Atualmente, ainda está em curso um violento ataque a essas nações, com tristes e constantes episódios de assassinatos de populações e líderes indígenas.`
}
var trabalho = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/374861/pexels-photo-374861.jpeg)"
   listCaseP.innerHTML = "✨ Dia do Trabalho 🗜 🔩";
   listCaseLi.innerHTML = `O Dia do Trabalho ou Dia do Trabalhador é comemorado anualmente em 1º de maio em diversos países do mundo.
   <br/><br/>
   O Dia do Trabalho é feriado nacional no Brasil, em Portugal, Rússia, França, Espanha, Argentina, entre outras nações.
   <br/><br/>
   Esta data representa o momento que os empregados e as empresas têm para refletir sobre as legislações trabalhistas, normas e demais regras de trabalho.
   <br/>
   Nesta data também é homenageada a luta dos trabalhadores que reivindicaram por melhores condições trabalhistas. Graças à coragem e persistência desses trabalhadores, os direitos e benefícios atuais dos quais usufruímos foram conquistados.`
}

var maes = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/4149012/pexels-photo-4149012.jpeg)"
   listCaseP.innerHTML = "✨ Dia Das Mães 🤰 🤱";
   listCaseLi.innerHTML = `O Dia das Mães é uma data móvel, ou seja, o dia a ser comemorado depende do ano, mas no Brasil é sempre no segundo domingo do mês de Maio. Em vários países é comemorado em outras datas, que vão desde março até dezembro.
   <br/><br/>
   O Dia das Mães é um dia para celebrar e agradecer a todas as mães pela dedicação, amor e carinho que dão aos seus filhos diariamente.
   <br/>
   É comum no Dia das Mães os filhos fazerem surpresas às suas mães, dando presentes ou organizando atividades que demonstrem toda a admiração que sentem por ela.`
}
var corpus = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/2081128/pexels-photo-2081128.jpeg)";
   listCaseP.innerHTML = "✨ Corpus Chtist 🎉 🧨";
   listCaseLi.innerHTML = `O Corpus Christi é uma comemoração religiosa celebrada sempre numa quinta-feira. É feriado apenas nos municípios que assim o determinam, uma vez que não é considerado feriado nacional.
   <br/><br>
   Esta data é celebrada anualmente 60 dias depois da Páscoa, sempre na segunda quinta-feira depois do Domingo de Pentecostes.
   <br/><br>
   Corpus Christi é feriado facultativo<br/><br/>
   No Brasil, o Corpus Christi é um feriado facultativo e pode ser municipal. Isso significa que cada município deve estabelecer, através de decreto, se naquele ano o Corpus Christi será ou não feriado.
   <br/>
   Grande parte dos governos municipais e estaduais também decretam ponto facultativo na sexta-feira que sucede o feriado de Corpus Christi.`
}
var namorados = () => {
   backgroundMain.style.backgroundImage = "url(https://burst.shopifycdn.com/photos/handing-coming-together-making-the-heart-symbol.jpg)"
   listCaseP.innerHTML = "✨ Dias dos Namorados 👩‍❤️‍💋‍👨 💕";
   listCaseLi.innerHTML = `
   O Dia dos Namorados é comemorado em 12 de junho no Brasil.
   <br/><br/>
   É muito comum nessa data a troca de cartões postais e presentes especiais entre namorados, que aproveitam para celebrar sua união e agradecer o companheirismo e a dedicação entre ambos durante o ano todo. Muitos casais viajam ou planejam um jantar especial.
   <br/><br/>
   Fora do Brasil, especialmente nos Estados Unidos e na Europa, o Dia dos Namorados é celebrado em 14 de fevereiro, data também conhecida como Dia de São Valentim (Valentine’s Day).
   <br/>
   Normalmente, nesta data os namorados expressam todo o amor e carinho que sentem um pelo outro com declarações de amor, poemas, contos, frases e mensagens.`
}

var revConstitucionalista = () => {
   backgroundMain.style.backgroundImage = "url(https://cronicasmacaenses.files.wordpress.com/2012/07/sp-revolucao32-11.jpg)"
   listCaseP.innerHTML = "✨ Dia da Revolução Constitucionalista ⚔️";
   listCaseLi.innerHTML = `
   O Dia da Revolução Constitucionalista é comemorado anualmente em 9 de julho e considerado feriado estadual em São Paulo.
   <br/><br/>
   Também conhecido por Dia da Revolução e do Soldado Constitucionalista, esta data é uma homenagem ao movimento contra ditadura de Getúlio Vargas, realizado em 1932 pelos paulistas.
   <br/><br/>
   Vargas toma o poder com a Revolução de 1930, apoiado pelos paulistas, e outros estados. No entanto, o tempo passava e o novo dirigente não convocava eleições para a nova Assembleia Constituinte. Sentindo-se traídos, representantes do Exército, estacionados em São Paulo, e políticos paulistas, resolveram se rebelar.
   <br/><br/>
   Veja abaixo exemplos de cartazes utilizados para convocar os jovens a lutarem.`
}

var pais = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/2133/man-person-cute-young.jpg)"
   listCaseP.innerHTML = "✨ Dia dos Pais 👩‍👧‍👦 👩‍👧‍👦";
   listCaseLi.innerHTML = `
   O Dia dos Pais é comemorado anualmente no segundo domingo de agosto no Brasil.
   <br/><br/>
   Nesta data, os filhos homenageiam e agradecem aos papais toda a companhia, suporte e carinho recebido ao longo de suas vidas.
   <br/><br/>
   Normalmente, neste dia, com presentes, mensagens, beijos e abraços, os filhos e filhas presenteiam seus pais, demonstrando todo o amor que sentem por eles.`
}

var folclore = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/2354073/pexels-photo-2354073.jpeg)"
   listCaseP.innerHTML = "✨ Dia do Flolclore 🥁 🎭";
   listCaseLi.innerHTML = `
   22 de agosto é o dia do folclore, comemoração que recorda o dia em que a palavra folclore foi usada pela primeira vez no ano 1846. Quem o fez foi o pesquisador britânico William John Thoms (1803-1885), que uniu as palavras inglesas folk (que significa “povo”) e lore (que quer dizer “conhecimento”).
   <br/><br/>
   Assim, folclore ganha o significado literal de "conhecimento do povo" ou "aquilo que o povo faz".`
}

var soldado = () => {
   backgroundMain.style.backgroundImage = "url(https://images3.alphacoders.com/113/thumb-1920-11385.jpg)"
   listCaseP.innerHTML = "✨ Dia do Soldado 👨‍✈️ 👮‍♀️";
   listCaseLi.innerHTML = `
   O Dia do Soldado é comemorado anualmente em 25 de agosto no Brasil.
   <br/><br/>
   Esta data celebra a atividade exercida pelos soldados do Exército Brasileiro, que trabalham e lutam pela proteção da Nação.
   <br/><br/>
   Origem do Dia do Soldado
   Em 1923, no dia 25 de agosto, passou a ser comemorado o Dia do Soldado em homenagem ao Marechal Luís Alves de Lima e Silva, mais conhecido como Duque de Caxias, e que se tornou o patrono do Exército Brasileiro.`
}

var independenciaBr = () => {
   backgroundMain.style.backgroundImage = "url(https://images7.alphacoders.com/516/thumb-1920-516124.png)"
   listCaseP.innerHTML = "✨ Dia da independencia do Brasil 🏞️ 🇧🇷";
   listCaseLi.innerHTML = `
   A Independência do Brasil é o feriado em que se celebra a emancipação brasileira do reino de Portugal.
   <br/><br/>
   O Dia da Independência do Brasil, ou Dia da Pátria, se comemora no dia 7 de setembro de 1822, data que ficou conhecida pelo episódio do "Grito do Ipiranga".
   <br/><br/>
   Às margens do riacho Ipiranga, Dom Pedro, príncipe regente na época, foi quem proclamou a independência do Brasil, ordenando aos soldados que o acompanhavam que jogassem fora os símbolos portugueses que levavam nos uniformes.
   <br/><br/>
   Em seguida, gritou "independência ou morte" e a partir desse momento, simbolicamente, o Brasil não era mais uma colônia de Portugal.`
}
var arvore = () => {
   backgroundMain.style.backgroundImage = "url(https://images2.alphacoders.com/462/thumb-1920-462971.jpg)"
   listCaseP.innerHTML = "✨ Dia da Arvore ☘️ 🌳";
   listCaseLi.innerHTML = `
   O Dia da Árvore é comemorado no dia 21 de Setembro.
   <br/><br/>
   Esta data foi escolhida por anteceder o início da primavera no Hemisfério Sul, que dependendo do ano pode ocorrer entre os dias 22 e 23 de setembro.
   <br/><br/>
   O objetivo deste dia é conscientizar sobre a importância da preservação das árvores e das florestas, incentivando a proteção do meio ambiente com atitudes que trazem benefícios à natureza.`
}
var primavera = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg)"
   listCaseP.innerHTML = "✨ Inicio da Primavera 🌺 🍄";
   listCaseLi.innerHTML = `
   O Início da Primavera 2021 acontece às 16h21 do dia 22 de setembro de 2021.
   <br/><br/>
   A primavera começa sempre no dia 22 ou 23 de setembro - quando termina o inverno - e acaba em 21 ou 22 de dezembro, dando lugar ao verão.
   <br/><br/>
   Características da Primavera
   No Hemisfério Sul, onde está localizado o Brasil, a primavera é caracterizada pelo desabrochar das flores, chuvas e pelo aquecimento da temperatura.
   <br/><br/>
   Nesta estação, o clima é mais ameno, ou seja, não tão quente quanto no verão, e nem muito frio como no inverno.
   <br/><br/>
   Essa época é muito apreciada por boa parte das pessoas, pois a natureza fica mais colorida com flores de variados tipos. Por conta disso, é um período conhecido também como "estação das flores".`
}
var crianca = () => {
   backgroundMain.style.backgroundImage = "url(https://images6.alphacoders.com/788/thumb-1920-788789.jpg)"
   listCaseP.innerHTML = "✨ Dia das Crianças 👶";
   listCaseLi.innerHTML = `
   O Dia das Crianças é comemorado anualmente em 12 de outubro no Brasil.
   <br/>
   Esta data celebra os direitos das crianças e adolescentes, ajudando a conscientizar as pessoas (os pais, em especial) sobre os cuidados necessários durante esta fase da vida.
   <br/><br/>
   Tradicionalmente, no Brasil, no Dia das Crianças os adultos costumam oferecer presentes ou proporcionar atividades especiais e de entretenimento para os mais jovens.
   <br/><br/>
   Em alguns países, como Portugal, por exemplo, as crianças são homenageadas em 1º de junho, data conhecida como Dia Internacional da Criança.`
}
var srAparecida = () => {
   backgroundMain.style.backgroundImage = "url(https://images7.alphacoders.com/543/thumb-1920-543422.jpg)"
   listCaseP.innerHTML = "✨ Nossa Senhora Aparecida 🪆";
   listCaseLi.innerHTML = `O Dia de Nossa Senhora Aparecida é comemorado em 12 de outubro e é considerado feriado nacional no Brasil.
   <br/><br/>
   Esta é a data que homenageia a padroeira do país, que também é um dos principais santos do catolicismo.
   <br/><br/>
   Origem da Data
   O Dia de Nossa Senhora Aparecida foi oficialmente instituído a partir da Lei nº 6.802, de 30 de junho de 1980.
   <br/><br/>
   O dia 12 de outubro foi escolhido para o feriado, pois a data já abrigava outros fatos importantes, como a chegada de Cristóvão Colombo às Américas, em 12 de outubro de 1942, e no ano de 1822, no mesmo dia, após a independência do Brasil, a nação ganhou seu primeiro imperador, Dom Pedro I.`
}

var proff = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg)"
   listCaseP.innerHTML = "✨ Dia do Professor 👨‍🏫 👩‍🏫";
   listCaseLi.innerHTML = `O Dia dos Professores é comemorado no Brasil anualmente em 15 de outubro.
   <br/>
   A data foi criada com o intuito de homenagear esses profissionais que dedicam suas vidas à transmissão do conhecimento e ao desenvolvimento da educação no nosso país.`
}

var Halloween = () => {
   backgroundMain.style.backgroundImage = "url(https://images6.alphacoders.com/874/thumb-1920-874542.jpg)"
   listCaseP.innerHTML = "✨ Dia de Bruxa - Halloween 🎃 🧙‍♀️";
   listCaseLi.innerHTML = `O Dia das Bruxas, ou Halloween, é comemorado anualmente em 31 de outubro.
   <br/>
   Mesmo sendo considerado parte de uma cultura tipicamente americana e irlandesa, o Dia das Bruxas se espalhou por todo o mundo.
   <br/>
   Assim, adaptou-se através do sincretismo das superstições e lendas de cada região com o conceito moderno norte-americano do Halloween, em que as pessoas vestem fantasias assustadoras e as crianças saem de porta em porta pedindo doces.`
}

var finados = () => {
   backgroundMain.style.backgroundImage = "url(https://images.pexels.com/photos/720730/pexels-photo-720730.jpeg)"
   listCaseP.innerHTML = "✨ Finados ⚰️ ✝️";
   listCaseLi.innerHTML = `O Dia de Finados ou Dia dos Mortos é celebrado anualmente em 2 de novembro. No Brasil, esta data é um feriado nacional, instituído pela Lei nº 10.607, de 19 de dezembro de 2002.
   <br/>
   A celebração de Finados é muito importante para algumas religiões, principalmente para os católicos, pois se presta homenagem a todos os entes queridos que já morreram.
   <br/>
   Nesta data, o movimento nos cemitérios é intenso, pois muitas pessoas vão deixar flores e fazer orações nos túmulos de familiares ou amigos que já partiram.`
}

var procRepublica = () => {
   backgroundMain.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_by_Benedito_Calixto_1893.jpg/1280px-Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_by_Benedito_Calixto_1893.jpg)"

   listCaseP.innerHTML = "✨ Proclamação da Republica 🇧🇷 📜";
   listCaseLi.innerHTML = `O Dia da Proclamação da República do Brasil é comemorado anualmente dia 15 de novembro. Esta data foi instituída como feriado nacional pela Lei nº 662, de 06 de abril de 1949.
   <br/><br/>
   A Proclamação da República do Brasil foi realizada em 15 de novembro de 1889.
   <br/><br/>
   O evento aconteceu no Rio de Janeiro, a então capital do país, por um grupo de militares liderado pelo Marechal Deodoro da Fonseca, que deu um golpe de estado no Império.
   <br/><br/>
   Marechal Deodoro da Fonseca instituiu uma república provisória e, posteriormente, se consagrou o primeiro presidente do Brasil.
   <br/><br/>
   O Brasil era o único país independente do continente americano governado por um imperador. A independência do país havia sido conquistada em 7 de setembro de 1822, através da assinatura do decreto por Dona Leopoldina e da ação de Pedro I.`
}

var concienciaN = () => {
   backgroundMain.style.backgroundImage = "url(https://s2.static.brasilescola.uol.com.br/img/2019/11/movimento-negro.jpg)"
   listCaseP.innerHTML = "✨ Dia Nacional da Conciência Negra 👩‍🦱 🧑‍🦱";
   listCaseLi.innerHTML = `O Dia da Consciência Negra, ou Dia de Zumbi, é comemorado em 20 de novembro em todo o país. A data homenageia Zumbi, um pernambucano que nasceu livre, mas foi escravizado aos seis anos de idade.
   <br/><br/>
   Mais tarde ele voltaria para sua terra natal e seria líder do Quilombo dos Palmares, morrendo assassinado em 20 de novembro de 1695. Assim, Zumbi representa a luta dos negros e a consciência negra.
   <br/><br/>
   O que é consciência negra?<br/><br/>
   Consciência negra é o sentimento que os negros apresentam relativamente a sua história e a sua herança cultura, o que encoraja a luta negra contra a discriminação.
   <br/><br/>
   Por esse motivo, o objetivo do Dia da Consciência Negra é fazer uma reflexão sobre a importância do povo e da cultura africana no Brasil. Também serve para analisarmos o impacto que os negros tiveram no desenvolvimento da identidade cultural brasileira, o que podemos constatar na música, na política, na religião, na gastronomia e entre várias outras áreas profundamente influenciadas pela cultura negra.`
}

var black = () => {
   backgroundMain.style.backgroundImage = "url(https://wallpapercave.com/wp/wp2292469.jpg)"
   listCaseP.innerHTML = "✨ blackfride 📉 📢";
   listCaseLi.innerHTML = `O Dia da Black Friday é comemorada anualmente em novembro, um dia depois do Dia de Ação de Graças. A data é conhecida mundialmente como uma ação promocional que oferece grandes descontos em diversos produtos de várias lojas do comércio.
   <br/><br/>
   O sucesso da Black Friday é enorme! As lojas ficam superlotadas e as mercadorias se esgotam muito rapidamente, por isso formam-se enormes filas às portas das lojas desde as primeiras horas da madrugada que antecede ao evento.
   <br/><br/>
   É interessante notar que muitos países não celebram o Dia de Ação de Graças, porém, a Black Friday fez sucesso rapidamente devido às oportunidades no mercado para os consumidores, que buscam grandes descontos, e para os lojistas, que querem aumentar as vendas.
   <br/><br/>
   No Canadá, por exemplo, a data foi estabelecida no país após perceberem que muitas pessoas viajavam para os Estados Unidos em busca de promoções nesse período.`
}

var natal = () => {
   backgroundMain.style.backgroundImage = "url(https://images2.alphacoders.com/205/thumb-1920-205480.jpg)"
   listCaseP.innerHTML = "✨ Natal 🎅 🎑";
   listCaseLi.innerHTML = `O Natal é comemorado anualmente em 25 de dezembro. A palavra natal significa “nascimento” e celebra o dia em que o Menino Jesus nasceu.
   <br/><br/>
   Esta é uma celebração cristã, mas que com o passar do tempo foi disseminada para fora do âmbito religioso.
   <br/><br/>
   Atualmente, o Natal é feriado em quase todos os países do mundo. Independente da religião, praticamente todas as pessoas celebram esta festividade a sua maneira.
   <br/><br/>
   As festividades do Natal, no Brasil, começam na véspera, dia 24 de dezembro, quando a família se reúne para a ceia e trocam presentes e mensagens de afeto.`
}

// Delete with Trash icon
function deleteDate() {
   let li = listDate.querySelector("li");
   listDate.removeChild(li);
}