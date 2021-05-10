import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'word-scramble',
  templateUrl: './word-scramble.component.html',
  styleUrls: ['./word-scramble.component.css']
})
export class WordScrambleComponent implements OnInit {

  scrambledWord: String = '';
  constructor() { }


  ngOnInit(): void {

  }

  doScramble(word: HTMLInputElement){
    const words = word.value.split(' ');
    const twistedWords: String[] = [];
    for (let i = 0; i < words.length; i++) {

      if (words[i] != '') {
        twistedWords.push(this.twistWord(words[i]));
      }
    }
    this.scrambledWord = twistedWords.join(' ');
  }


  twistWord(word) {
    const text = word.split('');
    // split by word
    const twistedText: String[] = [];
    const twistedNumbers: number[] = [];

    while (twistedNumbers.length < text.length) {
      const randNum = Math.floor(Math.random() * text.length);
      if (twistedNumbers.indexOf(randNum) === -1){
        twistedNumbers.push(randNum);
      }
    }

    for (let i = 0; i < text.length; i++) {
      twistedText.push(text[twistedNumbers[i]]);
    }

    return twistedText.join('');
  }


}
