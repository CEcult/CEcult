/* ================================================================
   CECULT+ — DATA & LOGIC
   Toda a lógica e dados do portal cultural
   ================================================================ */

// ===== CATEGORIES DATA =====
const CATEGORIES = [
  {
    id: 1,
    name: "Literatura & Cordel",
    emoji: "📜",
    color: "linear-gradient(135deg, #4A2800, #8B4A00)",
    tags: ["artes", "patrimônio", "saberes"],
    badge: "Patrimônio",
    desc: "Poesia popular, folhetos e a tradição oral que atravessa gerações.",
    items: "60+ autores",
    content: {
      origin: "A literatura de cordel no Ceará tem suas raízes na tradição oral ibérica, trazida pelos portugueses no período colonial e profundamente ressignificada pela cultura nordestina. Os primeiros folhetos impressos surgem no final do século XIX, com forte concentração em Juazeiro do Norte, que se tornou polo editorial do gênero.",
      context: "O cordel cumpre funções sociais fundamentais: informa, critica, entretém e preserva valores. Durante séculos, foi o principal meio de comunicação de massa nas comunidades rurais do Ceará, circulando em feiras, romarias e eventos religiosos. Os folheteiros declamavam suas obras atraindo multidões.",
      significance: "Reconhecida pelo IPHAN como Patrimônio Cultural Imaterial do Brasil em 2018, a literatura de cordel é mais do que arte — é documento histórico, arquivo social e instrumento de resistência cultural. No Ceará, ela dialoga diretamente com a religiosidade popular, o cangaço e a seca.",
      examples: "Patativa do Assaré (Antônio Gonçalves da Silva, 1909–2002), natural de Assaré-CE, é o maior nome da poesia sertaneja cearense. Seu poema 'A Triste Partida' tornou-se hino dos retirantes nordestinos. João Melchíades Ferreira, Leandro Gomes de Barros e Rodolfo Coelho Cavalcante também são referências fundamentais.",
      impact: "A produção cordelista cearense movimenta um mercado cultural significativo, com centros como a Academia Brasileira de Literatura de Cordel e o Museu da Cultura Cearense preservando acervos. Em Juazeiro do Norte, o cordel faz parte de circuitos turísticos que atraem pesquisadores e visitantes internacionais.",
      curiosidades: "O nome 'cordel' vem da prática portuguesa de pendurar os folhetos em cordas para venda. No Brasil, a expressão 'literatura de cordel' foi criada por pesquisadores para designar o gênero, enquanto no Nordeste os próprios autores preferem chamar de 'folheto'. A xilogravura que ilustra as capas é ela mesma uma arte reconhecida pelo IPHAN.",
      quote: { text: "Sou filho desse sertão, que as pedras faz engolir, mas que às vezes não tem água nem pra uma criança sorrir.", author: "Patativa do Assaré", context: "Poeta sertanejo, Assaré-CE" },
      highlights: [
        { icon: "📅", label: "Origem", value: "Séc. XIX" },
        { icon: "🏅", label: "IPHAN", value: "Pat. Imaterial 2018" },
        { icon: "✍️", label: "Autores CE", value: "200+" },
        { icon: "📚", label: "Folhetos", value: "Milhares catalogados" }
      ],
      tags: ["Cordel", "Patativa do Assaré", "Juazeiro", "Xilogravura", "Patrimônio Imaterial", "Repente"]
    }
  },
  {
    id: 2,
    name: "Cultura Indígena",
    emoji: "🪶",
    color: "linear-gradient(135deg, #1A3A1A, #2A5A2A)",
    tags: ["patrimônio", "saberes"],
    badge: "Povos Originários",
    desc: "Etnias, saberes e cosmologias dos povos originários do Ceará.",
    items: "12 etnias",
    content: {
      origin: "Antes da chegada dos portugueses, o território que hoje é o Ceará era habitado por diversas etnias indígenas — Tremembé, Tabajara, Potiguara, Cariri, Anacé, entre outras. Os Kariri, que deram nome à região do Cariri, possuíam organização social complexa e rituais elaborados.",
      context: "A colonização do Ceará foi especialmente violenta com os povos indígenas. As guerras de extermínio dos séculos XVII e XVIII, como a Guerra dos Bárbaros (1683–1713), dizimaram populações inteiras. Os sobreviventes foram aldeados e tiveram suas culturas sistematicamente suprimidas.",
      significance: "Apesar do violento processo de colonização, a presença indígena é indelével na cultura cearense: na toponímia (Itapipoca, Canindé, Quixadá — todos nomes de origem tupi ou kariri), na culinária (beiju, mingau, tapioca), nas ervas medicinais e no modo de lidar com o sertão.",
      examples: "Os Tremembé do litoral norte são famosos pelo ritual do Torém, dança-cerimônia reconhecida como patrimônio imaterial cearense. Os Tapeba em Caucaia e os Anacé em São Gonçalo do Amarante mantêm práticas culturais vivas, incluindo rituais, medicina tradicional e artesanato característico.",
      impact: "O reconhecimento dos direitos territoriais indígenas no Ceará tem crescido desde os anos 1990. Há hoje 14 etnias reconhecidas pela Funai no estado, com lutas contínuas por demarcação de terras. O movimento de 'etnogênese' — povos que reafirmam identidades indígenas — é um fenômeno importante no Ceará.",
      curiosidades: "O nome 'Ceará' é de origem tupi e provavelmente significa 'canta a jandaia' (pássaro ararajuba) ou 'rio dos jacarés'. Os Kariri possuíam uma língua própria, o Quiri, que foi documentada pelo padre Luis Vicêncio Mamiani no século XVIII — um dos primeiros vocabulários indígenas do Brasil.",
      quote: { text: "Nossa terra, nossa memória, nosso futuro. O Torém não é só dança — é nosso jeito de dizer que ainda existimos.", author: "Liderança Tremembé", context: "Almofala, litoral norte do Ceará" },
      highlights: [
        { icon: "🏘️", label: "Etnias CE", value: "14 reconhecidas" },
        { icon: "🪶", label: "Ritual", value: "Torém (Tremembé)" },
        { icon: "📍", label: "Território", value: "Costa e sertão" },
        { icon: "🌿", label: "Patrimônio", value: "Torém — IPHAN" }
      ],
      tags: ["Tremembé", "Kariri", "Tapeba", "Torém", "Funai", "Territórios Indígenas"]
    }
  },
  {
    id: 3,
    name: "Cultura Afrocearense",
    emoji: "🥁",
    color: "linear-gradient(135deg, #3A1A00, #6A2A00)",
    tags: ["patrimônio", "saberes"],
    badge: "Quilombola",
    desc: "Resistência, espiritualidade e contribuições africanas na identidade cearense.",
    items: "38 comunidades",
    content: {
      origin: "A presença africana no Ceará começa no século XVII com o tráfico escravizado. O Ceará foi palco de intenso fluxo de africanos escravizados vindos principalmente da África Ocidental (Iorubá, Fon, Ewe) e Angola. Em 1884, Fortaleza tornou-se a primeira capital brasileira a abolir o tráfico escravizado.",
      context: "A abolição precoce do tráfico em Fortaleza (1884) antecedeu a Lei Áurea em 4 anos, graças à ação de jangadeiros — liderados pelo Chico da Matilde — que se recusaram a transportar escravizados no porto. Este ato de resistência tem profundo significado histórico e cultural.",
      significance: "A cultura afrocearense impregna múltiplas dimensões da vida cotidiana: a religiosidade (Candomblé, Umbanda), a culinária (acarajé, mungunzá, pamonha), a música (maracatu, afoxé), as linguagens corporais e as práticas de cura tradicional. Há 38 comunidades quilombolas certificadas no Ceará.",
      examples: "A Comunidade do Cumbe (Aracati), Sítio Veiga (Quixadá), Serra das Matas (Pentecoste) e o Quilombo do Boqueirão são exemplos de comunidades que mantêm tradições culturais africanas. Em Fortaleza, os terreiros de Candomblé como Ilê Asé Ojú Onirê guardam práticas litúrgicas seculares.",
      impact: "O movimento afro-cearense conquistou importante visibilidade nas últimas décadas: cotas universitárias, políticas de reconhecimento quilombola, Dia da Consciência Negra como feriado. Na cena cultural, artistas como Titane, bandas de afoxé e grupos de maracatu levam a cultura afro-cearense a palcos nacionais.",
      curiosidades: "O Ceará foi o primeiro estado a abolir o tráfico (1884), mas a escravidão persistiu no campo ainda por anos. A figura do 'jangadeiro negro' é pouco reconhecida: grande parte dos jangadeiros do litoral cearense era de origem africana, e foram eles os protagonistas do ato histórico de 1884.",
      quote: { text: "A gente não precisa ir à África pra encontrar a África. Ela está aqui, no tambor, no dendê, no axé que rola de geração em geração.", author: "Ialorixá do Ilê Asé Ojú Onirê", context: "Fortaleza, CE" },
      highlights: [
        { icon: "🏡", label: "Quilombos", value: "38 certificados" },
        { icon: "📅", label: "Abolição local", value: "1884 (Fortaleza)" },
        { icon: "🥁", label: "Manifestação", value: "Maracatu, Afoxé" },
        { icon: "⚖️", label: "Ato histórico", value: "Jangadeiros, 1884" }
      ],
      tags: ["Quilombola", "Candomblé", "Maracatu", "Afoxé", "Jangadeiros", "Resistência"]
    }
  },
  {
    id: 4,
    name: "Religiosidade Popular",
    emoji: "🕯️",
    color: "linear-gradient(135deg, #2A1840, #1A0A28)",
    tags: ["patrimônio", "festas"],
    badge: "Devoção",
    desc: "Crenças, romarias, santos e sincretismo na espiritualidade cearense.",
    items: "15+ romarias",
    content: {
      origin: "A religiosidade popular cearense é fruto do encontro entre o catolicismo ibérico, as espiritualidades indígenas e as religiões de matriz africana. Esse sincretismo criou formas únicas de devoção, como o culto a santos populares, as romarias e as práticas de cura espiritual.",
      context: "O catolicismo popular no Ceará tem como figura central o Padre Cícero Romão Batista (1844–1934), de Juazeiro do Norte. Beatificado na memória popular muito antes de qualquer reconhecimento oficial, ele é venerado por milhões de romeiros de todo o Nordeste. Juazeiro do Norte recebe cerca de 2,5 milhões de romeiros por ano.",
      significance: "A romaria ao Juazeiro do Norte é um dos maiores eventos religiosos da América Latina. Além de Padre Cícero, santuários como Nossa Senhora de Fátima (Canindé) e Nossa Senhora das Dores (Maranguape) são polos de romaria que movimentam economias locais e mantêm redes de solidariedade.",
      examples: "O Canindé é o maior polo de peregrinação a São Francisco de Assis no Brasil. Em Juazeiro, as festas do Padre Cícero (20 de janeiro e 24 de março) reúnem romeiros de todo o país. O fenômeno das 'milagreiras' — mulheres que lideram redes de oração e cura popular — é pouco estudado mas amplamente presente.",
      impact: "As romarias cearenses têm impacto econômico direto de centenas de milhões de reais anuais. Mais importante é o papel social: as redes de romeiros formam sistemas de solidariedade que transcendem família e território, conectando comunidades sertanejas dispersas por todo o Brasil.",
      curiosidades: "A Igreja Católica cassou as ordens sacerdotais do Padre Cícero em 1916, após o polêmico 'milagre da hóstia'. Apesar disso, a devoção popular nunca diminuiu. Apenas em 2015 o Vaticano levantou a suspensão, e seu processo de beatificação oficial avança. Há mais estátuas do Padre Cícero no Nordeste do que de qualquer outro santo.",
      quote: { text: "Juazeiro não é uma cidade. É um coração que bate no peito de cada nordestino, seja onde ele estiver.", author: "Romeira de Juazeiro do Norte", context: "Registrado durante pesquisa de campo, 2019" },
      highlights: [
        { icon: "✝️", label: "Padre Cícero", value: "Juazeiro do Norte" },
        { icon: "👥", label: "Romeiros/ano", value: "2,5 milhões+" },
        { icon: "🕍", label: "Canindé", value: "S. Francisco Brasil" },
        { icon: "🌐", label: "Romarias CE", value: "15+ tradicionais" }
      ],
      tags: ["Padre Cícero", "Juazeiro", "Canindé", "Romaria", "Sincretismo", "Catolicismo Popular"]
    }
  },
  {
    id: 5,
    name: "Música Cearense",
    emoji: "🎸",
    color: "linear-gradient(135deg, #1A2A4A, #0A1A3A)",
    tags: ["artes"],
    badge: "Diversidade Sonora",
    desc: "Do forró à MPB, do repente ao rock — a riqueza musical do Ceará.",
    items: "Múltiplos gêneros",
    content: {
      origin: "A música cearense tem raízes profundas na cultura oral nordestina, com o repente e a cantoria como formas originárias. Com a industrialização e urbanização do século XX, novos gêneros emergiram, culminando no rico mosaico musical contemporâneo que vai do forró ao rap, do coco ao rock.",
      context: "O forró, gênero musical popularizado por Luiz Gonzaga (pernambucano de alma nordestina), foi profundamente abraçado e transformado pelos cearenses. No Ceará, surgiu o 'forró universitário' nas décadas de 1990 e 2000, com bandas como Mastruz com Leite e Calcinha Preta reinventando o gênero para audiências urbanas.",
      significance: "A cena musical de Fortaleza é reconhecida como uma das mais dinâmicas do Brasil. O Ceará produziu artistas de alcance nacional como Belchior, Fagner, Ednardo, Rodriguinho e o Pessoal do Ceará — movimento musical dos anos 1970 que misturava MPB, poesia e identidade nordestina com sofisticação artística.",
      examples: "Belchior (Antônio Carlos Belchior, Sobral, 1946–2017) é um dos maiores nomes da MPB brasileira. 'Como Nossos Pais', 'Amar e Mudar as Coisas' e 'Apenas um Rapaz Latino-Americano' são clássicos absolutos. Fagner, Ednardo e Amelinha completam o quarteto do 'Pessoal do Ceará', movimento que definiu a identidade musical nordestina na MPB.",
      impact: "O Ceará é atualmente polo de inovação musical com a cena de rap/hip-hop de Fortaleza, a música eletrônica, o reggae (forte no litoral) e festivais como o Largadão e o Rock in Rio Ceará. A Serra da Ibiapaba tem tradição de bandas de forró pé-de-serra que ainda tocam nos forrós tradicionais semanalmente.",
      curiosidades: "Luiz Gonzaga compôs 'Asa Branca', o 'hino não oficial' do Nordeste, em 1947 em parceria com Humberto Teixeira, cearense de Iguatu. A xaxada foi criada por Luiz Gonzaga especificamente para celebrar a resistência dos cangaceiros. A cantoria tem suas próprias regras de métrica poética — o 'galope à beira-mar' é uma das modalidades mais desafiantes.",
      quote: { text: "Já faz algum tempo que eu saí do sertão, mas o sertão nunca saiu de dentro de mim — ele vive na minha voz.", author: "Belchior", context: "Entrevista ao Jornal do Brasil, 1980" },
      highlights: [
        { icon: "🎵", label: "Pessoal do CE", value: "Anos 1970–80" },
        { icon: "🎙️", label: "Belchior", value: "Sobral, 1946–2017" },
        { icon: "🎺", label: "Forró", value: "Gênero nacional" },
        { icon: "🎤", label: "Cantoria", value: "Pat. Imaterial" }
      ],
      tags: ["Belchior", "Fagner", "Forró", "Repente", "MPB Cearense", "Cantoria", "Pessoal do Ceará"]
    }
  },
  {
    id: 6,
    name: "Festas Populares",
    emoji: "🎉",
    color: "linear-gradient(135deg, #3A2A00, #5A4000)",
    tags: ["festas", "patrimônio"],
    badge: "Tradição Viva",
    desc: "Juninas, bumba-meu-boi, reisados e a exuberância festiva cearense.",
    items: "50+ festividades",
    content: {
      origin: "As festas populares cearenses nascem da fusão de três matrizes: o calendário litúrgico católico português (Natal, Semana Santa, festas de santos), os ciclos agrícolas e naturais das tradições indígenas e africanas, e as comemorações cívicas que surgiram com a formação do estado. O resultado é um calendário festivo riquíssimo.",
      context: "O São João é, sem dúvida, a maior manifestação festiva do Ceará. Juazeiro do Norte, Guaramiranga e Fortaleza são os principais polos, mas praticamente todos os municípios têm sua festividade junina. A tradição do arraiá, da quadrilha junina e da comida típica concentra um rico sistema simbólico de identidade sertaneja.",
      significance: "As festas juninas no Ceará transcenderam sua origem religiosa para se tornarem expressão complexa de identidade regional. As quadrilhas juninas especialmente se tornaram verdadeiro fenômeno cultural e econômico: grupos que ensaiam durante meses, com figurinos elaborados, coreografias precisas e narrativas que valorizam a cultura nordestina.",
      examples: "O Festival de Quadrilhas Juninas de Juazeiro do Norte é considerado o maior do Brasil, reunindo grupos de todo o Nordeste. O Bumba-meu-boi, especialmente forte no litoral norte (Camocim, Acaraú), mistura elementos africanos, indígenas e europeus numa narrativa dramática sobre a morte e ressurreição de um boi. O Reisado celebra os Reis Magos com música, dança e teatro.",
      impact: "O turismo cultural das festas juninas movimenta centenas de milhões de reais no Ceará. Só o São João de Juazeiro reúne mais de 1 milhão de pessoas em seu auge. As quadrilhas juninas geraram uma cadeia econômica que inclui costureiras, bordadeiras, músicos, coreógrafos e professores especializados.",
      curiosidades: "A quadrilha junina brasileira pouco tem a ver com a square dance norte-americana da qual supostamente deriva. Ela é uma criação genuinamente brasileira que incorporou elementos do baião, do forró e de narrativas locais. No Ceará, grupos como Explosão do Forró competem com uniformes que custam mais de R$ 50.000 para o grupo inteiro.",
      quote: { text: "Quando a fogueira acende no São João, acende junto uma memória que nem a seca apaga.", author: "Mestre de quadrilha junina", context: "Barbalha, Cariri Cearense" },
      highlights: [
        { icon: "🎊", label: "São João", value: "Maior festa CE" },
        { icon: "🐂", label: "Bumba-boi", value: "Litoral Norte" },
        { icon: "👑", label: "Reisado", value: "Pat. Imaterial" },
        { icon: "💃", label: "Quadrilha", value: "Juazeiro polo" }
      ],
      tags: ["São João", "Quadrilha Junina", "Bumba-meu-boi", "Reisado", "Juazeiro", "Guaramiranga"]
    }
  },
  {
    id: 7,
    name: "Artesanato",
    emoji: "🏺",
    color: "linear-gradient(135deg, #5A3A10, #3A2008)",
    tags: ["patrimônio", "saberes"],
    badge: "Fazer à Mão",
    desc: "Rendas, cerâmicas, palhas e a maestria das mãos artesanais cearenses.",
    items: "20+ técnicas",
    content: {
      origin: "O artesanato cearense é um dos mais ricos e diversificados do Brasil, reflexo direto da multiplicidade de culturas que formaram o estado. Cada região desenvolveu técnicas específicas adaptadas aos recursos locais: palha de carnaúba no sertão, renda de bilro e renascença no Cariri, cerâmica no interior, bordado nas serras e cestas de cipó na Ibiapaba.",
      context: "O IBGE aponta o Ceará como um dos maiores polos artesanais do Brasil em faturamento. O Centro de Artesanato do Ceará (Ceart) apoia mais de 40.000 artesãos registrados no estado. A Casa do Artesão de Fortaleza e as feiras regionais são espaços fundamentais de comercialização e preservação dessas tradições.",
      significance: "O artesanato cearense está no cruzamento entre arte, cultura e economia. Para muitas famílias, especialmente no interior, é a principal fonte de renda. Para a cultura, é um repositório de saberes acumulados por gerações — técnicas, padrões, materiais que contam histórias de adaptação, criatividade e identidade.",
      examples: "A renda renascença do Cariri e a renda de bilro do litoral são reconhecidas pelo IPHAN. A família de Mestre Vitalino (Caruaru) influenciou profundamente a cerâmica do vale do Jaguaribe. A tapeçaria de Ipu, o labirinto de Itapajé e o bordado de Caridade são técnicas únicas em seus territórios. Nisia Floresta (nome artístico Cila de Icapuí) é referência na cestaria.",
      impact: "O artesanato cearense movimenta cerca de R$ 500 milhões anuais, segundo a Secretaria de Cultura. O mercado internacional absorve especialmente rendas e peças de cerâmica. O turismo artesanal cria rotas como o 'Roteiro do Artesanato' no Cariri que atraem compradores especializados de todo o mundo.",
      curiosidades: "A renda renascença distingue-se da renda de bilro por ser feita 'no ar', sem almofada de suporte. Cada ponto tem um nome específico — 'estrela', 'roseta', 'jangada' — que codifica geometria e tradição. Reconhecida pelo IPHAN em 2019, a técnica corre risco de desaparecimento pois poucas jovens escolhem aprendê-la.",
      quote: { text: "Cada ponto que eu dou na renda é um passo que aprendi com minha avó. E quando uma comprador segura essa renda, segura também a mão dela.", author: "Rendeira de Barbalha", context: "Ceará, Rota do Artesanato do Cariri" },
      highlights: [
        { icon: "🧵", label: "Renda Renascença", value: "IPHAN 2019" },
        { icon: "🏺", label: "Cerâmica", value: "Vale do Jaguaribe" },
        { icon: "👷", label: "Artesãos CE", value: "40.000+ registros" },
        { icon: "💰", label: "Mercado", value: "R$500M/ano" }
      ],
      tags: ["Renda Renascença", "Renda de Bilro", "Cerâmica", "Cestaria", "IPHAN", "Ceart"]
    }
  },
  {
    id: 8,
    name: "Culinária Cearense",
    emoji: "🍲",
    color: "linear-gradient(135deg, #3A1A0A, #5A2A10)",
    tags: ["saberes"],
    badge: "Sabores do Sertão",
    desc: "Da carne-de-sol ao baião-de-dois, a riqueza gastronômica do Ceará.",
    items: "100+ pratos típicos",
    content: {
      origin: "A culinária cearense é resultado da fusão de três matrizes alimentares: a cozinha indígena (beiju, tapioca, macaxeira, milho), a cozinha africana (feijão de corda, azeite de dendê, temperos) e a cozinha portuguesa (carne seca, bacalhau, doçaria conventual). O clima semi-árido determinou técnicas únicas de conservação como a carne-de-sol e o charque.",
      context: "A carne-de-sol cearense diferencia-se do charque gaúcho por ser conservada com menos sal e por período mais curto, resultando numa textura úmida e sabor mais delicado. Quando acompanhada de manteiga de garrafa e queijo coalho, forma a base da culinária sertaneja que influenciou toda a gastronomia brasileira.",
      significance: "A culinária cearense ganhou projeção nacional e internacional com chefs como Chico Limitão, Karoline Araújo e Leandro Diniz, que reinterpretam ingredientes regionais em alta gastronomia. O baião-de-dois (feijão de corda com arroz e queijo coalho) foi eleito um dos pratos mais representativos da culinária brasileira.",
      examples: "Pratos emblemáticos: baião-de-dois, carne-de-sol com aipim e manteiga de garrafa, caldinho de feijão, bode ao molho, buchada de bode, peixe-boi ensopado (litoral), moqueca cearense com coco e coentro. Doces: rapadura, cajuína (bebida única do Ceará), mel de abelha jandaíra, queijo coalho defumado.",
      impact: "O enoturismo gastronômico cearense cresceu 200% na última década. Fortaleza é reconhecida como polo gastronômico do Nordeste, com mais de 3.000 restaurantes e eventos como o Festival Gastronômico de Guaramiranga que atraem gourmets de todo o Brasil. A cajuína cearense tem indicação geográfica reconhecida.",
      curiosidades: "A cajuína é uma bebida exclusiva do Ceará: suco de caju clarificado e sem tanino, obtido por processo artesanal de decantação. Camões a ela não se referia, mas Rachel de Queiroz, sim — ela aparece em 'O Quinze' como símbolo da hospitalidade sertaneja. A manteiga de garrafa tem nome científico: é ghee, clarificada sem o processo indiano, descoberta independentemente pelos sertanejos nordestinos.",
      quote: { text: "Na mesa cearense tem a história de três continentes: a farinha do índio, o feijão do africano e o queijo do português. Isso é a nossa identidade.", author: "Chef Leandro Diniz", context: "Entrevista ao Guia Gastronômico do Ceará" },
      highlights: [
        { icon: "🥩", label: "Carne-de-sol", value: "Técnica única CE" },
        { icon: "🌾", label: "Baião-de-dois", value: "Ícone nacional" },
        { icon: "🥤", label: "Cajuína", value: "I.G. Ceará" },
        { icon: "🧀", label: "Queijo Coalho", value: "Patrimônio CE" }
      ],
      tags: ["Carne-de-Sol", "Baião-de-dois", "Cajuína", "Queijo Coalho", "Feijão de Corda", "Rapadura"]
    }
  },
  {
    id: 9,
    name: "Folclore Cearense",
    emoji: "🐊",
    color: "linear-gradient(135deg, #1A3A2A, #0A2A1A)",
    tags: ["patrimônio", "saberes"],
    badge: "Imaginário Popular",
    desc: "Lendas, personagens e o imaginário fantástico do sertão e do litoral.",
    items: "30+ lendas",
    content: {
      origin: "O folclore cearense é um dos mais ricos do Brasil, resultado do encontro de tradições indígenas (lobisomem, mãe-d'água, curupira), africanas (Caipora, entidades do candomblé) e europeias (assombração, fantasma, alma penada). O isolamento geográfico do sertão durante séculos potencializou a criatividade narrativa popular.",
      context: "As lendas cearenses têm função social clara: explicar fenômenos naturais, transmitir valores morais e delimitar comportamentos aceitos ou proibidos. A Caapora, por exemplo, protege animais selvagens e pune caçadores predatórios — uma forma de conservação ambiental anterior à ecologia como ciência.",
      significance: "O folclore cearense é vivo, não apenas histórico. Personagens como o Velho Chico (espírito do Rio São Francisco), a Mãe-d'Água, o Boitatá e figuras locais como o Saci do sertão continuam sendo transmitidas oralmente nas zonas rurais. Pesquisadores como Leonardo Mota documentaram extensamente esse patrimônio.",
      examples: "O Dragão do Mar é figura mitológica e histórica: Francisco José do Nascimento, jangadeiro negro que liderou a abolição do tráfico em Fortaleza (1884), foi chamado de Dragão do Mar por sua coragem. O Carão é uma ave mítica do sertão. A Cangaceira fantasma assombra estradas da chapada. A Boiuna ronda os açudes.",
      impact: "O folclore alimenta diretamente a literatura, o cinema e as artes visuais cearenses. Filmes como 'Jacaré-açu' e peças teatrais do Grupo Bagaceira dialogam com o imaginário popular. O Museu do Folclore do Ceará é referência para pesquisadores nacionais.",
      curiosidades: "O 'Saci Pererê' no Ceará tem variações regionais distintas: no sertão, aparece como 'Saci Malandro', que ajuda lavradores honestos e prega peças em preguiçosos. O Bode Preto, considerado azarado ao cruzar seu caminho, é superstição exclusivamente cearense que gerou ditos populares usados até hoje.",
      quote: { text: "No sertão, o imaginário não é evasão da realidade — é a forma que o sertanejo encontrou de compreendê-la e resistir a ela.", author: "Prof. Gilmar de Carvalho", context: "Pesquisador de cultura popular cearense" },
      highlights: [
        { icon: "🐊", label: "Dragão do Mar", value: "Lenda-história" },
        { icon: "🐍", label: "Boiuna", value: "Guardã dos açudes" },
        { icon: "🌙", label: "Caapora", value: "Protetor floresta" },
        { icon: "📚", label: "Catalogado por", value: "Leonardo Mota" }
      ],
      tags: ["Dragão do Mar", "Caapora", "Boitatá", "Lendas", "Sertão", "Imaginário Popular"]
    }
  },
  {
    id: 10,
    name: "Artes Visuais",
    emoji: "🎨",
    color: "linear-gradient(135deg, #2A0A3A, #1A0828)",
    tags: ["artes"],
    badge: "Criação Visual",
    desc: "Pintura, escultura, instalação e o olhar artístico sobre o Ceará.",
    items: "Séculos de produção",
    content: {
      origin: "As artes visuais cearenses têm marco fundador no século XIX com a chegada da Academia de Belas-Artes ao Brasil. No Ceará, a pintura regionalista do início do século XX, influenciada pelo Movimento Modernista de 1922 e pela obra de Portinari, criou uma escola específica de representação da paisagem e do povo nordestino.",
      context: "O Ceará possui tradição importante na xilogravura popular, arte que nasceu para ilustrar folhetos de cordel mas evoluiu para obra autônoma. Artistas como J. Borges (pernambucano de influência cearense), Stênio Diniz e os xilogravuristas do Cariri criaram um vocabulário visual único e reconhecido internacionalmente.",
      significance: "A Escola de Artes da UFC formou gerações de artistas que definiram a identidade visual cearense contemporânea. O Museu de Arte da UFC (MAUC) e o Museu de Arte Contemporânea do Ceará (MAC-CE) são referências no mapa da arte brasileira. O movimento Arte Cearense dos anos 1980 buscou síntese entre vanguarda e tradição regional.",
      examples: "Paulo Saraceni, Chico Liberato, Siron Franco (que viveu anos em Fortaleza), Oswald Barroso e Clotilde Medeiros são referências históricas. Na contemporaneidade, Henrique Sauer, Camila Soato e os coletivos de arte urbana de Fortaleza (especialmente no Pirambu e no Centro) criam obras de forte impacto social.",
      impact: "O mercado de arte cearense cresceu significativamente com galerias como a Galeria Multiarte e eventos como o Salão Cearense de Artes Visuais. A arte urbana de Fortaleza, especialmente murais na Praia de Iracema e bairros centrais, transformou a cidade num museu a céu aberto visitado por turistas.",
      curiosidades: "A xilogravura cearense usa madeira de cajarana, árvore da caatinga, cujas veias naturais criam texturas impossíveis com outras madeiras. O Museu da Xilogravura de Juazeiro do Norte tem um dos maiores acervos do mundo nessa técnica. O artista Stênio Diniz trabalhou com matrizes de mais de 50 anos de uso.",
      quote: { text: "O Ceará que pinto não é o que existe — é o que continua existindo dentro de mim mesmo quando estou longe.", author: "Paulo Saraceni", context: "Artista visual cearense" },
      highlights: [
        { icon: "🖼️", label: "MAUC", value: "Acervo nacional" },
        { icon: "🪓", label: "Xilogravura", value: "Cariri, CE" },
        { icon: "🏛️", label: "MAC-CE", value: "Arte contemporânea" },
        { icon: "🎨", label: "Arte urbana", value: "Fortaleza" }
      ],
      tags: ["Xilogravura", "MAUC", "MAC-CE", "Arte Urbana", "Cordel Visual", "Fortaleza"]
    }
  },
  {
    id: 11,
    name: "Patrimônio Histórico",
    emoji: "🏛️",
    color: "linear-gradient(135deg, #2A2A0A, #4A4A10)",
    tags: ["patrimônio"],
    badge: "IPHAN",
    desc: "Fortalezas, igrejas, centros históricos e os monumentos da memória cearense.",
    items: "200+ tombados",
    content: {
      origin: "O patrimônio histórico cearense cobre quatro séculos de história construída, desde as primeiras fortalezas portuguesas do século XVII até conjuntos modernistas do século XX. A presença holandesa (1649) também deixou marcas, especialmente no litoral norte.",
      context: "Fortaleza tem um dos centros históricos mais importantes do Nordeste, com o Teatro José de Alencar (1910), a Estação João Felipe (1873), o Passeio Público e o bairro da Praia de Iracema como marcos. No interior, Sobral é considerada a cidade histórica mais preservada do Ceará.",
      significance: "O IPHAN cataloga mais de 200 bens tombados no Ceará, entre monumentos, conjuntos arquitetônicos e paisagens. A Serra da Meruoca, o Geopark Araripe e a Área de Proteção Ambiental da Chapada do Araripe são patrimônios que articulam natureza e cultura.",
      examples: "Teatro José de Alencar — obra mista de ferro inglês e ornamentação neoclássica, símbolo de Fortaleza. Centro histórico de Sobral — conjunto do século XVIII-XIX, tombado pelo IPHAN. Igreja Matriz de Viçosa do Ceará — construída em 1701, uma das mais antigas do estado. Forte do Preguiçoso em Aracati.",
      impact: "O turismo cultural gera mais de R$ 2 bilhões para a economia cearense. Fortaleza é a quinta cidade mais visitada do Brasil e os patrimônios históricos são componente essencial dessa atratividade. O Programa de Aceleração do Crescimento (PAC-Cidades Históricas) investiu R$ 150 milhões em Sobral e Aracati.",
      curiosidades: "O Teatro José de Alencar foi construído com peças de ferro trazidas da Inglaterra em navios e montado como um kit. Em seu salão principal, a cúpula de vidro e ferro é uma das obras de engenharia mais impressionantes do Brasil do início do século XX. O teatro nunca fechou por reforma completa — funciona há mais de 110 anos ininterruptamente.",
      quote: { text: "Não há futuro para uma cidade que não respeita seu passado — o Teatro José de Alencar é nosso ponto de partida e de chegada.", author: "Secretaria de Cultura de Fortaleza", context: "Plano de Preservação do Patrimônio Histórico" },
      highlights: [
        { icon: "🏛️", label: "Teatro J. Alencar", value: "1910 — Fortaleza" },
        { icon: "🏙️", label: "Centro histórico", value: "Sobral, IPHAN" },
        { icon: "⛪", label: "Igrejas tombadas", value: "50+ no CE" },
        { icon: "💰", label: "Turismo cultural", value: "R$ 2bi/ano" }
      ],
      tags: ["Teatro José de Alencar", "Sobral", "IPHAN", "Fortaleza Histórica", "Aracati", "Viçosa do Ceará"]
    }
  },
  {
    id: 12,
    name: "Dança & Teatro",
    emoji: "💃",
    color: "linear-gradient(135deg, #3A001A, #5A002A)",
    tags: ["artes"],
    badge: "Corpo & Cena",
    desc: "Danças populares, grupos teatrais e a efervescência da cena cearense.",
    items: "100+ grupos",
    content: {
      origin: "A dança no Ceará tem raízes nas tradições indígenas (danças rituais), africanas (coco, capoeira-dança) e europeias (contradança, valsa do sertão). O teatro cearense tem origem nos autos religiosos do período colonial, evoluindo para um teatro de questões sociais que marcou o século XX.",
      context: "O Grupo Bagaceira, fundado nos anos 1980, é referência nacional em teatro de resistência com matriz nordestina. A Escola de Teatro e Dança da UFC formou gerações de artistas. O movimento de teatro de rua em Fortaleza, com grupos como o Magiluth (que passa frequentemente pelo Ceará) e grupos locais, tem forte presença no Dragão do Mar.",
      significance: "O Centro Cultural Dragão do Mar, inaugurado em 1999, tornou-se o maior polo de artes cênicas do Nordeste. Com teatro de arena, anfiteatro externo e salas de dança, acolhe produção local e circulação nacional. A dança contemporânea cearense dialogou com o Nordeste Expressionismo, movimento de vanguarda dos anos 1990.",
      examples: "Maracatu (dança-música-teatro afro-cearense), Coco das Américas (dança popular do litoral), quadrilha junina como espetáculo cênico. Grupo Bagaceira, CIA Delas de Dança, Cia. de Dança Contemporânea da UFC. O bailarino e coreógrafo Wolney Oliveira é referência internacional a partir do Ceará.",
      impact: "O Dragão do Mar recebe mais de 1 milhão de visitantes por ano e é o principal polo cultural de Fortaleza. O Festival de Teatro de Fortaleza (FITfor) é um dos maiores festivais de teatro do Brasil, reunindo mais de 100 grupos nacionais e internacionais anualmente.",
      curiosidades: "O Maracatu cearense difere do pernambucano: enquanto o de Pernambuco é predominantemente percussivo, o cearense incorpora elementos de cantoria e repente em sua estrutura. O nome 'Dragão do Mar' para o Centro Cultural é homenagem direta ao herói abolicionista Francisco José do Nascimento.",
      quote: { text: "No Ceará, a dança não é entretenimento — é o corpo gritando o que a voz não consegue dizer.", author: "Wolney Oliveira", context: "Coreógrafo, Fortaleza" },
      highlights: [
        { icon: "🎭", label: "Dragão do Mar", value: "Polo cultural CE" },
        { icon: "🎪", label: "FITfor", value: "100+ grupos/ano" },
        { icon: "💃", label: "Maracatu CE", value: "Estilo próprio" },
        { icon: "🎓", label: "Escola UFC", value: "Teatro e Dança" }
      ],
      tags: ["Dragão do Mar", "Maracatu", "Grupo Bagaceira", "Teatro Cearense", "Dança Contemporânea", "FITfor"]
    }
  },
  {
    id: 13,
    name: "Cinema Cearense",
    emoji: "🎬",
    color: "linear-gradient(135deg, #0A0A1A, #1A1A3A)",
    tags: ["artes", "contemporâneo"],
    badge: "7ª Arte",
    desc: "Produção audiovisual e o olhar cinematográfico sobre o Nordeste.",
    items: "Décadas de produção",
    content: {
      origin: "O cinema cearense tem marco importante na criação da Secretaria de Audiovisual do Ceará e no movimento 'Alumbramento' dos anos 1980–90, que formou cineastas como Lírio Ferreira, Paulo Caldas e outros que definiram o chamado 'Cinema da Retomada' nordestino.",
      context: "Fortaleza se consolidou como centro de produção audiovisual do Nordeste. Festivais como o Cine Ceará — Festival Ibero-americano de Cinema (desde 1991) e o Fórum de Cinema de Guaramiranga projetaram a produção local nacional e internacionalmente.",
      significance: "Filmes cearenses como 'Baile Perfumado' (1997, Lírio Ferreira/Paulo Caldas), 'Árido Movie' (2005, Lírio Ferreira) e 'Estrada para Ythaca' (2010, Guto Parente et al.) são referências do cinema brasileiro contemporâneo. A produção de documentários sobre cultura nordestina é especialmente fértil.",
      examples: "Karim Aïnouz (Fortaleza, 1966) é o maior nome do cinema cearense, com filmes como 'O Céu de Suely' (2006), premiado em Veneza, e 'A Vida Invisível' (2019), Prêmio do Júri em Cannes. Petra Costa, Guto Parente e Ivo Lopes Araújo são outros cineastas cearenses de projeção internacional.",
      impact: "O Cine Ceará Festival movimenta mais de R$ 3 milhões por edição e atrai mais de 50.000 espectadores. O programa de incentivo cinematográfico do estado (Funcet) investiu mais de R$ 50 milhões em produções nos últimos 10 anos. A plataforma streaming 'Curta na Tela' distribui gratuitamente produções cearenses.",
      curiosidades: "Karim Aïnouz filmou 'O Céu de Suely' com orçamento de apenas R$ 500.000 e levou para competição em Veneza, Locarno e Toronto. O título original em francês 'Suely no Céu' foi traduzido de formas distintas em cada país — a versão italiana ficou 'Il Cielo Azzurro di Suely', em homenagem ao céu característico do sertão cearense.",
      quote: { text: "O sertão nordestino não é apenas cenário para o cinema — é personagem. Ele age, pressiona, determina.", author: "Karim Aïnouz", context: "Diretor, Fortaleza" },
      highlights: [
        { icon: "🏆", label: "Karim Aïnouz", value: "Cannes 2019" },
        { icon: "🎬", label: "Cine Ceará", value: "Festival desde 1991" },
        { icon: "🌟", label: "Baile Perfumado", value: "Marco 1997" },
        { icon: "💶", label: "Funcet", value: "R$50M+ investidos" }
      ],
      tags: ["Karim Aïnouz", "Cine Ceará", "Baile Perfumado", "Cinema Nordestino", "Alumbramento", "Guto Parente"]
    }
  },
  {
    id: 14,
    name: "Cultura Sertaneja",
    emoji: "🌵",
    color: "linear-gradient(135deg, #2A1800, #4A2A00)",
    tags: ["patrimônio", "saberes"],
    badge: "Sertão Profundo",
    desc: "Modos de vida, saberes, festas e resistência do sertão cearense.",
    items: "100+ municípios",
    content: {
      origin: "A cultura sertaneja cearense foi forjada pela dureza do semi-árido — o sol de rachar, a seca que mata e renova, o vaqueiro que cuida do gado com armadura de couro. Esse modo de vida específico gerou práticas culturais únicas: o canto do galo ao alvorecer, a reza para chover, o vaqueiro que é também poeta.",
      context: "O Ceará tem 80% de seu território em clima semi-árido. Essa condição não é limitação — é matriz cultural. A seca histórica de 1877–79, que matou mais de 500 mil pessoas, é evento fundador da consciência social e cultural cearense: de lá saíram a grande migração, a poesia de Patativa, a política sertaneja e a religiosidade de Padre Cícero.",
      significance: "O vaqueiro nordestino, com seu gibão de couro, é ícone cultural registrado pelo IPHAN. A vaquejada, praticada originalmente como trabalho e transformada em esporte, é patrimônio cultural imaterial do Brasil (EC 96/2017). O modo de vida sertanejo influenciou a literatura, a música, o cinema e as artes visuais de todo o Brasil.",
      examples: "Cidades como Quixadá (com seus monolitos graníticos), Canindé, Várzea Alegre e Crateús são polos da cultura sertaneja. A Serra da Ibiapaba tem microclima especial que gerou tradições culturais distintas. Região do Inhamuns, no sertão central, preserva práticas de vaqueiro praticamente inalteradas do século XVIII.",
      impact: "O turismo do sertão cresce à taxa de 15% ao ano no Ceará. O Geopark Araripe, reconhecido pela UNESCO, articulou geologia, cultura e turismo no Cariri. Festas como a Vaquejada de Quixadá atraem mais de 200.000 visitantes. A identidade sertaneja é cada vez mais valorizada como diferencial turístico.",
      curiosidades: "O gibão de couro dos vaqueiros cearenses serve proteção contra a vegetação espinhosa da caatinga — cada região da caatinga tem espinheiros diferentes, e a forma e espessura do couro variam conforme o território. O 'bode' (Capra hircus) adaptou-se tão bem ao sertão cearense que se tornou símbolo cultural — há mais estátuas de bodes no interior do Ceará do que de qualquer outro animal.",
      quote: { text: "O sertão é uma escola que não tem paredes. Ensina valentia, ensina paciência, ensina a esperar a chuva sem perder a fé.", author: "Vaqueiro Raimundo Nonato", context: "Inhamuns, Ceará" },
      highlights: [
        { icon: "🥩", label: "Gibão de couro", value: "IPHAN patrimônio" },
        { icon: "🌵", label: "Semi-árido", value: "80% do território" },
        { icon: "🐄", label: "Vaquejada", value: "EC 96/2017" },
        { icon: "🌿", label: "Geopark Araripe", value: "UNESCO" }
      ],
      tags: ["Sertão", "Vaqueiro", "Gibão de Couro", "Vaquejada", "Semi-árido", "Cultura Popular"]
    }
  },
  {
    id: 15,
    name: "Cultura Marítima",
    emoji: "⛵",
    color: "linear-gradient(135deg, #0A1A3A, #1A3A5A)",
    tags: ["patrimônio", "saberes"],
    badge: "Mar e Jangada",
    desc: "Jangadeiros, pescadores e a civilização marítima do litoral cearense.",
    items: "573 km de litoral",
    content: {
      origin: "O litoral cearense de 573 quilômetros gerou uma cultura marítima vibrante e específica. A jangada — embarcação de troncos balsa amarrados que os indígenas já usavam antes dos portugueses — é o símbolo maior dessa civilização. Os jangadeiros cearenses navegavam centenas de quilômetros mar adentro para pescar.",
      context: "A jangada cearense se distingue das de outros estados por sua leveza extrema e técnica de vela singular. Em 1941, os jangadeiros Jacaré, Mané Preto, Tatão e Jerônimo navegaram de Fortaleza ao Rio de Janeiro em 61 dias numa jangada para entregar ao presidente Vargas um pedido de direitos trabalhistas. Foram recebidos na praia de Copacabana por multidão de 100 mil pessoas.",
      significance: "Os jangadeiros foram protagonistas de um dos mais importantes atos de resistência política da história cearense: em 1884, o mestre Chico da Matilde liderou greve que impediu o embarque de escravizados no porto de Fortaleza, tornando a cidade a primeira capital brasileira a abolir o tráfico.",
      examples: "Praias como Prainha do Canto Verde (Beberibe), Caponga e Flecheiras preservam comunidades tradicionais de jangadeiros. O Museu da Jangada em Fortaleza e o Museu da Jangada em Almofala documentam essa tradição. A APICE (Associação de Pescadores do Interior do Ceará) preserva técnicas artesanais de construção de jangadas.",
      impact: "A pesca artesanal jangadeira ancora a segurança alimentar de milhares de famílias do litoral cearense. O turismo de pesca e de passeio de jangada movimenta economias litorâneas. O Programa de Fortalecimento da Pesca Artesanal do Ceará investiu R$ 20 milhões entre 2018-2022 em comunidades jangadeiras.",
      curiosidades: "A 'rajada', técnica de velejar da jangada cearense, permite navegar contra o vento com eficiência surpreendente. Descoberta empiricamente pelos jangadeiros, ela é estudada por engenheiros navais como solução para embarcações de alto mar. A madeira balsa usada nas jangadas tradicionais vem principalmente da região amazônica, criando um comércio secular entre Amazônia e Nordeste.",
      quote: { text: "O mar é nosso sertão — quem não tem medo do sertão não tem medo do mar. São a mesma luta contra a vastidão.", author: "Mestre jangadeiro de Caponga", context: "Cascavel, litoral leste do Ceará" },
      highlights: [
        { icon: "⛵", label: "Jangadeiros 1941", value: "Viagem ao RJ" },
        { icon: "✊", label: "Abolição 1884", value: "Greve histórica" },
        { icon: "🌊", label: "Litoral", value: "573 km" },
        { icon: "🐟", label: "Pesca artesanal", value: "Patrimônio vivo" }
      ],
      tags: ["Jangada", "Jangadeiros", "Dragão do Mar", "Pesca Artesanal", "Litoral Cearense", "Cultura Marítima"]
    }
  },
  {
    id: 16,
    name: "Turismo Cultural",
    emoji: "🗺️",
    color: "linear-gradient(135deg, #1A3A2A, #2A5A3A)",
    tags: ["contemporâneo"],
    badge: "Destino CE",
    desc: "Roteiros, destinos e o potencial do turismo cultural no Ceará.",
    items: "184 municípios",
    content: {
      origin: "O turismo cultural cearense desenvolveu-se como alternativa ao turismo de sol e praia que dominou o estado nas décadas de 1980–90. A percepção de que o interior do Ceará tinha patrimônios únicos — a Chapada do Araripe, o Cariri histórico, a Serra da Ibiapaba — abriu rotas culturais que hoje concorrem com o turismo de praia.",
      context: "O Ceará recebe anualmente mais de 5 milhões de turistas, com impacto de R$ 8 bilhões na economia. Fortaleza é a 5ª cidade mais visitada do Brasil. O litoral concentra o turismo de massa, mas circuitos culturais como a Rota do Cariri, a Rota das Serras e o Circuito das Cidades Históricas crescem 15% ao ano.",
      significance: "O Geopark Araripe, reconhecido pela UNESCO em 2006, foi o primeiro geopark da América do Sul e é referência mundial de turismo geológico-cultural. A serra da Ibiapaba tem microclima único que atraiu tradições culturais distintas. Canindé e Juazeiro do Norte formam o maior polo de turismo religioso do Norte-Nordeste.",
      examples: "Rota do Cariri: Juazeiro do Norte, Crato (museus de paleontologia), Missão Velha, Barbalha, Nova Olinda (Casa Grande). Rota das Serras: Guaramiranga, Pacoti, Mulungu, Baturité. Rota Litorânea Cultural: Fortaleza, Aquiraz, Aracati, Canoa Quebrada, Jericoacoara. Rota do Sertão: Quixadá, Sobral, Cratéus.",
      impact: "O turismo de base comunitária cresce especialmente em comunidades quilombolas e indígenas. Projetos como o 'Turismo Solidário da Prainha do Canto Verde' e o 'Ecoturismo do Cumbe' criaram modelos replicados em outros estados. O Ceará recebe o Prêmio Nacional de Turismo regularmente por inovação no setor.",
      curiosidades: "Jericoacoara, hoje destino turístico consolidado, era um vilarejo de pescadores praticamente inacessível até a abertura da estrada nos anos 1980. O viajante britânico Richard Burton registrou a praia em seus diários no século XIX, mas ela só foi 'descoberta' pelo turismo nacional nos anos 1970. Hoje está entre os 10 melhores destinos do Brasil.",
      quote: { text: "O Ceará não é apenas praia. É história, cultura, sabedoria, natureza — é um continente em miniatura.", author: "Secretaria de Turismo do Ceará", context: "Plano Estadual de Turismo 2020-2030" },
      highlights: [
        { icon: "👥", label: "Turistas/ano", value: "5 milhões+" },
        { icon: "💰", label: "Impacto econômico", value: "R$ 8bi" },
        { icon: "🌍", label: "Geopark Araripe", value: "UNESCO 2006" },
        { icon: "📈", label: "Turismo cultural", value: "+15%/ano" }
      ],
      tags: ["Geopark Araripe", "Jericoacoara", "Cariri", "Rota Cultural", "Juazeiro", "Guaramiranga"]
    }
  },
  {
    id: 17,
    name: "Humor & Cultura",
    emoji: "😂",
    color: "linear-gradient(135deg, #3A2A00, #5A4A00)",
    tags: ["contemporâneo", "artes"],
    badge: "Riso e Crítica",
    desc: "O humor cearense: piadas, stand-up e a tradição cômica do Nordeste.",
    items: "Tradição viva",
    content: {
      origin: "O humor cearense tem raízes profundas na cultura oral nordestina: o 'conto de chegada' (história engraçada de início de conversa), o improviso do repentista, a piada de sertanejo e o bumba-meu-boi cômico. O nordestino transformou o sofrimento em riso — mecanismo de resistência cultural documentado por pesquisadores como Câmara Cascudo.",
      context: "Fortaleza emergiu nos anos 2000 como polo nacional do stand-up comedy. Comediantes como Fabiano Cambota, Whindersson Nunes (piauiense de adoção nordestina) e o grupo Porta dos Fundos (que tem cearenses em seu elenco) levaram o humor nordestino para escala nacional e internacional.",
      significance: "O humor cearense é distinto do paulistano ou carioca: é mais auto-referente (ri de si mesmo, do sertão, da seca), mais filosófico nas entrelinhas e carrega a velocidade linguística do nordestino. O 'cearensismo' — expressões e situações típicas — alimenta o humor de uma geração inteira de comediantes.",
      examples: "Chico Anysio (1931–2012), nascido em Maranguape-CE, é um dos maiores humoristas da história da televisão brasileira. Renato Aragão, o Didi (Mucambo, CE), é ícone nacional do humor. Fabiano Cambota e Paulinho Serra são referências do stand-up cearense contemporâneo.",
      impact: "O humor cearense movimenta um mercado de streaming, shows e conteúdo digital de centenas de milhões. Chico Anysio e Renato Aragão construíram carreiras de 50+ anos cada, formatando a comédia nacional. A nova geração de comediantes cearenses tem audiências de milhões nas redes sociais.",
      curiosidades: "Chico Anysio criou mais de 200 personagens ao longo de sua carreira, recorde no humor brasileiro. Vários deles tinham sotaque e expressões cearenses reconhecíveis. O personagem 'Bozó' era inspirado nos malandros das feiras do sertão cearense. Renato Aragão afirma que a personagem Didi foi inspirada num vendedor de picolés que conheceu na infância em Mucambo.",
      quote: { text: "Cearense ri porque aprendeu que, se não rir, a seca é ainda mais longa.", author: "Chico Anysio", context: "Humorista, Maranguape-CE, 1931–2012" },
      highlights: [
        { icon: "😂", label: "Chico Anysio", value: "200+ personagens" },
        { icon: "🎭", label: "Renato Aragão", value: "Mucambo, CE" },
        { icon: "🎤", label: "Stand-up CE", value: "Polo nacional" },
        { icon: "📺", label: "Tradição", value: "70+ anos TV" }
      ],
      tags: ["Chico Anysio", "Renato Aragão", "Stand-up", "Humor Nordestino", "Comédia", "Cearensismos"]
    }
  },
  {
    id: 18,
    name: "Linguagens & Saberes",
    emoji: "🗣️",
    color: "linear-gradient(135deg, #0A2A2A, #1A4A4A)",
    tags: ["saberes", "patrimônio"],
    badge: "Expressão & Saber",
    desc: "O dialeto cearense, os saberes tradicionais e a medicina popular.",
    items: "Saber vivo",
    content: {
      origin: "O português cearense carrega camadas históricas únicas: vocábulos tupi-guarani e kariri ainda em uso cotidiano, expressões africanas incorporadas, arcaismos portugueses preservados no isolamento do sertão e neologismos urbanos de Fortaleza. Pesquisadores como Jeferson Celso documentaram o 'cearensês' como dialeto específico.",
      context: "O 'S' chiado cearense — que distingue o sotaque do estado — tem origem controversa: alguns linguistas atribuem à influência portuguesa, outros ao contato com línguas indígenas. O Ceará também preserva vogais abertas e ritmo de fala que diferenciam o cearense do nordestino de outros estados.",
      significance: "Os saberes tradicionais cearenses incluem medicina popular (benzedura, uso de ervas da caatinga), meteorologia popular (leitores do céu, quebradores de nuvens, os 'profetas da chuva'), agroecologia tradicional (sistemas de plantio adaptados ao semi-árido) e técnicas de construção vernacular.",
      examples: "Francisco Bezerra Sobreira, o 'Fontenele de Quixeramobim', é o mais famoso profeta-da-chuva do Ceará: prevê chuvas com base no comportamento de animais, plantas e astros. O benzedeiro ou 'curador' ainda é figura central em comunidades rurais. O uso de aroeira, jurema, catingueira e outras plantas da caatinga como medicina é sistematizado em centenas de receitas orais.",
      impact: "A Embrapa Semi-árido sistematizou saberes tradicionais de agricultores cearenses em técnicas de convivência com a seca que são hoje referência mundial. O projeto 'Cisternas de Placa' — baseado em saber popular sobre captação de água de chuva — garantiu água para mais de 1 milhão de famílias no sertão nordestino.",
      curiosidades: "Os 'profetas da chuva' do Ceará são consultados anualmente pela mídia nacional para previsão do período chuvoso. Um estudo da Inmet (2015) mostrou que as previsões do profeta Juazeirinho, de Quixeramobim, tiveram acerto de 68% — comparável a modelos computacionais de previsão regional. Eles 'leem' o comportamento de animais e plantas como indicadores climáticos.",
      quote: { text: "Quem aprendeu com o sertão a sobreviver, aprendeu mais do que qualquer universidade pode ensinar.", author: "Agricultor sertanejo de Quixeramobim", context: "Sertão Central, Ceará" },
      highlights: [
        { icon: "🗣️", label: "Dialeto cearense", value: "S chiado único" },
        { icon: "🌿", label: "Medicina popular", value: "Caatinga" },
        { icon: "🌧️", label: "Profetas da chuva", value: "Tradição viva" },
        { icon: "💧", label: "Cisternas", value: "1M+ famílias" }
      ],
      tags: ["Dialeto Cearense", "Medicina Popular", "Profetas da Chuva", "Saberes Tradicionais", "Benzedura", "Caatinga"]
    }
  },
  {
    id: 19,
    name: "Esporte & Cultura",
    emoji: "⚽",
    color: "linear-gradient(135deg, #1A3A00, #2A5A00)",
    tags: ["contemporâneo"],
    badge: "Paixão Popular",
    desc: "Futebol, beachsports, vaquejada e as práticas esportivas cearenses.",
    items: "Múltiplos esportes",
    content: {
      origin: "O esporte no Ceará tem raízes culturais profundas: a vaquejada, originada no trabalho pecuário do sertão, tornou-se espetáculo popular antes do futebol chegar. O futebol chegou ao Ceará no início do século XX e rapidamente se popularizou nas comunidades urbanas e rurais.",
      context: "O Ceará Sporting Club (1914) e o Fortaleza Esporte Clube (1918) são os maiores clubes, formando a rivalidade Clássicorei — considerado o maior clássico estadual do Nordeste. Ambos os clubes têm histórias de acesso à Série A do Brasileiro e participações em competições sul-americanas.",
      significance: "Além do futebol, o Ceará tem destaque em esportes olímpicos como o atletismo (Claudia Ivo), o surf (condições únicas na costa), o beach tennis (Fortaleza tem a maior concentração de quadras do Brasil) e a vaquejada (tradição cultural elevada à categoria esportiva constitucional).",
      examples: "Anderson Luís, o Índio (1975) é o maior jogador cearense da história. A surfista Maya Gabeira, de origem nacional com carreira iniciada no Ceará, é multicampeã mundial. O Complexo Esportivo do PCI (Porto das Dunas) é um dos maiores centros esportivos privados do Brasil.",
      impact: "A Copa do Mundo 2014 teve jogos no Estádio Castelão (450 mil m²), o maior da região Norte-Nordeste. O Ceará recebeu 6 jogos, incluindo clássico Brasil × México. O legado incluiu obras de mobilidade urbana e o aquecimento do turismo esportivo que cresceu 300% nos anos seguintes.",
      curiosidades: "O Fortaleza EC foi o primeiro clube de futebol cearense a jogar a final de uma competição continental — atingiu a final da Copa Sul-Americana em 2023, sendo derrotado pelo LDU do Equador. Foi o primeiro clube nordestino a chegar a uma final de competição sul-americana.",
      quote: { text: "No Ceará, você nasce torcendo. Você não escolhe ser Ceará ou Fortaleza — a família decide, a rua decide, Deus decide.", author: "Torcedor veterano do Clássicorei", context: "Fortaleza, Ceará" },
      highlights: [
        { icon: "⚽", label: "Clássicorei", value: "Maior rival NE" },
        { icon: "🏟️", label: "Castelão", value: "Copa 2014" },
        { icon: "🏄", label: "Surf/Beach", value: "Polo nacional" },
        { icon: "🐄", label: "Vaquejada", value: "EC 96/2017" }
      ],
      tags: ["Futebol Cearense", "Clássicorei", "Vaquejada", "Surf", "Castelão", "Copa 2014"]
    }
  },
  {
    id: 20,
    name: "Cultura Urbana",
    emoji: "🏙️",
    color: "linear-gradient(135deg, #0A0A2A, #1A1A4A)",
    tags: ["contemporâneo"],
    badge: "Cidade & Arte",
    desc: "Grafite, hip-hop, cenas underground e a efervescência urbana de Fortaleza.",
    items: "Múltiplas cenas",
    content: {
      origin: "A cultura urbana em Fortaleza emergiu nas periferias da cidade nos anos 1980–90, com o hip-hop, o funk e as culturas de resistência das comunidades do Pirambu, Granja Lisboa e Conjunto Palmeiras. A arte de rua transformou muros do Centro em galeria a céu aberto desde os anos 2000.",
      context: "Fortaleza tem uma das cenas de rap mais ativas do Brasil, com grupos como o Zona Marginal (Pirambu), Planet Hemp (influência), e dezenas de MCs locais que documentam a realidade das periferias cearenses com linguagem própria. A batalha de rima do Castelão é referência nacional.",
      significance: "A arte urbana transformou bairros como Praia de Iracema, Centro, Serviluz e Mucuripe em locais de turismo cultural. O projeto 'Lamas' (Laboratório de Memórias e Arte) mapeou mais de 500 intervenções artísticas em Fortaleza. Grafiteiros como Mundano (paulistano de passagem) e Binho Ribeiro reverenciaram paredes cearenses.",
      examples: "O Beco da Poesia (Pirambu) é um espaço de arte popular criado pela comunidade numa das áreas mais carentes de Fortaleza. A Praia de Iracema concentra arte urbana, eventos culturais e a boêmia fortalezense. O Mercado dos Pinhões é polo de economia criativa e cultura urbana no Centro.",
      impact: "A economia criativa urbana de Fortaleza emprega mais de 50.000 pessoas. O setor de moda e design cearense fatura R$ 1,5 bilhão ao ano, com marcas que exportam identidade nordestina para mercados internacionais. O festival Cuca de Música e Arte reúne anualmente mais de 80.000 jovens.",
      curiosidades: "O Beco da Poesia no Pirambu foi criado por Ranvisson Melo, professor de língua portuguesa que cobriu as paredes de um beco com versos populares para 'demarcar território' contra grafites de gangues. O projeto transformou o beco em atração turística e símbolo de resistência cultural comunitária.",
      quote: { text: "A periferia não é apenas problema social — é fonte de criatividade. O hip-hop de Fortaleza tem muito mais a dizer sobre o Brasil do que muito músico dos estúdios.", author: "MC da Zona Norte de Fortaleza", context: "Entrevista ao Diário do Nordeste, 2022" },
      highlights: [
        { icon: "🎤", label: "Rap/Hip-hop", value: "Cena ativa" },
        { icon: "🖌️", label: "Arte urbana", value: "500+ obras CE" },
        { icon: "🏙️", label: "Economia criativa", value: "50k+ empregos" },
        { icon: "🎵", label: "Festival Cuca", value: "80k+ participantes" }
      ],
      tags: ["Hip-hop", "Grafite", "Arte Urbana", "Periferia", "Fortaleza", "Economia Criativa"]
    }
  },
  {
    id: 21,
    name: "Ciência & Tecnologia CE",
    emoji: "🔬",
    color: "linear-gradient(135deg, #0A1A3A, #1A2A5A)",
    tags: ["contemporâneo", "saberes"],
    badge: "Inovação",
    desc: "A produção científica cearense e o diálogo entre tradição e inovação.",
    items: "Universidades e institutos",
    content: {
      origin: "A institucionalização da ciência no Ceará começa no final do século XIX com a criação da Escola de Aprendizes Artífices (1909) e avança com a fundação da UFC (1954) e UECE (1975). O Ceará tornou-se polo científico relevante especialmente nas ciências agronômicas adaptadas ao semi-árido.",
      context: "A Embrapa Agroindústria Tropical (Fortaleza) é referência mundial em pesquisa do caju, manga, melão e outras culturas tropicais. O Instituto Federal do Ceará (IFCE) tem campi em todos os macroterritorios, democratizando o acesso à educação técnica. O Paleo Geoparque Araripe é um dos mais importantes sítios de paleontologia do mundo.",
      significance: "O Ceará faz parte do Polo Tecnológico do Nordeste com forte concentração de startups em Fortaleza. O Parque Tecnológico do Porto Digital (parceria com o Recife), aceleradoras como o Startup CE e programas da FUNCAP têm fomentado inovação com identidade local — especialmente em agritech adaptada ao semiárido.",
      examples: "José de Alencar Gomes da Silva (político-escritor) e Capistrano de Abreu (historiador) são intelectuais cearenses que fundaram disciplinas. Modernamente: os pesquisadores da UFC em nanotecnologia (grupo do prof. Pierre Braid), o Centro de Previsão de Tempo e Estudos Climáticos/FUNCEME e o Centro de Tecnologias Estratégicas do Nordeste (Cetene).",
      impact: "A UFC tem mais de 60.000 alunos e produz anualmente mais de 2.000 publicações científicas indexadas. O Parque de Desenvolvimento Tecnológico (PADETEC) incubou mais de 200 empresas. O Ceará é o terceiro estado do Nordeste em número de patentes registradas.",
      curiosidades: "O caju — fruta símbolo do Ceará — foi pesquisado pela Embrapa a ponto de criar cajueiros 'anões' que produzem 4x mais que os tradicionais. O pedúnculo do caju (a parte que comemos) não é a fruta — é o caule floral. A castanha é a fruta verdadeira. O Brasil é o terceiro maior produtor de castanha-de-caju do mundo, e o Ceará é o maior produtor brasileiro.",
      quote: { text: "Ciência e cultura popular não são opostos — no Nordeste, o saber popular resolve problemas que a ciência ainda está tentando entender.", author: "Profa. Dra. Ana Lídia Fontenele Façanha", context: "UFC — Faculdade de Educação" },
      highlights: [
        { icon: "🎓", label: "UFC", value: "60.000+ alunos" },
        { icon: "🥜", label: "Caju anão", value: "Embrapa" },
        { icon: "🦕", label: "Paleontologia", value: "Geopark Araripe" },
        { icon: "💡", label: "Startups CE", value: "Polo Nordeste" }
      ],
      tags: ["UFC", "Embrapa", "Ciência", "Geopark Araripe", "Tecnologia", "Inovação"]
    }
  },
  {
    id: 22,
    name: "Moda Cearense",
    emoji: "👗",
    color: "linear-gradient(135deg, #2A0A2A, #4A1A4A)",
    tags: ["artes", "contemporâneo"],
    badge: "Design & Identidade",
    desc: "Design, moda autoral e como a identidade cearense veste o mundo.",
    items: "Polo criativo",
    content: {
      origin: "A moda cearense tem raízes nas tradições têxteis populares: as rendeiras do litoral e do Cariri criavam tecidos e adornos de alta complexidade técnica séculos antes de qualquer indústria da moda. Com a industrialização do século XX, Fortaleza desenvolveu um polo têxtil relevante que hoje abastece marcas nacionais.",
      context: "Fortaleza é o terceiro maior polo têxtil do Brasil, atrás apenas de São Paulo e Santa Catarina. O Sinditêxtil-CE representa mais de 500 empresas. A Feira da Moda de Fortaleza e o Fortaleza Fashion Week posicionaram a cidade como referência da moda regional, com identidade distinta das tendências do sul e sudeste.",
      significance: "A moda cearense contemporânea dialoga com as tradições artesanais — designers como Lino Villaventura e Helô Rocha incorporaram rendas, bordados e referências do sertão em coleções de alto padrão apresentadas em São Paulo e internacionalmente. A 'estética nordestina' tornou-se referência de diversidade na moda brasileira.",
      examples: "Lino Villaventura (Fortaleza) é presença regular no SPFW com coleções que reinterpretam a cultura sertaneja e litorânea. A marca Totem, criada em Fortaleza, exporta para mais de 15 países. O surgimento de marcas de streetwear inspiradas na cultura de periferia cearense (grafite, hip-hop, cordel) cria nova estética urbana.",
      impact: "O polo têxtil de Fortaleza emprega mais de 50.000 trabalhadores diretos e movimenta R$ 4 bilhões anuais. O Ceará é o maior exportador de renda artesanal do Brasil. O mercado de moda sustentável cresce 30% ao ano, com marcas cearenses como a Insecta Shoes (modelo nacional) inspirando designers locais.",
      curiosidades: "A 'Feira da Moda de Fortaleza', realizada no Centro de Eventos, é uma das maiores feiras de negócios têxteis da América Latina. Em 2023, reuniu mais de 30.000 compradores de 40 países. O Ceará tem 40% de toda a produção nacional de renda artesanal, mas menos de 5% dos rendeiros têm acesso direto ao mercado externo.",
      quote: { text: "A moda cearense não imita — ela cria. Nós temos séculos de tradição têxtil que São Paulo está começando a descobrir.", author: "Lino Villaventura", context: "Designer de moda, Fortaleza" },
      highlights: [
        { icon: "✂️", label: "Polo têxtil", value: "3° Brasil" },
        { icon: "👗", label: "Lino Villaventura", value: "SPFW" },
        { icon: "💼", label: "Empregos", value: "50k+" },
        { icon: "🌐", label: "Exportação renda", value: "40% nacional" }
      ],
      tags: ["Moda Cearense", "Lino Villaventura", "Polo Têxtil", "Renda Artesanal", "Design", "SPFW"]
    }
  },
{
  id: 23,
  name: "Cultura Agronoma",
  emoji: "🪴",
  color: "linear-gradient(135deg, #6FAF3A, #4FA3A5)",
  tags: ["agricultura", "tradicao", "semiarido"],
  badge: "Cultura Agronoma",
  desc: "Agricultura de convivência com o semiárido e identidade rural que sustenta comunidades no interior cearense.",
  items: "Saberes do campo",
  content: {
    origin: "O plantio no Ceará tem origem nas práticas indígenas, com cultivo de mandioca e milho adaptados ao clima seco. Com a colonização, culturas como feijão, algodão e cana foram incorporadas. Ao longo do tempo, formou-se um modelo agrícola próprio, baseado na adaptação ao semiárido e na transmissão de saberes entre gerações.",
    context: "A agricultura cearense ocorre em um ambiente de chuvas irregulares e longos períodos de seca. A agricultura familiar predomina e é essencial para o abastecimento local. Tecnologias como cisternas e práticas de manejo sustentável têm aumentado a resiliência, embora ainda existam limitações de infraestrutura e acesso a recursos.",
    significance: "O plantio estrutura o modo de vida no interior. O calendário agrícola segue o ritmo das chuvas, e práticas como mutirões e conservação de sementes fortalecem a vida comunitária. A culinária regional, baseada em milho, feijão e mandioca, reflete diretamente essa cultura agrícola.",
    examples: "No Sertão Central e no Cariri, predominam milho, feijão e mandioca em sistemas tradicionais. Já no Vale do Jaguaribe, a irrigação permite a produção de frutas para exportação, como melão e banana. O algodão também tem retomado espaço com práticas mais sustentáveis.",
    impact: "A agricultura é fundamental para a subsistência e geração de renda em muitas regiões. A agricultura familiar contribui para a segurança alimentar e estabilidade social, mas depende de políticas públicas e inovação para enfrentar os desafios climáticos.",
    curiosidades: "O Ceará é referência em tecnologias de convivência com o semiárido, como cisternas de captação de água da chuva. Em anos de boa quadra chuvosa, a produção cresce bastante; em períodos de seca, os impactos sociais podem ser significativos.",
    quote: { 
      text: "O sertanejo é, antes de tudo, um forte.", 
      author: "Euclides da Cunha", 
      context: "Escritor cearense" 
    },

    highlights: [
      { icon: "🌽", label: "Culturas base", value: "Milho, feijão, mandioca" },
      { icon: "🌵", label: "Clima", value: "Semiárido" },
      { icon: "💧", label: "Desafio", value: "Chuvas irregulares" },
      { icon: "🌱", label: "Tradição", value: "Séculos de adaptação" }
    ],

    tags: ["Agricultura Cearense", "Semiarido", "Agricultura Familiar"]
  }
}
];
// ===== TIMELINE DATA =====
const TIMELINE_DATA = [
  { year: "~8.000 a.C.", icon: "🪨", title: "Pré-história no Ceará", text: "Primeiros grupos humanos habitam o território cearense. Sítios arqueológicos como Sitio do Mocó (Piauí/CE) e grutas do Cariri preservam pinturas rupestres que documentam a presença humana milenar. Os grupos <strong>Tupinambá, Kariri e Tremembé</strong> são os ancestrais dos povos originários que os portugueses encontraram." },
  { year: "1534", icon: "⛵", title: "Chegada dos Portugueses", text: "Portugal cria a Capitania do Ceará, concedida a Antônio Cardoso de Barros. As primeiras expedições enfrentam resistência indígena intensa. O litoral é percorrido por missões francesas antes da consolidação portuguesa. A <strong>Serra de Ibiapaba</strong> torna-se ponto estratégico de contato e conflito." },
  { year: "1654–1704", icon: "⚔️", title: "Guerra dos Bárbaros", text: "Conflito devastador entre colonizadores e povos indígenas que resistiam à ocupação das terras do sertão. A guerra durou 50 anos e dizimou populações indígenas inteiras, especialmente os Kariri. Os sobreviventes foram aldeados em missões religiosas que <strong>transformaram e suprimiram as culturas originárias</strong>." },
  { year: "Séc. XVIII", icon: "🐄", title: "Civilização do Couro", text: "A pecuária torna-se atividade econômica dominante e forja a <strong>cultura do vaqueiro cearense</strong>. O gibão de couro, a vaquejada, as festas de rodeio e a comida sertaneja nascem desse período. Fortaleza é elevada à condição de vila em 1726 e de cidade em 1823." },
  { year: "1877–1879", icon: "☀️", title: "Grande Seca — O Grande Trauma", text: "A seca de 1877 matou <strong>mais de 500 mil pessoas</strong> — quase metade da população do Ceará. O êxodo para o Amazonas, para o Sul e para as cidades moldou profundamente a consciência social cearense. Desse evento nasceu a solidariedade forçada, a religiosidade intensificada e a poesia da seca que define a literatura nordestina." },
  { year: "1884", icon: "✊", title: "Abolição do Tráfico em Fortaleza", text: "Os jangadeiros liderados pelo <strong>Dragão do Mar (Francisco José do Nascimento)</strong> se recusam a transportar escravizados, tornando Fortaleza a primeira capital brasileira a abolir o tráfico de pessoas. Quatro anos antes da Lei Áurea, o Ceará dá lição de humanidade ao Brasil." },
  { year: "Séc. XX", icon: "📻", title: "Modernidade e Identidade Cultural", text: "A chegada do rádio, do cinema e da imprensa intensifica a construção de uma identidade cultural cearense moderna. Surgem o <strong>Pessoal do Ceará</strong> na música, os grandes poetas (Patativa do Assaré) e os primeiros filmes sobre a cultura nordestina. Fortaleza cresce e o interior resiste à homogeneização cultural." },
  { year: "1990–2000", icon: "🎬", title: "Renascimento Cultural", text: "O movimento <strong>Alumbramento</strong> no cinema, o Centro Cultural Dragão do Mar (1999), os festivais de música e teatro definem uma cena cultural cearense de vanguarda. A literatura (José Alcides Pinto, Moreira Campos, Rachel de Queiroz) ganha projeção nacional e internacional." },
  { year: "2000–hoje", icon: "🌐", title: "Cultura Cearense Global", text: "O cinema (Karim Aïnouz em Cannes 2019), a moda (Lino Villaventura no SPFW), o turismo cultural e a tecnologia projetam o Ceará internacionalmente. A identidade nordestina torna-se <strong>ativo cultural valioso</strong> numa era de globalização que paradoxalmente valoriza o local e o autêntico." }
];

