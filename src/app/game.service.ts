import { Injectable } from '@angular/core';
import { Question, Team } from './game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
}

export const questions: Question[] = [
  {
    question: 'Com està te mare?',
    options: [
      'Bé, gràcies',
      'Bé, no en tinc',
      'Treballant',
      'De baixa, feina complicada',
    ],
    answer: 'Treballant',
    category: 'CANET',
  },
  {
    question: 'Quin nom no és un gos del grup?',
    options: ['Trufona', 'Zeus', 'Lula', 'Llís'],
    answer: 'Lula',
    category: 'CANET',
  },
  {
    question: 'Quants anys te el Pere Xirau?',
    options: ['69', '42', '13', '55'],
    answer: '69',
    category: 'CANET',
  },
  {
    question: 'De quin color era el pepemovil?',
    options: ['Groc', 'Blanc', 'Vermell', 'Blau'],
    answer: 'Groc',
    category: 'CANET',
  },
  {
    question: 'Quants llibre ha llegit aquest any en ramos?',
    options: ['2', '5', '7', '4'],
    answer: '7',
    category: 'CANET',
  },
  {
    question: "On s'ubica Cam Piquipugui?",
    options: [
      'C/ Verge de la Montserrat',
      'C/ Verge de la Neus',
      'C/ Verge del Roses',
      'C/ Verge de la Trini',
    ],
    answer: 'Stranger Things',
    category: 'CANET',
  },
  {
    question: 'Quina és la pass del wifi del Roger G.?',
    options: [
      'DRFGARCIA',
      'Fhjl52WQ24',
      'Generalitat 10',
      'Un bon café per un bon dia',
    ],
    answer: 'Generalitat 10',
    category: 'CANET',
  },
  {
    question: 'On es van coneixer Alex i el Papiu?',
    options: [
      'Casal estiu',
      'Dibuix',
      'Escola de Musica',
      'Per les mores (treballen juntes)',
    ],
    answer: 'Escola de Musica',
    category: 'CANET',
  },
  {
    question: 'Qui mai ha estat al retrás cronic?',
    options: ['Marçal Xirau', 'Vanessa Galvez', 'Aitor Arán', 'Bianca'],
    answer: 'Bianca',
    category: 'CANET',
  },
  {
    question: 'Quina frase mítica li non dit a en papiu?',
    options: [
      'El meu pare no és metge',
      'Pau, ho has fet molt bé tete',
      'Molt bé Pau, tens raó',
      'Tanto hype para esto',
    ],
    answer: 'Tanto hype para esto',
    category: 'CANET',
  },
  {
    question: 'Quin és el primer video del Rupucuverso?',
    options: [
      'Joker',
      'La cruss',
      'Lágrimas de lluvia seca de horizontes pasados',
      'Bonus track: tutumtum',
    ],
    answer: 'La cruss',
    category: 'CANET',
  },
  {
    question: 'Quina camisa no té Alex',
    options: ['Gats', 'Pinyes', 'Zorros', 'Flamencos'],
    answer: 'Flamencos',
    category: 'CANET',
  },
  {
    question: "De que s'ha fet un powerpoint?",
    options: [
      'PJ de Smash que em follaria',
      'Per qué La Que Se Avecina és la millor serie',
      'Son en Ryan i el Chad parella',
      'Gays',
    ],
    answer: 'Per qué La Que Se Avecina és la millor serie',
    category: 'CANET',
  },
  {
    question: 'Per qué ens va castigar el Roger sense anar a se casa?',
    options: [
      "Algú va trencar l'armari del pis de cerdanyola",
      'Ens vam quedar sense copes que trencar',
      "Es va trencar un fluorescent per cap d'any",
      'Molestavem a la Trini',
    ],
    answer: "Algú va trencar l'armari del pis de cerdanyola",
    category: 'CANET',
  },
  {
    question: 'Quina és la frase correcte? Al pan pan y al vino vino',
    options: [
      'Y en tu culo mi pepino',
      'Pero a una señora llámala siempre puta',
      'Pero a una puta llámala siempre señora',
      'pero tu madre me come el pito',
    ],
    answer: 'Pero a una puta llámala siempre señora',
    category: 'CANET',
  },
  {
    question: "Quin d'aquestes peces no és un horrocrux?",
    options: [
      'Copa de Ravenclaw',
      'Passador del cabell de Slytherin',
      'Basilísco',
      'Totes ho són',
    ],
    answer: 'Copa de Ravenclaw',
    category: 'MEDIA',
  },
  {
    question: 'Com es diu el marti de la Pepa de Encanto?',
    options: ['Ramiro', 'Félix', 'Juan', 'Camilo'],
    answer: 'Félix',
    category: 'MEDIA',
  },

  {
    question:
      'Quina criatura és la que porta més temps vivint a la Tierra Media?',
    options: ['Gandalf', 'El Balrog', 'Sauron', 'Tom Bombadil'],
    answer: 'Tom Bombadil',
    category: 'MEDIA',
  },

  {
    question: 'Qui tira la papeleta de Harry Potter en el Cáliz de foc?',
    options: ['McGonagall', 'Dumbledore', 'Harry Potter', 'Snape'],
    answer: 'Dumbledore',
    category: 'MEDIA',
  },
  {
    question: 'Who is Bruno for Mirabel?',
    options: ['Her dad', 'Her brother', 'Her cousin', 'Her uncle'],
    answer: 'Her brother',
    category: 'MEDIA',
  },

  {
    question: 'Which character’s mood affects the weather?',
    options: ['Bruno', 'Pepa', 'Julieta', 'Dolores'],
    answer: 'Bruno',
    category: 'MEDIA',
  },

  {
    question: 'What is Luisa’s gift?',
    options: [
      'She can control the weather',
      'She is an amazing cook',
      'She is very graceful',
      'She is very strong',
    ],
    answer: 'She is very strong',
    category: 'MEDIA',
  },

  {
    question: 'Who is Mirabel’s dad?',
    options: ['Agustín', 'Camilo', 'Mariano', 'Félix'],
    answer: 'Agustín',
    category: 'MEDIA',
  },

  {
    question: 'Which colour is Dolores’ hair bow?',
    options: ['Green', 'Pink', 'Red', 'Yellow'],
    answer: 'Green',
    category: 'MEDIA',
  },

  {
    question: 'Which actress was the voice of Mirabel Madrigal?',
    options: ['Stephanie Beatriz', 'Jessica Darrow', 'J-Lo', 'Diane Guerrero'],
    answer: 'Stephanie Beatriz',
    category: 'MEDIA',
  },

  {
    question: 'Which one of the following is not a song from Encanto?',
    options: [
      'Waiting on a Miracle',
      'Surface Pressure',
      'We Don’t Talk about Bruno',
      'Un Baccio a Mezzanotte',
    ],
    answer: 'Un Baccio a Mezzanotte',
    category: 'MEDIA',
  },

  {
    question: 'Who is the ‘theatre kid’?',
    options: ['Luisa', 'Dolores', 'Camilo', 'Mirabel'],
    answer: 'Mirabel',
    category: 'MEDIA',
  },

  {
    question: 'When was Encanto released?',
    options: ['2019', '2020', '2021', '2022'],
    answer: '2021',
    category: 'MEDIA',
  },

  {
    question: 'What is Isabela’s magic power?',
    options: [
      'Strength',
      'Control the weather',
      'Control the plants',
      'Precognition',
    ],
    answer: 'Control the plants',
    category: 'MEDIA',
  },

  {
    question:
      'What animals were Luisa carrying before singing Surface Pressure?',
    options: ['Chickens', 'Alpacas', 'Donkeys', 'Cows'],
    answer: 'Alpacas',
    category: 'MEDIA',
  },

  {
    question: 'What was the name of Alma’s husband?',
    options: ['Pablo', 'Antonio', 'Pedro', 'Juan'],
    answer: 'Pablo',
    category: 'MEDIA',
  },

  {
    question: 'Which character is in Bruno’s vision?',
    options: ['Luisa', 'Abuela', 'Mirabel', 'Pepa'],
    answer: 'Mirabel',
    category: 'MEDIA',
  },

  {
    question: 'Which insect does Mirabel see in Bruno’s vision?',
    options: ['A ladybug', 'A bee', 'A firefly', 'A butterfly'],
    answer: 'A ladybug',
    category: 'MEDIA',
  },

  {
    question:
      'Which instrument is Luisa asked to bring to the engagement party?',
    options: ['A guitar', 'An harmonica', 'A piano', 'A violin'],
    answer: 'A guitar',
    category: 'MEDIA',
  },
  {
    question: 'Quin era el component de One Direction que més li agradava?',
    options: ['Harry Styles', 'Niall Horan', 'Zayn Malik', 'Miky Triki'],
    answer: 'Niall Horan',
    category: 'SONIA',
  },
  {
    question: "Quina d'aquestes sagas li agrada més?",
    options: [
      'Fast and Furious AKA Rapidos y furiosos',
      'Harry Potter',
      'El Señor de los Anillos',
      'Las Cronicas de Narnia',
    ],
    answer: 'A piano',
    category: 'SONIA',
  },
  {
    question: "Com li deia a l'acció de caure's?",
    options: ['Me cango', 'Me caco', 'Me cago', 'Mecano - Hijo de la Luna'],
    answer: 'A piano',
    category: 'SONIA',
  },
  {
    question: 'Companya de futbol back in the day?',
    options: ['Helena Roig', 'Estel Palet', 'Alicia ', 'Paula Ramón'],
    answer: 'Helena Roig',
    category: 'SONIA',
  },
  {
    question: 'Anime favorit?',
    options: [
      'My Hero Academia',
      'One Piece',
      'Naruto',
      "Jojo's bizarre adventure",
    ],
    answer: 'One Piece',
    category: 'SONIA',
  },
  {
    "question": "Amb quin nom es dirigeix més la Sònia a l'Àlex?",
    "options": [
      "Alexander",
      "Pololo",
      "Pichín",
      "No ho fa de ninguna manera."
    ],
    "answer": "Pololo",
    "category": "SONIA"
  },
  {
    "question": "Què és el que més ràbia li fa a la Sònia d'ella mateixa?",
    "options": [
      "Ser miope",
      "Que no sap dibuixar per molt que ho intenti",
      "Que no li agrada parlar en públic",
      "Que perd/trenca coses cada dos per tres"
    ],
    "answer": "Que perd/trenca coses cada dos per tres",
    "category": "SONIA"
  },
  {
    "question": "Quina de les pelis que li ha ensenyat l'Àlex a la Sònia li ha agradat menys?",
    "options": [
      "Brazil",
      "Birdman",
      "Whiplash",
      "Payasos Asesinos del Espacio Exterior"
    ],
    "answer": "Brazil",
    "category": "SONIA"
  },
  {
    "question": "Amb qui va muntar la Sònia un canal de covers a YouTube?",
    "options": [
      "Amb l'Àlex",
      "Amb l'Helena",
      "Amb l'Alícia",
      "Cap de les anteriors és correcte"
    ],
    "answer": "Cap de les anteriors és correcte",
    "category": "SONIA"
  },
  {
    "question": "Quin era el \"rage game\" que obsessionava a la Sònia de petita?",
    "options": [
      "El Rey León de la Game Boy",
      "El Pingu del PC",
      "El Rayman de la Play 1",
      "Un joc del Sonic que donaven al McDonalds"
    ],
    "answer": "El Pingu del PC",
    "category": "SONIA"
  },
  {
    "question": "Per quin motiu va començar a portar ulleres la Sònia?",
    "options": [
      "Per estètica",
      "Miopia",
      "Estigmatisme",
      "Wtf, la Sònia no porta ulleres"
    ],
    "answer": "Per estètica",
    "category": "SONIA"
  },
  {
    "question": "Quina d'aquestes sèries li agrada més a la Sònia?",
    "options": [
      "The Office",
      "Brooklyn Nine Nine",
      "Euphoria",
      "El Rovelló"
    ],
    "answer": "Brooklyn Nine Nine",
    "category": "SONIA"
  },
  {
    "question": "Com es deia l'elefant de peluix que la Sònia tenia a la seva habitació",
    "options": [
      "Lola",
      "Grisita",
      "Lucy",
      "Gerard Pompido"
    ],
    "answer": "Lola",
    "category": "SONIA"
  },
  {
    "question": "Quants anys tenien l'Àlex i la Sònia quan van començar a sortir?",
    "options": [
      "14 la Sònia i 15 l'Alex",
      "15 la Sònia i 16 l'Alex",
      "14 la Sònia i 16 l'Alex",
      "15 la Sònia i 15 l'Alex"
    ],
    "answer": "15 la Sònia i 16 l'Alex",
    "category": "SONIA"
  },
  {
    "question": "Quin d'aquests llibres NO s'ha llegit la Sònia?",
    "options": [
      "Los Juegos del Hambre 3: Sinsajo",
      "El Señor de los Anillos",
      "Manual de una auténtica mamarracha",
      "La Vaca Púrpura"
    ],
    "answer": "La Vaca Púrpura",
    "category": "SONIA"
  }
  
];
