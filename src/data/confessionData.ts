export interface ConfessionArticle {
  title: string;
  text: string;
  references: string;
}

export interface ConfessionChapter {
  id: string;
  roman: string;
  title: string;
  articles: ConfessionArticle[];
}

export const CONFESSION_METADATA = {
  institution: "Aliança das Igrejas Cristãs Evangélicas do Brasil",
  motto: "Jesus Cristo, nosso Fundamento",
  title: "Confissão de Fé da AICEB",
  approval: "Aprovada em novembro de 2024 na Convenção Geral Extraordinária da AICEB em sua sede, São Luís - Maranhão."
};

export const CONFESSION_DATA: ConfessionChapter[] = [
  {
    id: "escrituras",
    roman: "I",
    title: "Das Sagradas Escrituras",
    articles: [
      {
        title: "Da extensão",
        text: "Cremos, confessamos e ensinamos que a Bíblia - Antigo Testamento e Novo Testamento – é a infalível Palavra de Deus (1) em linguagem humana (2). Sendo o Antigo Testamento composto de 39 livros, que são: Gênesis – Êxodo – Levítico – Números – Deuteronômio – Josué – Juízes – Rute – 1º Samuel – 2º Samuel – 1º Reis – 2º Reis – 1º Crônicas – 2º Crônicas – Esdras – Neemias – Ester – Jó – Salmos – Provérbios – Eclesiastes – Cântico dos Cânticos – Isaías – Jeremias – Lamentações – Ezequiel – Daniel – Oséias – Joel – Amós – Obadias – Jonas – Miquéias – Naum – Habacuque – Sofonias – Ageu – Zacarias – Malaquias. E o Novo Testamento composto de 27 livros, que são: Mateus – Marcos – Lucas – João – Atos – Romanos – 1ª Coríntios – 2ª Coríntios – Gálatas – Efésios – Filipenses – Colossenses – 1ª Tessalonicenses – 2ª Tessalonicenses – 1ª Timóteo – 2ª Timóteo – Tito – Filemom – Hebreus – Tiago – 1ª Pedro – 2ª Pedro – 1ª João – 2ª João – 3ª João – Judas – Apocalipse.",
        references: "(1) Sl 119.89; Hb 1.1; Is 40.8; Mt 24.35; Lc 24.44,45; Jo 10.35; Rm 3.2; 1ª Pe 1.25; 2ª Pe 1.21. (2) Is 40.8; Mt 22.29; 24.35; Hb 1.1,2; Lc 16.29; Rm 16.25,26. Êx 24.4; 2ª Sm 23.2; At 3.21; 2ª Pe 1.21; Rm 1.16; 15.4; 2ª Tm 3.16,17; 1ª Pe 2.2; Hb 4.12; Ef 6.17; Jo 5.39; Sl 19.7-9; Sl 119.105; Pv 30.5; Jo 12.47,48; Jo 17.17; Rm 2.12,13; Rm 3.4; 2º Cr 24.19; Is 8.20; Is 34.16; Mt 5.17,18; At 17.11; Gl 6.16; Fp 3.16; 2ª Tm 1.13."
      },
      {
        title: "Da inspiração e conteúdo",
        text: "Cremos, confessamos e ensinamos que a Bíblia é a própria Palavra de Deus e que esta Palavra é o fiel registro da revelação (1) que Deus fez de Si mesmo aos homens (2). Sendo Deus Seu verdadeiro autor, foi escrita por homens santos e movidos pelo Espírito Santo (3). Sua mensagem é perfeita, inspirada verbal e plenariamente - cada palavra e a totalidade de seu conteúdo - sem mescla de erros (4), sendo o mais precioso tesouro de instrução divina (5).",
        references: "(1) Sl 19; 2ª Tm 3.15-17; 2ª Pe 1.19-21; Dt 18.18-19; Jr 1.4-12; Jo 5.45-47; Mt 24.35; Mc 8.38; Lc 1.20. (2) Jo 1.1-14; Jo 5.24; Jo 6.63-68; Mt 10.19-20; Jo 14.26; Jo 15.26-27; Jo 16.13; Cl 4.16; 2ª Ts 3.14-15; 1ª Co 14.37-38; 1ª Co 2.12-13. (3) 2ª Tm 3.16; 2ª Pe 1.19-21. (4) Sl 119.89. (5) Sl 1; Jd 3."
      },
      {
        title: "Da autoridade",
        text: "Cremos, confessamos e ensinamos que a Bíblia, assim como seu Autor, é a autoridade final sobre toda a esfera da vida humana (1), sendo o fiel padrão pelo qual devem ser aferidas todas as doutrinas e a conduta dos homens, e nossa única e suprema regra de fé e prática (2).",
        references: "(1) Êx 4.22; Lc 24.44; 2ª Tm 3.17-18; 2ª Pe 3.15-16; 1ª Co 14.37. (2) 2º Cr 24.19; Is 8.20; Is 34.16; Mt 5.17-18; At 17.11; Gl 6.16; Fp 3.16; 2ª Tm 1.13."
      },
      {
        title: "Da interpretação",
        text: "Cremos, confessamos e ensinamos que a Bíblia só pode ser corretamente interpretada e vivida à luz da glória do Pai, da Pessoa e dos ensinos de Nosso Senhor Jesus Cristo e da iluminação do Espírito Santo (1), por pessoas que foram regeneradas (2). Entendemos que a Bíblia interpreta a Si própria, que o Novo Testamento esclarece o Antigo Testamento (3), sendo essencial manter o sentido histórico, gramatical e literário dos seus escritores, dentro de seus contextos culturais e, somente após a observância desses pontos, pode-se fazer uma aplicação para o contexto atual (4).",
        references: "(1) 2ª Tm 2.15; Hb 1.1-4; Sl 119.18; Jo 8.43; 8.32; Cl 1.9; 2ª Co 4.6; Jo 16.13. (2) 1ª Co 2.10; 1ª Co 2.14-16; 2ª Co 3.3-4; 2ª Co 3.12-18. (3) Lc 24.25-27; Cl 2.17; 2ª Co 3.6. (4) Os 6.3; Rm 1.19; 1ª Co 2.12."
      }
    ]
  },
  {
    id: "divindade",
    roman: "II",
    title: "Da Divindade",
    articles: [
      {
        title: "De Deus-Pai: seu ser e atributos",
        text: "Cremos, confessamos e ensinamos que há um só Deus (1), Espírito puríssimo, sem corpo, membros ou qualquer forma (2), infinito, eterno e imutável, sábio, perfeito em santidade, em justiça, em verdade, em amor, em bondade; Ele é onipotente, onisciente e onipresente (3). Ele é o criador, sustentador, redentor, juiz e Senhor da história do universo, que governa pelo Seu poder, dispondo de todas as coisas de acordo com o Seu eterno decreto (4). Deus é infinito em santidade e em todas as demais perfeições (5).",
        references: "(1) Dt 6.4; 1ª Co 8.4; Jr 10.10; Jo 17.3. (2) Jo 4.24; Dt 4.15-16; Lc 24.39. (3) Êx 3.14; Sl 145.3; Sl 90.2; Tg 1.17; Ml 3.6; Ap 4.8; Êx 34.6-7; Gn 17.1; Rm 16.27. (4) Gn 1.1-31; Hb 11.3; Sl 33.9; Hb 1.3; Cl 1.17; Is 47.4; Sl 111.9; Dt 10.17; Ap 3.14. (5) Is 6.3; Sl 147.5; Mt 5.48; Jó 11.7-9; Jó 26.14."
      },
      {
        title: "De Deus-Filho: sua pessoa e divindade",
        text: "Cremos, confessamos e ensinamos que Jesus Cristo, segundo a Sua natureza Divina, é o Filho Único de Deus (1). Não feito e nem criado – pois assim seria uma criatura – sendo de igual substância e coeterno com o Pai (2), o resplendor exato de sua glória e de seu ser, compartilhando todos os atributos da divindade (3). Cremos que o Deus-Filho se fez carne, assumindo realmente a verdadeira natureza humana com todas as suas limitações, mas sem pecado (4). Sendo concebido no ventre da bendita Maria, ainda virgem (5), pelo poder do Espírito Santo, sem a necessidade de pai humano, Ele não somente assumiu a natureza humana quanto ao corpo, mas também a verdadeira alma humana, para que em tudo fosse verdadeiro homem (6). Pois estando o homem perdido tanto a alma quanto o corpo, Ele deveria assumir ambos para salvá-los (7).",
        references: "(1) Jo 3.16; Mt 17.5; Jo 1.14,18; Rm 1.4. (2) Jo 1.1-5; Cl 1.16-17; Jo 17.5. (3) Hb 1.13; Jo 10.30; Cl 1.15. (4) Jo 11.35; Mt 4.2; Mt 8.24; Hb 4.15; 2ª Co 5.21; 1ª Pe 2.22; 1ª Jo 3.5. (5) Mt 1.18-25; Lc 1.26-38; Lc 2.1-7; Lc 1.43. (6) Jo 1.1,14; 1ª Jo 5.20; Fp 2.6; Gl 4.4; Hb 2.14. (7) Jo 1.1,14; 1ª Jo 5.20; Fp 2.6; Gl 4.4; Hb 2.14; Cl 2.9; Rm 9.5; Rm 1.3,4; 1ª Tm 2.5; Jo 12.27."
      },
      {
        title: "De Deus-Espírito Santo: sua pessoa e divindade",
        text: "Cremos, confessamos e ensinamos que o Espírito Santo é Senhor, Vivificador, Regenerador, Consolador, Santificador, Preservador e Juiz (1), procedente do Pai e do Filho (2), igualmente coeterno e de mesma substância com o Pai e o Filho, compartilhando de todos os atributos com eles (3). Que falou por meio dos profetas e apóstolos (4), sendo Ele o mestre e ensinador da igreja (5).",
        references: "(1) 2ª Co 3.17; Jo 3.5-7; Jo 14.26; 15.26; 2ª Ts 2.13. (2) Jo 15.26; Gl 4.6. (3) At 5.3-4; 1ª Co 2.10; 1ª Co 3.16. (4) 2ª Pe 1.21; 1ª Co 2.12-13; At 16.6-10. (5) Jo 14.26; 1ª Co 12.8-11; 1ª Tm 3.16; Jo 16.3-15."
      },
      {
        title: "Da Santíssima Trindade",
        text: "Cremos, confessamos e ensinamos que, em Sua triunidade, o Deus Eterno subsiste, se revela e atua como três pessoas: Deus O Pai, Deus O Filho e Deus O Espírito Santo (1), que são pessoas distintas, contudo possuem mesma essência, sem divisão, iguais em poder, eternidade e dignidade (2). Por isso, a Ele devemos todo o amor, culto e obediência (3).",
        references: "(1) Mt 3.16-17; Mt 28.19; 2ª Co 13.13-14; 1ª Jo 5.7. (2) Êx 3.14; Jo 14.11; 1ª Co 8.6. (3) Ap 5.12-14."
      }
    ]
  },
  {
    id: "decretos",
    roman: "III",
    title: "Dos Decretos de Deus",
    articles: [
      {
        title: "Da origem",
        text: "Cremos, confessamos e ensinamos que Deus decretou em si mesmo todas as coisas, o que venha a acontecer, desde a eternidade, mediante o seu sábio, santo, imutável e livre conselho de sua própria vontade (1). Não obstante, Deus não é o autor do pecado e não tem qualquer comunhão com ele (2); a vontade da criatura não é violada para a realização de Seu decreto (3).",
        references: "(1) Is 46.10; Ef 1.11, 2; Hb 6.17. (2) Tg 1.13; 1ª Jo 1.5. (3) At 4.27,28; Jo 19.11; Is 45:1-7."
      },
      {
        title: "Do propósito e da extensão",
        text: "Cremos, confessamos e ensinamos que por mais que Deus conheça tudo o que venha a acontecer, ele não decretou qualquer coisa porque a previu como futura, mas sim por meio de seu decreto e para a sua glória (1). Segundo este decreto, alguns anjos são eleitos, e homens são predestinados para a vida eterna por meio de Jesus Cristo (2), enquanto outros são deixados a agir em seus pecados para a sua justa condenação (3).",
        references: "(1) At 15.18; Rm 9:14-18. (2) Ef 1.11,12; 1ª Tm 5.21; Mt 25.34; Ef 1.5,6. (3) Rm 9.22,23; Jd 4; Rm 1:21-24; Jo 17:12."
      }
    ]
  },
  {
    id: "anjos",
    roman: "IV",
    title: "Dos Anjos",
    articles: [
      {
        title: "Da criação",
        text: "Cremos, confessamos e ensinamos que, dentre as obras da criação, Deus criou os anjos em número limitado, com hierarquia e categorias (1). Os anjos são seres espirituais, podendo, entretanto, assumir forma corpórea e interagir com a criação em cumprimento às ordens do Criador (2). Como criaturas, os anjos não são cultuados ou venerados, nem se lhes devem dirigir orações e cânticos; todavia são dignos de respeito (3).",
        references: "(1) Ne 9.6; Cl 1.16,17; Ap 4.11. (2) Gn 19.1-2; Lc 1.26-28; Jo 20.11-15; Hb 13.2. (3) Ap 19.9-10; Ap 22.8-9; Sl 89.6."
      },
      {
        title: "Da Função",
        text: "Cremos, confessamos e ensinamos que esses seres espirituais têm funções específicas, que são: adorar a Deus continuamente, servir aos santos que hão de herdar a salvação e ser instrumentos de juízo divino para os ímpios (1).",
        references: "(1) Sl 148.2-5; Hb 1.14; Sl 91.11-12; Nm 22.31; 2º Rs 6.17."
      },
      {
        title: "Da queda",
        text: "Cremos, confessamos e ensinamos que, nos tempos passados, usando de sua liberdade de escolha, alguns anjos mudaram seu estado original e se rebelaram contra Deus sendo liderados pelo Diabo (1), e foram condenados, humilhados na cruz e aguardam o dia do juízo final para seu eterno tormento (2).",
        references: "(1) Ap 12.7-17; Jd 6. (2) 2ª Pe 2.4; Lc 10.18; Jd 6; Cl 2:14-15."
      },
      {
        title: "De Satanás",
        text: "Cremos, confessamos e ensinamos que, desde então, Satanás, como um anjo criado e caído, tornou-se inimigo da igreja, príncipe das trevas e, junto com suas hostes demoníacas, existe atuando neste mundo caído (1). Mas a igreja de Cristo tem a vitória sobre as forças espirituais do mal já assegurada pela morte e ressurreição de Cristo (2), que também garantiu a derrota final de Satanás (3).",
        references: "(1) Lc 10.18; Ap 12.7; Ap 16.14; 2ª Co 4.4-6; Ef 6.12. (2) Rm 16.20; Cl 2.15; Mt 16.18; 25.41. (3) Ap 20.10."
      }
    ]
  },
  {
    id: "homens",
    roman: "V",
    title: "Dos Homens",
    articles: [
      {
        title: "Da sua criação",
        text: "Cremos, confessamos e ensinamos que, depois de ter feito as demais criaturas, Deus criou o homem no sexto dia, biologicamente em dois gêneros, macho e fêmea, diferentes em função, iguais em dignidade e valor como representantes federais de toda a raça humana, à Sua imagem e semelhança (1), ocupando por determinação divina, uma posição singular dentre as coisas criadas (2). Cremos que a humanidade foi criada plenamente desenvolvida física, moral, emocional e espiritualmente, originalmente dotada de retidão moral, santidade e liberdade de escolha, sendo instruída pelo Criador quanto a sua natureza e propósito - glorificá-lo e desfrutar de sua presença eternamente (3).",
        references: "(1) Gn 1.31; Gn 1.26,27; Gn 9.6; 1ª Co 11.7. (2) Sl 8.5,6. (3) Sl 16.11; Sl 27.4."
      },
      {
        title: "Da sua constituição",
        text: "Cremos, confessamos e ensinamos que a imagem e semelhança de Deus se estende à pessoa inteira do homem. Cremos que Deus criou o homem do pó da terra - uma parte material - e lhe soprou nas narinas o fôlego de vida (1) – e uma parte imaterial - também chamada nas Sagradas Escrituras de alma e espírito, de forma correlata (2), que faz do ser humano único e distinto de todos os demais seres criados. Cremos que essa constituição dual só é separada temporariamente e como consequência do pecado, por ocasião da morte física (3), mas que será eternamente reunida na ocasião da volta de Cristo, em um corpo incorruptível.",
        references: "(1) Gn 2.7; Gn 2.15; Gn 3.19; Ec 12.7; Ap 21.16-27. (2) Mt 10.28; 1ª Co 7.34; Tg 2.26. (3) Gn 35.18; 1º Rs 17.21; Ec 12.7; 1ª Ts 5:23; 1º Jo 12:10; Lc 1:46-56; 1ª Co 1:56; 1ª Co 15.52."
      },
      {
        title: "Do pacto de Deus com o homem",
        text: "Cremos, confessamos e ensinamos que Deus escolheu relacionar-se com a humanidade através do vínculo de Aliança (1). Cremos que no Éden Deus estabeleceu com o homem uma Aliança da Criação, com promessas de bênçãos, em caso de obediência, e punição, em caso de desobediência (2), e que o homem optou pela desobediência. Coube ao Senhor fazer uma Aliança da Graça, na qual ele oferece graciosamente - àqueles que creem - a salvação eterna por meio da obra de Jesus Cristo. E que essa Aliança é revelada exclusivamente nas Escrituras, em todas as ações redentivas de Deus, até a sua plena revelação em Jesus Cristo (3).",
        references: "(1) Os 6.7; Rm 5.12-21. (2) Gn 1.28-30; Gn 2.15-17; Gn 3.12. (3) Rm 1.15-16; Hb 1.1-4; Jo 1.29."
      },
      {
        title: "Da queda do homem e seu estado atual",
        text: "Cremos, confessamos e ensinamos que nossos primeiros pais, dotados de liberdade de escolha, transgrediram deliberadamente a Lei de Deus em um ato de rebeldia (1), caindo assim de seu estado original de santidade e retidão moral, incorrendo em sua total depravação e justa condenação (2), sendo o homem plenamente responsável pelo seu ato pecaminoso. Sendo os representantes de toda a humanidade, por desígnio de Deus, a culpa do seu pecado, incapacidade e aversão a todo o bem, e inteira disposição para o mal, foi imputada a toda a sua descendência que deles procede por geração ordinária (3).",
        references: "(1) Gn 2.17; Gn 3.6. (2) Rm 3.10-18; Rm 6.23. (3) Rm 5.12,18,19."
      }
    ]
  },
  {
    id: "pecado",
    roman: "VI",
    title: "Do Pecado",
    articles: [
      {
        title: "Da queda do homem",
        text: "Cremos, confessamos e ensinamos que, na ocasião da criação, Deus concedeu ao ser humano uma lei justa (1), cuja observância resultaria em vida, enquanto a desobediência acarretaria a morte (2). No entanto, ao exercer sua liberdade inicial, o ser humano sucumbiu à tentação de Satanás, transgredindo o mandamento de Deus (3). Esse ato culminou na decadência de sua retidão original, e na ruptura da comunhão com Deus (4).",
        references: "(1) Gn 1.26,27; Gn 2.15-17; Sl 119.142; Rm 2.14,15; Hb 8.10. (2) Gn 2.17; Gn 3.24; Dt 30.15-20; Ez 18.4; Rm 5.12; Rm 6.23. (3) Gn 3.1-7; 2ª Co 11.3; 1ª Jo 3.8. (4) Gn 3.22-24; Gn 3.8-10; Is 59.2; Rm 5.12."
      },
      {
        title: "Das consequências do pecado",
        text: "Cremos, confessamos e ensinamos que o pecado manifesto pelo primeiro casal resultou em culpa, corrupção e condenação (1). Consequentemente, tornaram-se escravos do pecado e inteiramente corrompidos em todas as faculdades, do corpo e da alma (2). Essa corrupção não se restringiu apenas a eles, pois como o primeiro casal representava toda a humanidade, a realidade de morte, culpa e corrupção foi transmitida a toda a sua descendência (3), corrompendo também a boa criação de Deus. Portanto, em decorrência do pecado, o estado atual do ser humano é de morte espiritual (4), tornando-o incapaz, por mérito próprio, de buscar qualquer forma de aproximação, reconciliação, redenção ou remissão de seus pecados, o que o torna merecedor de justa condenação eterna (5).",
        references: "(1) Gn 3.1-7; Gn 3.16,17; Rm 3.23; Rm 5.12. (2) Rm 6.16; Jo 8.34; Gn 6.5; Jr 17.9; Rm 3.10; Rm 1.21. (3) Rm 5.12,18-19; 1ª Co 15.22. (4) Ef 2.1-5; Cl 2.13; Rm 3.23; Is 59.2; Jo 8.34. (5) Rm 3.9-20; Rm 5.12; Rm 6.23; Ap 20.15."
      },
      {
        title: "Da punição pelo pecado",
        text: "Cremos, confessamos e ensinamos que todo pecado constitui transgressão da justa lei de Deus (1), resultando, por sua própria natureza, na culpabilidade do pecador (2). Essa culpa subjuga o ser humano à ira de Deus (3) e à maldição da Lei (4), tornando-o, assim, certo da morte física, exceto por vontade de Deus ou volta de Cristo, participante da morte espiritual e passível de morte eterna e submetendo-o a todas as misérias espirituais, temporais e eternas (5).",
        references: "(1) Mt 5.21,22; 1ª Jo 3.4; Rm 6.23. (2) Ez 18.4; Rm 3.23; Rm 5.12. (3) Rm 1.18; Ef 2.3; Jo 3.36. (4) Dt 27.26; Gl 3.10; Hb 10.28,29. (5) Is 59.2; Mt 25.41; Rm 6.23; Ap 21.8."
      }
    ]
  },
  {
    id: "salvacao",
    roman: "VII",
    title: "Da Salvação",
    articles: [
      {
        title: "De Cristo o Mediador da Salvação",
        text: "Cremos, confessamos e ensinamos que a salvação é outorgada por Deus (1), somente por Sua graça (2), mediante Jesus Cristo O Salvador, e O único Mediador entre Deus e os homens (3) que, havendo em tudo executado a vontade do Pai (4), ofereceu-se em sacrifício vivo e eficaz por seu povo (5), satisfazendo todos os reclames da justiça divina (6) e garantindo a todos os que nele creem, a vida eterna (7).",
        references: "(1) Dt 7.7-8; Sl 37.39; Is 53.4-6; Jo 15.16; Rm 8.30. (2) Ef 2.8-9; 2ª Tm 1.9. (3) Rm 5.1; Jo 14.6; 1ª Tm 2.5; At 4.12. (4) Jo 4.34; Jo 6.38; Jo 8.42. (5) Is 53.11-12; Sl 111.9; Jo 10.11, 14, 15; Jo 17.6,19-21. (6) Rm 3.24-26; Cl 2.14; Is 53.6; Gl 3.13; 2 Co 5.21; 1ª Pe 3.18. (7) Rm 8.30, Rm 38-39; Jo 3.16; Jo 10.27-28; Jo 11.25; At 13.48; Ap 21.3."
      },
      {
        title: "Do Espírito Santo na aplicação da Salvação",
        text: "Cremos, confessamos e ensinamos que o Espírito Santo fazendo uso das verdades reveladas nas Sagradas Escrituras (1), e de forma sobrenatural, vivifica o pecador morto em delitos e pecados (2). O Espírito Santo habilita o pecador a crer em Jesus (3), muda a disposição essencial do coração persuadindo esse pecador a recebê-lo como seu único Senhor, Salvador e Mediador diante do Pai (4), batiza e sela o pecador no corpo de Cristo no ato da regeneração (5) e, a partir desse momento e para sempre, habita nos verdadeiros crentes preservando-os até o dia de Cristo (6).",
        references: "(1) Rm 10.16-18; 1ª Co 2.14; 2ª Co 3.12-18; 1ª Pe 1.22-25. (2) Ez 36.25-26; Jo 3.1-8; Jo 5.25; Ef 2.4-5. (3) Dt 30.6; Ez 36.27; Jo 1.12-13; At 16.14. (4) Sl 110.1-3; Ct 1.4; Jr 32.38-40; Jo 6.63,65; Hb 4.11-12. (5) Rm 6.3-4; 1ª Co 12.13; Cl 2.11-12. (6) Jo 14.16; Ef 1.13-14."
      },
      {
        title: "Da Ordem da Salvação",
        text: "Cremos, confessamos e ensinamos que a salvação compreende o propósito progressivo de Deus que inclui: eleição (1), regeneração (2), vocação eficaz (3), conversão (cujos elementos são fé e arrependimento) (4), justificação (5), adoção (6), santificação (7), perseverança (8) e glorificação (9).",
        references: "(1) Dt 7.6-8; Ef 1.4; Ef 9-11; 1ª Ts 1.4; 2ª Ts 2.13-14; 2ª Tm 1.9; Tt 1.1; 1ª Pe 1.1-2. (2) Ez 36.25-28; Jo 1.12-13; Jo 3.3, Jo 5-8; Ef 2.1,4,5; Tt 3.4-7; 1ª Pe 1.22-23. (3) Mt 22.22; Jo 5.25; Jo 10.26-27; At 2.39; 2ª Tm 1.9. (4) Lm 5.21; Os 14.12; Zc 12.10; Mt 3.7-8; Lc 22.31-32; At 2.37-38; At 11.18; Rm 2.4; Rm 3.28; Ef 2.8-9; 2ª Tm 2.25-26; (5) Is 53.5-6; Jr 33.16; Rm 3.24; Rm 4.5-8; Rm 5.1,2,17; Rm 8.30; 1ª Co 1.30-31; 2ª Co 5.21; Gl 3.6-9; Fp 3.8-9. (6) Jo 1.12-13; Rm 8.14-17; 2ª Co 6.18; Gl 4.4-6; Ef 1.5. (7) Lv 20.7; Jo 17.17; At 20.32; Rm 1.7; Rm 6.5,6,14; 1ª Co 1.1,2; Gl 5.24; 1ª Ts 4.7; 1ª Ts 5.23; Hb 12.14; 1ª Pe 1.14-16. (8) Sl 89.30-33; Jr 31.3; Lm 3.22-25; Ml 3.6; Jo 10.28-29; Lc 22.31,32,61,62; Jo 14.19; Rm 8.38-39; 1ª Co 11.32; Hb 6.17-18; 1ª Jo 2.19. (9) Mt 13.43; Jo 6.44; Rm 8.29-30; Cl 3.4; 2ª Ts 1.9-10; 2ª Tm 4.8; 1ª Pe 1.4-5; 1ª Pe 5.4; Ap 22.3-5."
      }
    ]
  },
  {
    id: "igreja",
    roman: "VIII",
    title: "Da Igreja",
    articles: [
      {
        title: "Da Igreja invisível",
        text: "Cremos, confessamos e ensinamos que a Igreja do Senhor Jesus, em sentido espiritual e invisível, é constituída por todos os eleitos de Deus que já foram, dos que agora são, e dos que ainda serão reunidos em um só corpo sob Cristo, sua Cabeça (1), salvos por Sua graça, redimidos pelo sacrifício de Cristo, santificados e selados pelo Espírito Santo (2). É una, santa, universal e fora dela não há salvação (3).",
        references: "(1) 2ª Tm 2.19; Ef 1.10, Ef 22-23; Ef 4.3-6; Jo 10.14-16; Hb 12.22-24; Cl 1:18; Ef 2.19; Ef 5.23. (2) Ef 2.8; Tt 3.5. (3) Ef 5.23, 25, 27, 32; 2ª Co 11.2; Cl 1.18; Ef 1.22-23; 1ª Pe 5.1-4; Mt 23.8-10; 1ª Jo 2.18-19."
      },
      {
        title: "Da Igreja visível",
        text: "Cremos, confessamos e ensinamos que a verdadeira igreja visível se constitui de pessoas que confessam a fé em Jesus Cristo, receberam o batismo nas águas, vivem em comunhão com os irmãos, rejeitam o pecado e permanecem na congregação dos fiéis (1). A verdadeira igreja visível é caracterizada pela ministração correta da Palavra de Deus, das ordenanças sagradas e da disciplina eclesiástica e membresia regenerada pelo Espírito Santo (2).",
        references: "(1) Mt 28.19-20; Hb 10.24-25. (2) Ef 2.19-20; 2ª Tm 4.1-2; 1ª Co 11.17-34; Mt 18.15-20; Gl 6.1."
      },
      {
        title: "Da missão da igreja",
        text: "Cremos, confessamos e ensinamos que a Igreja pura, santa e verdadeira é a que tem por missão: glorificar o nome de Jesus Cristo (1), promover a edificação dos santos pelo ensino das Escrituras (2), servir uns aos outros (3), proclamar o Evangelho para a expansão do Reino de Deus (4) e demonstrar misericórdia e amor aos pecadores, aliviando suas dores imediatas (5).",
        references: "(1) Ef 1.12; Rm 12.1-2; Cl 3.16; Ef 5.16-19; Ef 4.12-13. (2) Hb 10.24-25; Mt 18.15-20. (3) 1ª Co 12.12-31. (4) Mt 28.19-20; Mc 16.15-16. (5) Rm 3.9-20; Gn 3.17-19; Dt 15.11; Jo 12.7-8; Mt 5.3-9; Lc 4.40; Lc 10.29-37; Lc 6.35-36; 2ª Pe 3.13."
      },
      {
        title: "Dos dons espirituais",
        text: "Cremos, confessamos e ensinamos que os dons espirituais são habilidades dadas soberana e individualmente aos crentes pelo Espírito Santo, a fim de equipar o povo de Deus para o ministério, para a edificação da Igreja e proclamação do evangelho (1). Há dons de menor relevância, especialmente os dons de milagres, línguas idiomáticas e curas (2). E há dons que cessaram: apostolado e profecia, ambos de natureza fundacional (3). Todos os dons devem ser exercidos de acordo com as normas estabelecidas pelo Espírito Santo nas Sagradas Escrituras (4).",
        references: "(1) 1ª Co 1.7; 12.7-11, 28-31. (2) 1ª Co 12.31; 1ª Co 14.1-5; 1ª Co 20-25; Rm 12.6-8; 1ª Pe 4.10-11. (3) Ef 2.19-20; Ef 4.7-16; Jo 16.12-13. (4) 2ª Tm 3.16-17; 2ª Pe 1.19-21; 1ª Co 12-14."
      },
      {
        title: "Dos oficiais e da forma de governo",
        text: "Cremos, confessamos e ensinamos que a verdadeira igreja deve ser governada conforme a ordem estabelecida por Deus em sua Palavra através de pastores, para pregarem a Palavra de Deus e administrarem as ordenanças sagradas, e também de diáconos para formarem com os pastores o conselho da igreja (1). O conselho da igreja é responsável por manter a pureza doutrinária, servir, zelar e proteger as ordenanças sagradas, zelar pelo bom testemunho da igreja e trabalhar para que os necessitados recebam misericórdia. E que o regime bíblico de governo da igreja é o congregacional indireto (representativo) (2).",
        references: "(1) At 20.28; Ef 4.11-12; 1ª Tm 3.15; Hb 13.20-21; Lc 1.2; Lc 10.16; Rm 10.14; 1ª Co 4:1; 2ª Co 5.19-20; 2ª Tm 4:2; At 14.23; Tt 1.5. (2) 1ª Tm 3.8-10; Fp 1.1; 1ª Tm 4.14; At 6.1-4; Tt 1.7-9; 1ª Co 4.2; 1ª Tm 3; At 15."
      },
      {
        title: "Da disciplina eclesiástica",
        text: "Cremos, confessamos e ensinamos que o Senhor Jesus, como Cabeça da Igreja (1), conferiu aos seus oficiais a autoridade para administração da disciplina eclesiástica (2). A disciplina eclesiástica existe para manter a pureza do corpo de Cristo, restaurar os faltosos e promover o temor santo entre o povo de Deus, desestimulando, assim, a prática do pecado (3). Para melhor alcançar esses fins, os oficiais da Igreja devem proceder à seguinte ordem, segundo a natureza do pecado: repreensão, suspensão de direitos e privilégios e, em caso de não arrependimento, e observadas as diretrizes bíblicas por parte dos envolvidos, excomunhão pela Igreja reunida em Assembleia (4).",
        references: "(1) Is 9.6-7. (2) 1ª Tm 5.17; 1ª Ts 5.12; At 20.17,28. (3) Mt 16.19; 18.17-18; Jo 20.21-23; 2ª Co 2.6-8. (4) Mt 18.17; 1ª Ts 5.12; 2ª Ts 3.6,14-15; 1ª Co 5.4-5; 1ª Co 5; 1ª Tm 5.20; 1ª Tm 1.20; Jd 1.23."
      }
    ]
  },
  {
    id: "culto",
    roman: "IX",
    title: "Do Culto e das Ordenanças da Igreja",
    articles: [
      {
        title: "Do fundamento para o culto público",
        text: "Cremos, confessamos e ensinamos que, em virtude do senhorio e da soberania de Deus sobre tudo e sobre todos, o modo correto de adorá-lo é aquele estabelecido e regulado por Ele em Sua Palavra (1), não sendo permitidas inovações humanas, ou sugestões de espíritos enganadores, sendo assim proibidas quaisquer representações visíveis não autorizadas pelas Sagradas Escrituras (2).",
        references: "(1) Jr 10.7; Mc 12.33; Jo 4.22,24. (2) Mc 7.7-9; 1ª Tm 4.1; Dt 4.15-19; Jo 4.24; Mt 4.10; 1ª Tm 2.5; Hb 12.24; 2ª Pe 1.21."
      },
      {
        title: "Do culto público solene",
        text: "Cremos, confessamos e ensinamos que o culto público solene é caracterizado pela reunião dos santos atendendo à convocação do Senhor no primeiro dia da semana (1) e deve ser prestado unicamente ao Deus Trino, por mediação de Cristo, sob a direção do Espírito Santo em Sua Palavra, não a anjos, santos ou qualquer outra criatura (2).",
        references: "(1) Dt 6.13; Jl 1.14, 2.15; At 20.7; Jo 4.24; Cl 2.18; Hb 10.25. (2) Ap 19.10; Rm 1.25; Jo 14.6; 1ª Tm 2.5; Cl 3.17."
      },
      {
        title: "Da instituição e natureza das ordenanças",
        text: "Cremos, confessamos e ensinamos que o batismo e a Ceia do Senhor são ordenanças da igreja, instituídas pelo próprio Senhor Jesus Cristo, sendo ambas de natureza simbólica.",
        references: "Mt 28.19-20; 1ª Co 11.23-26; Lc 22.19."
      },
      {
        title: "Do batismo",
        text: "Cremos, confessamos e ensinamos que o Batismo simboliza a morte e o sepultamento do velho homem, e a ressurreição deste para uma nova vida, em identificação com a morte, sepultamento e ressurreição do Senhor Jesus Cristo (1), e também prenúncio da ressurreição dos remidos, bem como a purificação de seus pecados (2). Cremos no credo batismo que deve ser ministrado com água, sob a invocação do nome do Pai, do Filho, e do Espírito Santo (3).",
        references: "(1) Rm 6.3-5; Cl 2.12. (2) Gl 3.27; 1ª Pe 3.21; At 2.38. (3) Mt 28.18-20; At 8.12; At 36-39."
      },
      {
        title: "Da Ceia",
        text: "Cremos, confessamos e ensinamos que a Ceia do Senhor é uma cerimônia solene da igreja reunida, comemorativa e proclamadora da morte do Senhor Jesus Cristo (1), simbolizada por meio dos elementos: Pão e Vinho (fruto da videira) (2). A Ceia, na qual Cristo se faz presente espiritualmente, deve ser celebrada pela igreja até a volta do Senhor e para participar dela exige-se o batismo bíblico, a membresia em uma igreja genuinamente evangélica e o cuidadoso autoexame dos participantes (3).",
        references: "(1) Mt 26.26-27; Lc 22.19-20. (2) Mt 26:29; 1ª Co 10.21; 1ª Co 11.24-26. (3) 1ª Co 10.16,17,21; 1ª Co 11.20; 1ª Co 11.28."
      },
      {
        title: "Do objetivo das ordenanças",
        text: "Cremos, confessamos e ensinamos que o Batismo e a Ceia do Senhor, têm por fim servir de sinal distintivo entre o povo de Deus e o povo do mundo (1), de representação simbólica e selo das bênçãos da Aliança da graça (2), e meios de fortalecer nossa comunhão com Cristo e uns com os outros (3), assim como de promover nossa santificação (4).",
        references: "(1) Mc 16.15-16; At 8.36-39; 1ª Co 11.27-28; Ez 36.25-26. (2) Mt 28.19-20; 1ª Co 11.23-25; Mt 26.26-28; Êx 19.10; Is 1.16; Mt 3.16-17. (3) 1ª Co 11.18-22; 1ª Co 10.16-17. (4) Rm 6.4-8; Cl 2.12."
      }
    ]
  },
  {
    id: "ordem-civil",
    roman: "X",
    title: "Da Ordem Civil",
    articles: [
      {
        title: "Do estabelecimento da autoridade civil",
        text: "Cremos, confessamos e ensinamos que Deus é o Senhor e Rei supremo sobre toda a criação (1), ordenando que houvesse governos e autoridades civis para lhe estarem sujeitos e governarem sobre o povo, para o bem público e para Sua glória (2).",
        references: "(1) Sl 47.2,7; 1ª Tm 1.17. (2) Sl 2.10,11; Dn 2.21."
      },
      {
        title: "Dos direitos e deveres da autoridade civil",
        text: "Cremos, confessamos e ensinamos que a esses governos e autoridades civis é dado por Deus o direito e o dever de estabelecer leis e códigos para que a ordem social seja mantida, os maus sejam devidamente punidos, e os justos protegidos. Para tanto o poder da espada deve ser por eles exercido, e tributos podem ser estabelecidos em justa medida (1).",
        references: "(1) Rm 13.1-4; 1ª Pe 2.13-14."
      },
      {
        title: "Da separação entre igreja e autoridade civil",
        text: "Cremos, confessamos e ensinamos que Deus em sua infinita sabedoria estabeleceu a Igreja, os governos e as autoridades civis como entes separados, podendo, contudo, haver cooperação mútua entre eles (1). Assim sendo, a esses governos e autoridades civis não é dado o poder de determinar à igreja questões relacionadas à sua fé e prática (2).",
        references: "(1) 2º Cr 26.18; Mt 16.18,19. (2) 2º Sm 23.3,4; Cl 1.18."
      },
      {
        title: "Do dever de resistência do cristão à autoridade civil",
        text: "Cremos, confessamos e ensinamos que ao cristão é estabelecido por Deus o dever de se submeter às autoridades civis, pagar impostos, render-lhes honra e respeito, obedecer-lhes em tudo que não seja contrário à Palavra de Deus, orando constantemente em favor delas para que sejam guiadas a um sábio e justo exercício das suas funções (1). Entretanto, na medida em que tais autoridades se distanciem dos princípios bíblicos, tornando-se inimigas do Evangelho, contrárias à causa de Cristo, perseguindo a Igreja e fazendo obstáculo à pregação do Evangelho, o cristão tem o dever de resistir-lhes até o fim (2).",
        references: "(1) Dn 6. (2) Tt 3.1; 1ª Pe 2.17."
      }
    ]
  },
  {
    id: "futuro",
    roman: "XI",
    title: "Do Futuro",
    articles: [
      {
        title: "Da volta de Cristo",
        text: "Cremos, confessamos e ensinamos que Jesus Cristo, com seus santos anjos, retornará, no dia determinado por Deus (1), de forma pessoal, corporal, visível e gloriosa, para julgar o mundo (vivos e mortos) como reto e justo Juiz, e consumar seu glorioso reino (2).",
        references: "(1) 1ª Ts 5.1,2; Mt 24.36; At 17.31. (2) At 1.11; Ap 1.7; Mt 24.30; 1ª Pe 4.5."
      },
      {
        title: "Da morte e do estado intermediário",
        text: "Cremos, confessamos e ensinamos que, após a morte, o corpo humano volta ao pó e sua alma volta imediatamente para Deus que a deu (1). A alma do homem não morre e nem dorme, mas sendo do justo, é recebida nos céus onde já desfruta da glória de Deus e aguarda a plena redenção (2), enquanto a alma dos ímpios é lançada no inferno onde permanece em tormento aguardando o grande dia do juízo (3).",
        references: "(1) Gn 3.19; Ec 12.7; Lc 23.43; Dn 12.2. (2) Fp 1.23; At 3.21; 2ª Co 5.1,8; Mt 25.34. (3) Hb 9.27; Mt 25.31, 46; Lc 16.23,24."
      },
      {
        title: "Da ressurreição dos ímpios e dos crentes",
        text: "Cremos, confessamos e ensinamos a ressurreição dos corpos, tanto dos justos como dos ímpios, para a eternidade (1) - os ímpios para o castigo consciente no lago de fogo (2), e os justos para a vida eterna em um corpo glorificado na presença do Deus Trino em Novo Céu e Nova Terra (3).",
        references: "(1) 1ª Co 15.12-19; 1ª Co 15.32; Jó 19.25-27; Is 26.19; Mc 16.5-7; 1ª Ts 4.15-17. (2) Dn 12.2; Jo 15.29. (3) 1ª Co 15.53-55; Is 25.8; Jo 11.25; Jo 5.21; Rm 8.17; 1ª Co 15.42-44."
      },
      {
        title: "Do Juízo Final",
        text: "Cremos, confessamos e ensinamos que Deus determinou, em sua eterna sabedoria e justiça, um dia no qual há de julgar os vivos e os mortos por meio da justiça de Cristo para assim consumar toda a história e demonstrar sua glória e justiça (1).",
        references: "(1) Mt 24.36; At 17.31; 2ª Tm 4.1; Jo 5.22, 27; Jd 6; 2ª Co 5.10; Ec 12.14; Rm 14.10,12."
      },
      {
        title: "Da eternidade dos crentes",
        text: "Cremos, confessamos e ensinamos que no último dia, a Igreja será apresentada diante de Deus como noiva de Cristo, sem mácula, redimida pela pessoa e obra do Salvador (1), quando ela estará livre da presença e das consequências do pecado (2). E, para todo o sempre, Deus será adorado da forma que merece, como o Único que é digno de receber todo louvor, honra e glória (3).",
        references: "(1) Ct 6.10; 2ª Co 11.1-2; Ef 5.27; Ap 21.2. (2) Ap 21.4,5; Ap 22.3; Rm 8.19-21; 1ª Co 15.54,55. (3) Ap 11.15; Ap 21.24-26; Ap 22."
      }
    ]
  }
];