// ===== INFLUENCIAS DATA =====
const INFLUENCIAS = [
  { css: "indigena", icon: "🪶", title: "Raiz Indígena", text: "Tupi, Kariri, Tremembé, Tabajara. Os povos originários deixaram na língua (<strong>mais de 3.000 palavras</strong> de origem tupi no português brasileiro), na culinária (tapioca, beiju, caju), na medicina popular (ervas da caatinga) e no profundo conhecimento ambiental do semi-árido que sustenta comunidades até hoje." },
  { css: "africana", icon: "🥁", title: "Raiz Africana", text: "Iorubá, Fon, Angola, Congo. Chegados como escravizados, os africanos e seus descendentes redefiniram a culinária (feijão de corda, temperos), a música (batuque, maracatu, afoxé), a religiosidade (Candomblé, Umbanda) e a resistência cultural. <strong>38 comunidades quilombolas</strong> preservam essa herança." },
  { css: "europeia", icon: "⚓", title: "Raiz Europeia", text: "Portugal e, brevemente, Holanda. Os europeus trouxeram a língua dominante, a religião católica, as técnicas de construção, a música para guitarra, a literatura escrita e a administração estatal. O <strong>catolicismo popular cearense</strong> é europeu na forma e nordestino na alma — síntese que produziu a religiosidade único do estado." }
];

