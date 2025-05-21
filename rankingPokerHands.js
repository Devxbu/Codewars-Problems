var Result = { "win": 1, "loss": 2, "tie": 3 };
function PokerHand(hand) {
  this.cards = parseHand(hand);
  this.valueCount = {};
  this.suitCount = {};

  this.cards.forEach(card => {
    this.valueCount[card.value] = (this.valueCount[card.value] || 0) + 1;
    this.suitCount[card.suit] = (this.suitCount[card.suit] || 0) + 1;
  });

  this.valuesSorted = this.cards
    .map(c => c.num)
    .sort((a, b) => b - a);
}

PokerHand.prototype.getRank = function () {
  const values = Object.values(this.valueCount).sort((a, b) => b - a);
  const isFlush = Object.keys(this.suitCount).length === 1;
  const isStraight = this.valuesSorted.every((v, i, arr) =>
    i === 0 || arr[i - 1] - v === 1
  );

  const hasRoyal = ['T','J','Q','K','A'].every(v => this.valueCount[v]);

  if (isFlush && hasRoyal) return { rank: 10, high: this.valuesSorted };
  if (isFlush && isStraight) return { rank: 9, high: this.valuesSorted };
  if (values[0] === 4) return { rank: 8, high: this.valuesSorted };
  if (values[0] === 3 && values[1] === 2) return { rank: 7, high: this.valuesSorted };
  if (isFlush) return { rank: 6, high: this.valuesSorted };
  if (isStraight) return { rank: 5, high: this.valuesSorted };
  if (values[0] === 3) return { rank: 4, high: this.valuesSorted };
  if (values[0] === 2 && values[1] === 2) return { rank: 3, high: this.valuesSorted };
  if (values[0] === 2) return { rank: 2, high: this.valuesSorted };
  return { rank: 1, high: this.valuesSorted };
};

const CARD_ORDER = '23456789TJQKA';
function parseHand(handStr) {
  return handStr.split(" ").map(card => ({
    value: card[0],
    suit: card[1],
    num: CARD_ORDER.indexOf(card[0])
  }));
}

PokerHand.prototype.compareWith = function (otherHand) {
  const myRank = this.getRank();
  const otherRank = otherHand.getRank();

  if (myRank.rank > otherRank.rank) return Result.win;
  if (myRank.rank < otherRank.rank) return Result.loss;

  for (let i = 0; i < myRank.high.length; i++) {
    if (myRank.high[i] > otherRank.high[i]) return Result.win;
    if (myRank.high[i] < otherRank.high[i]) return Result.loss;
  }
  return Result.tie;
};