// ===== TERRITORIOS DATA =====
const TERRITORIOS = [
  { header_bg: "linear-gradient(135deg, #3A1800, #5A2800)", emoji: "🌵", name: "Sertão", sub: "Interior semi-árido", text: "O sertão cearense é o coração da identidade do estado. Aqui viveu Patativa do Assaré, aqui se formou a cultura do vaqueiro, aqui a seca moldou o caráter e a criatividade do povo. Municípios como Quixadá, Crateús, Sobral e Canindé são polos da cultura sertaneja." },
  { header_bg: "linear-gradient(135deg, #1A3A5A, #0A2A4A)", emoji: "🌊", name: "Litoral", sub: "573 km de costa", text: "Do litoral oeste (Camocim, Jericoacoara) ao leste (Aracati, Canoa Quebrada), o litoral cearense tem culturas distintas. Os jangadeiros, os pescadores artesanais, o turismo de Jericoacoara e a cultura marítima constituem identidades específicas." },
  { header_bg: "linear-gradient(135deg, #1A3A1A, #0A2A0A)", emoji: "⛰️", name: "Serras", sub: "Microclimas únicos", text: "A Serra da Ibiapaba, a Chapada do Araripe, a Serra de Baturité — cada serra tem microclima e cultura específica. Guaramiranga, Pacoti e Mulungu são redutos de uma vida cultural mais próxima do Rio de Janeiro do século XIX do que do Ceará contemporâneo." },
  { header_bg: "linear-gradient(135deg, #2A1A4A, #1A0A38)", emoji: "🏙️", name: "Fortaleza", sub: "Capital e metrópole", text: "Com 2,6 milhões de habitantes, Fortaleza concentra as contradições e potências cearenses. Centro Cultural Dragão do Mar, cenas de arte urbana, polo gastronômico, hub de tecnologia — mas também centro de desigualdade que o hip-hop e a arte de rua documentam." },
  { header_bg: "linear-gradient(135deg, #2A2A0A, #4A4A1A)", emoji: "🌺", name: "Cariri", sub: "Sul do Ceará", text: "Considerado o 'coração cultural' do Ceará, o Cariri tem Juazeiro do Norte (Padre Cícero, romaria), Crato (paleontologia, cultura intelectual), Barbalha (artesanato, água mineral) e a Chapada do Araripe (Geopark UNESCO). Concentração única de patrimônios." }
];

// ===== DEPOIMENTOS DATA =====
const DEPOIMENTOS = [
  { text: "Eu saí do Ceará menino e voltei velho. Mas o Ceará não saiu de mim nunca. Ele mora na minha voz, no gosto do que eu como, no jeito que eu trato os outros. O Ceará não é um estado — é uma jeito de ser.", name: "Seu Zé do Gogó", info: "Agricultor, Quixeramobim — registrado em 1998", emoji: "👴" },
  { text: "A gente aprende aqui que a memória não é para guardar o passado — é para construir o futuro. Quando eu conto a história da minha avó rendeira para minha filha, eu não estou fazendo nostalgia. Estou dando a ela uma identidade para enfrentar o mundo.", name: "Maria Auxiliadora Feitosa", info: "Rendeira, Barbalha-CE — entrevista 2021", emoji: "👩" },
  { text: "O forró que meu pai tocava nas tardes de domingo era ciência — sabia o tempo de cada nota, o peso de cada verso. Hoje eu ouço aquele ritmo na música que componho, mesmo sem querer. A memória musical não some, ela se transforma.", name: "Edson Lima", info: "Músico, Juazeiro do Norte — depoimento 2019", emoji: "🧔" },
  { text: "Nasci na Prainha do Canto Verde, filha de jangadeiro, neta de jangadeiro. Quando as pessoas me perguntam 'onde você se sente em casa?', eu digo: no mar, ou olhando pro mar. A identidade do jangadeiro não é profissão — é cosmologia.", name: "Francisca dos Santos", info: "Pescadora e ativista, Beberibe-CE", emoji: "👩‍🦱" }
];

// ===== PILLARS DATA =====
const PILLARS = [
  { css: "oral", icon: "🗣️", name: "Tradição Oral", text: "O conto, o repente, o cordel e a reza são os primeiros arquivos do povo cearense. A transmissão oral não é inferior à escrita — é mais democrática, mais viva e mais adaptável. Pesquisadores como Leonardo Mota e Câmara Cascudo documentaram milhares de narrativas orais cearenses." },
  { css: "visual", icon: "👁️", name: "Memória Visual", text: "Xilogravuras, fotografias antigas, murais, ex-votos e as imagens dos santos nas capelas rurais constituem um arquivo visual da memória popular. Os ex-votos do Juazeiro, sozinhos, formam uma das maiores coleções de arte votiva das Américas." },
  { css: "pratica", icon: "🖐️", name: "Saberes Práticos", text: "Fazer beiju, trançar palha, construir uma jangada, plantar no sequeiro — esses saberes transmitidos pela prática são memória corporificada. Cada técnica artesanal preservada é um fragmento de saber acumulado por gerações de adaptação ao semi-árido." },
  { css: "festiva", icon: "🥁", name: "Memória Festiva", text: "As festas são o arquivo mais vívido da memória popular. O São João, a romaria, o reisado, a procissão — cada festa reencena uma história, renova uma identidade, conecta gerações. No Ceará, a festa é política: afirmar que existe é resistir ao esquecimento." },
  { css: "religiosa", icon: "🕯️", name: "Fé como Memória", text: "A religiosidade popular cearense é arquivo histórico. O milagre prometido, o ex-voto oferecido, a promessa cumprida — cada ato de fé é também um ato de memória. As romarias ao Juazeiro conectam gerações de devotos numa cadeia de continuidade cultural de mais de 150 anos." }
];

// ===== MAPA REGIOES DATA =====
const REGIOES_DATA = {
  noroeste: {
    name: "Noroeste Cearense",
    sub: "Litoral oeste e sertão noroeste",
    manifestacoes: [
      { emoji: "⛵", name: "Jangada e Pesca Artesanal", text: "Camocim e Jericoacoara são os maiores polos jangadeiros do litoral oeste. A pesca de lagosta é atividade econômica e cultural central." },
      { emoji: "🎭", name: "Bumba-meu-boi", text: "O litoral norte e noroeste tem forte tradição do Bumba-meu-boi, com grupos ativos em Acaraú e Camocim desde o século XIX." },
      { emoji: "🌊", name: "Turismo de Jericoacoara", text: "Antes vilarejo de pescadores, hoje Jericoacoara é destino internacional que mantém viva a cultura litorânea local." },
      { emoji: "🪶", name: "Povo Tremembé", text: "Os Tremembé de Almofala praticam o Torém, ritual de dança e canto reconhecido como patrimônio imaterial pelo IPHAN." }
    ]
  },
  norte: {
    name: "Norte Cearense",
    sub: "Litoral norte e Ibiapaba",
    manifestacoes: [
      { emoji: "⛰️", name: "Serra da Ibiapaba", text: "Microclima úmido que gerou cultura distinta: artesanato de bordado, produção de mel (abelha jandaíra), morangos e um jeito de vida serrano singular." },
      { emoji: "🎵", name: "Cantoria do Sertão Norte", text: "A tradição da cantoria de viola tem em Tianguá e Ubajara redutos históricos de mestres repentistas." },
      { emoji: "🏺", name: "Artesanato de Cipó", text: "A cestaria artesanal de cipó titica e junco, especialmente em Croatá e Nova Russas, é técnica reconhecida pelo Sebrae." },
      { emoji: "🌿", name: "Medicina Popular Indígena", text: "Comunidades próximas à Serra Grande preservam conhecimento etnobotânico sobre as plantas da Ibiapaba, transmitido desde os antepassados Tabajara." }
    ]
  },
  metropolitana: {
    name: "Região Metropolitana",
    sub: "Fortaleza e municípios adjacentes",
    manifestacoes: [
      { emoji: "🎭", name: "Centro Cultural Dragão do Mar", text: "Inaugurado em 1999, é o maior polo de artes cênicas do Nordeste com teatro, museu e anfiteatro." },
      { emoji: "🖌️", name: "Arte Urbana de Fortaleza", text: "Mais de 500 intervenções artísticas mapeadas, especialmente no Centro Histórico, Beira-Mar e Praia de Iracema." },
      { emoji: "🥁", name: "Maracatu e Afoxé", text: "Grupos de maracatu e afoxé com tradição secular em bairros como Pirambu e Serviluz preservam a cultura afrocearense." },
      { emoji: "🏛️", name: "Teatro José de Alencar", text: "Construído em 1910, é o maior símbolo do patrimônio histórico de Fortaleza — obra de ferro inglês e ornamentação neoclássica." }
    ]
  },
  sertao: {
    name: "Sertões Cearenses",
    sub: "Sertão central e Vale do Acaraú",
    manifestacoes: [
      { emoji: "🌵", name: "Cultura do Vaqueiro", text: "O gibão de couro, a vaquejada e os modos de vida do sertanejo têm no Inhamuns e sertão central sua expressão mais autêntica." },
      { emoji: "📜", name: "Cordel e Repente", text: "O sertão central é berço de cantadores e poetas populares que mantêm viva a tradição oral mais antiga do Ceará." },
      { emoji: "🌧️", name: "Profetas da Chuva", text: "Em Quixeramobim, a tradição dos profetas da chuva — que preveem o inverno pelo comportamento de animais e plantas — é patrimônio vivo único." },
      { emoji: "🐊", name: "Quixadá e os Monólitos", text: "Os monólitos graníticos de Quixadá criaram uma paisagem mítica que gerou lendas, arte e uma identidade territorial única no sertão central." }
    ]
  },
  jaguaribe: {
    name: "Jaguaribe",
    sub: "Vale do Rio Jaguaribe",
    manifestacoes: [
      { emoji: "🏺", name: "Cerâmica do Vale", text: "O Vale do Jaguaribe, especialmente Russas e São João do Jaguaribe, tem tradição de cerâmica utilitária e decorativa com estilos próprios." },
      { emoji: "🦦", name: "Cultura da Ribeira", text: "A vida às margens do Rio Jaguaribe gerou práticas culturais de rio — pesca, festividades aquáticas, lendas da Boiuna e do Jacaré-açu." },
      { emoji: "🌾", name: "Festa do Algodão", text: "Quando o algodão era rei do sertão, as festas de colheita eram eventos comunitários que moldaram a sociabilidade do Vale." },
      { emoji: "📖", name: "Aracati Histórico", text: "Aracati, à margem do Jaguaribe, tem um dos centros históricos mais preservados do interior do Ceará, com arquitetura do século XVIII." }
    ]
  },
  centrosul: {
    name: "Centro-Sul Cearense",
    sub: "Chapada do Araripe e Cariri",
    manifestacoes: [
      { emoji: "✝️", name: "Juazeiro e Padre Cícero", text: "A maior cidade do interior do Ceará é também o maior polo de romaria da América Latina, reunindo 2,5 milhões de romeiros por ano." },
      { emoji: "📜", name: "Literatura de Cordel", text: "Juazeiro do Norte é capital nacional do cordel — centro editorial, museus e feira de folhetos que remontam ao século XIX." },
      { emoji: "🌿", name: "Geopark Araripe UNESCO", text: "Primeiro geopark das Américas reconhecido pela UNESCO, articulando paleontologia, geologia e cultura na Chapada do Araripe." },
      { emoji: "🧵", name: "Renda Renascença", text: "Barbalha e Juazeiro concentram as maiores comunidades de rendeiras que praticam a renda renascença, patrimônio imaterial do IPHAN." }
    ]
  },
  sul: {
    name: "Sul Cearense",
    sub: "Cariri sul e fronteiras",
    manifestacoes: [
      { emoji: "🎶", name: "Música Caririense", text: "O Cariri sul tem festivais de música como o Cariri Canta e o Lajedo Gospel, que movimentam circuitos culturais regionais." },
      { emoji: "🐂", name: "Vaquejada do Cariri", text: "A vaquejada no sul do Ceará tem caráter festivo intenso — grandes eventos em Brejo Santo e Milagres reúnem famílias sertanejas." },
      { emoji: "🏺", name: "Artesanato de Salinas", text: "A região de Salinas da Margem preserva técnicas de tecelagem manual e artesanato de palha com padrões únicos da fronteira CE-PB." },
      { emoji: "🌺", name: "Festas de Reisado", text: "O sul cearense tem forte tradição de reisado — grupos que celebram os Reis Magos com teatro, música e dança em comunidades rurais." }
    ]
  }
};

// ===== MEMORIA REFLEXOES DATA =====
const REFLEXOES = [
  { icon: "📿", title: "Memória como Resistência", text: "No contexto de populações historicamente marginalizadas — indígenas, quilombolas, sertanejos —, lembrar é ato político. A memória cultural cearense é frequentemente memória de resistência ao apagamento sistemático promovido pela colonização e pela modernização excludente." },
  { icon: "🔄", title: "Transmissão e Continuidade", text: "A cultura cearense se reproduz principalmente pela transmissão direta entre gerações. A rendeira ensina a filha. O cantador forma o discípulo. O vaqueiro transmite o ofício. Esses processos de ensino informal são formas de preservação mais eficientes que museus para culturas vivas." },
  { icon: "🌊", title: "Memória da Migração", text: "Mais de 3 milhões de cearenses vivem fora do Ceará — em São Paulo, no Amazonas, no Rio de Janeiro. Cada comunidade de migrantes criou práticas de preservação cultural: forrós em São Paulo, igrejas nordestinas no Pará, que mantêm a memória cearense viva fora do território." },
  { icon: "⚡", title: "Memória Digital e Futuro", text: "A geração atual de cearenses usa plataformas digitais para preservar e reinventar memórias culturais — vídeos de artesãos no YouTube, podcasts sobre cordel, playlists de música regionalista. A memória migrou para o digital sem perder sua essência comunitária." }
];

// ===== RENDER FUNCTIONS =====

function renderCategories(filter = '') {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;

  let cats = CATEGORIES;
  if (filter && filter !== 'todas') {
    cats = CATEGORIES.filter(c => c.tags.includes(filter));
  }

  grid.innerHTML = cats.map(cat => `
    <div class="cat-card reveal" data-tags="${cat.tags.join(',')}" onclick="openCatModal(${cat.id})">
      <div class="cat-card-visual" style="background:${cat.color}">
        <span>${cat.emoji}</span>
        <span class="cat-card-badge">${cat.badge}</span>
      </div>
      <div class="cat-card-body">
        <div class="cat-card-name">${cat.name}</div>
        <div class="cat-card-desc">${cat.desc}</div>
        <div class="cat-card-footer">
          <span class="cat-card-count">${cat.items}</span>
          <span class="cat-arrow">→</span>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger reveal
  setTimeout(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 40);
    });
  }, 50);
}

function filterCategories(q) {
  const cards = document.querySelectorAll('.cat-card');
  cards.forEach(card => {
    const name = card.querySelector('.cat-card-name').textContent.toLowerCase();
    const desc = card.querySelector('.cat-card-desc').textContent.toLowerCase();
    const match = !q || name.includes(q.toLowerCase()) || desc.includes(q.toLowerCase());
    card.style.display = match ? '' : 'none';
  });
}

let activeFilter = 'todas';
function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('cat-search').value = '';
  renderCategories(filter);
}

function openCatModal(id) {
  const cat = CATEGORIES.find(c => c.id === id);
  if (!cat) return;
  const c = cat.content;

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-hero" style="background:${cat.color}">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <span class="modal-emoji">${cat.emoji}</span>
      <div class="modal-category">${cat.badge}</div>
      <h2 class="modal-title">${cat.name}</h2>
      <p class="modal-subtitle">${cat.desc}</p>
    </div>
    <div class="modal-body">
      <div>
        <div class="modal-section-title">Origem Histórica</div>
        <p class="modal-text">${c.origin}</p>
      </div>
      <div class="modal-highlights">
        ${c.highlights.map(h => `
          <div class="highlight-item">
            <span class="highlight-icon">${h.icon}</span>
            <div class="highlight-label">${h.label}</div>
            <div class="highlight-value">${h.value}</div>
          </div>
        `).join('')}
      </div>
      <div>
        <div class="modal-section-title">Contexto Social</div>
        <p class="modal-text">${c.context}</p>
      </div>
      <div>
        <div class="modal-section-title">Significado Cultural</div>
        <p class="modal-text">${c.significance}</p>
      </div>
      <div class="modal-quote">
        <blockquote>"${c.quote.text}"</blockquote>
        <cite>— ${c.quote.author} · ${c.quote.context}</cite>
      </div>
      <div>
        <div class="modal-section-title">Exemplos no Ceará</div>
        <p class="modal-text">${c.examples}</p>
      </div>
      <div>
        <div class="modal-section-title">Impacto Social e Econômico</div>
        <p class="modal-text">${c.impact}</p>
      </div>
      <div>
        <div class="modal-section-title">Curiosidades</div>
        <p class="modal-text">${c.curiosidades}</p>
      </div>
      <div>
        <div class="modal-section-title">Palavras-chave</div>
        <div class="modal-tags">
          ${c.tags.map((t, i) => `<span class="modal-tag ${['tag-orange','tag-green','tag-blue','tag-red'][i%4]}">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('detail-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openCat(id) { showPage('home'); setTimeout(() => openCatModal(id), 100); }

function closeModal() {
  document.getElementById('detail-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalIfBg(e) {
  if (e.target === document.getElementById('detail-modal')) closeModal();
}

// ===== PAGE SYSTEM =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();

  if (page === 'cultura') initCultura();
  if (page === 'memoria') initMemoria();
  if (page === 'mapa') initMapa();
}

// ===== CULTURA INIT =====
function initCultura() {
  const track = document.getElementById('timeline-track');
  if (track && !track.dataset.init) {
    track.dataset.init = '1';
    track.innerHTML = TIMELINE_DATA.map(item => `
      <div class="tl-item reveal">
        <div class="tl-dot">${item.icon}</div>
        <div class="tl-year">${item.year}</div>
        <div class="tl-title">${item.title}</div>
        <p class="tl-text">${item.text}</p>
      </div>
    `).join('');
    observeReveal();
  }

  const infGrid = document.getElementById('influencias-grid');
  if (infGrid && !infGrid.dataset.init) {
    infGrid.dataset.init = '1';
    infGrid.innerHTML = INFLUENCIAS.map(inf => `
      <div class="influencia-block ${inf.css}">
        <span class="inf-icon">${inf.icon}</span>
        <div class="inf-title">${inf.title}</div>
        <p class="inf-text">${inf.text}</p>
      </div>
    `).join('');
  }

  const terGrid = document.getElementById('territorios-grid');
  if (terGrid && !terGrid.dataset.init) {
    terGrid.dataset.init = '1';
    terGrid.innerHTML = TERRITORIOS.map(ter => `
      <div class="territorio-card reveal">
        <div class="territorio-header" style="background:${ter.header_bg}">
          <span class="territorio-emoji">${ter.emoji}</span>
          <div class="territorio-name">${ter.name}</div>
          <div class="territorio-sub">${ter.sub}</div>
        </div>
        <div class="territorio-body">
          <p class="territorio-text">${ter.text}</p>
        </div>
      </div>
    `).join('');
    setTimeout(observeReveal, 100);
  }
}

// ===== MEMORIA INIT =====
let carouselIdx = 0;

function initMemoria() {
  const pillarsGrid = document.getElementById('pillars-grid');
  if (pillarsGrid && !pillarsGrid.dataset.init) {
    pillarsGrid.dataset.init = '1';
    pillarsGrid.innerHTML = PILLARS.map(p => `
      <div class="pillar-card ${p.css} reveal">
        <span class="pillar-icon">${p.icon}</span>
        <div class="pillar-name">${p.name}</div>
        <p class="pillar-text">${p.text}</p>
      </div>
    `).join('');
    setTimeout(observeReveal, 100);
  }

  const carousel = document.getElementById('depoimentos-carousel');
  if (carousel && !carousel.dataset.init) {
    carousel.dataset.init = '1';
    carousel.innerHTML = `
      ${DEPOIMENTOS.map((d, i) => `
        <div class="depoimento-slide ${i === 0 ? 'active' : ''}">
          <div class="depoimento-card">
            <div class="dep-quote-mark">"</div>
            <p class="dep-text">${d.text}</p>
            <div class="dep-author">
              <div class="dep-avatar">${d.emoji}</div>
              <div>
                <div class="dep-name">${d.name}</div>
                <div class="dep-info">${d.info}</div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
      <div class="carousel-nav">
        <button class="carousel-btn" onclick="changeSlide(-1)">←</button>
        <div class="carousel-dots">
          ${DEPOIMENTOS.map((_, i) => `<div class="c-dot ${i === 0 ? 'active' : ''}" onclick="goSlide(${i})"></div>`).join('')}
        </div>
        <button class="carousel-btn" onclick="changeSlide(1)">→</button>
      </div>
    `;
  }

  const reflexao = document.getElementById('memoria-reflexao');
  if (reflexao && !reflexao.dataset.init) {
    reflexao.dataset.init = '1';
    reflexao.innerHTML = REFLEXOES.map(r => `
      <div class="pillar-card oral reveal" style="gap:1rem;">
        <span style="font-size:2rem;">${r.icon}</span>
        <div class="pillar-name">${r.title}</div>
        <p class="pillar-text">${r.text}</p>
      </div>
    `).join('');
    setTimeout(observeReveal, 100);
  }
}

function changeSlide(dir) {
  carouselIdx = (carouselIdx + dir + DEPOIMENTOS.length) % DEPOIMENTOS.length;
  updateCarousel();
}

function goSlide(idx) {
  carouselIdx = idx;
  updateCarousel();
}

function updateCarousel() {
  document.querySelectorAll('.depoimento-slide').forEach((s, i) => {
    s.classList.toggle('active', i === carouselIdx);
  });
  document.querySelectorAll('.c-dot').forEach((d, i) => {
    d.classList.toggle('active', i === carouselIdx);
  });
}

// ===== MAPA INIT =====
function initMapa() {}

function selectRegion(id) {
  document.querySelectorAll('.mapa-region').forEach(r => r.classList.remove('selected'));
  const el = document.getElementById(`reg-${id}`);
  if (el) el.classList.add('selected');

  const data = REGIOES_DATA[id];
  if (!data) return;

  document.getElementById('mapa-empty').style.display = 'none';
  const detail = document.getElementById('mapa-region-detail');
  detail.style.display = 'block';
  detail.className = 'region-detail';
  detail.innerHTML = `
    <div class="region-header">
      <div class="region-name">${data.name}</div>
      <div class="region-sub">${data.sub}</div>
    </div>
    <div class="region-manifestacoes">
      ${data.manifestacoes.map(m => `
        <div class="manifestacao-item">
          <span class="manifestacao-emoji">${m.emoji}</span>
          <div>
            <div class="manifestacao-name">${m.name}</div>
            <div class="manifestacao-text">${m.text}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ===== SEARCH =====
function openSearch() {
  document.getElementById('search-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('search-input').focus(), 100);
}

function closeSearch() {
  document.getElementById('search-modal').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML = '';
}

function closeSearchIfBg(e) {
  if (e.target === document.getElementById('search-modal')) closeSearch();
}

function performSearch(q) {
  const results = document.getElementById('search-results');
  if (!q.trim()) { results.innerHTML = ''; return; }

  const matches = CATEGORIES.filter(c =>
    c.name.toLowerCase().includes(q.toLowerCase()) ||
    c.desc.toLowerCase().includes(q.toLowerCase()) ||
    c.content.tags.some(t => t.toLowerCase().includes(q.toLowerCase()))
  );

  if (!matches.length) {
    results.innerHTML = `<div style="padding:1.5rem;text-align:center;color:var(--dust);font-style:italic;">Nenhum resultado para "${q}"</div>`;
    return;
  }

  results.innerHTML = matches.map(c => `
    <div class="search-result-item" onclick="closeSearch(); openCatModal(${c.id})">
      <span class="search-result-emoji">${c.emoji}</span>
      <div>
        <div class="search-result-name">${c.name}</div>
        <div class="search-result-cat">${c.badge}</div>
      </div>
    </div>
  `).join('');
}

// ===== NAV =====
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
}

// ===== SCROLL REVEAL =====
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.style.background = 'rgba(18,9,10,0.98)';
  } else {
    header.style.background = 'rgba(18,9,10,0.96)';
  }
});

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeSearch();
  }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  observeReveal();
});
