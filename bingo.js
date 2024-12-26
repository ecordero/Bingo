const bingoItems = [
  'Touch base',
'Deep dive',
'Take it offline',
'Thought leadership',
'Sync',
'Pushback',
'Pipeline',
'Loop in',
'Win-Win',
'Unpack',
'Above and beyond',
'Hop on a call',
'Level up',
'Out of pocket',
'Ping you',
'Bandwidth',
'On my radar',
'Circle back',
'Think outside the box',
'Low-hanging fruit',
'Synergize',
'Move the needle',
'Let\'s table this',
'Put a pin in it',
'Get ducks in a row',
'Trim the fat',
'Drink the Kool-Aid',
'Voluntold',
'Bain dump',
'Run it up the flagpole',
'Herding cats'
]

class Bingo {
  constructor (items, title) {
    this.bingoItems = items || Array(100).fill(0).map(function (item, index) {
      item += index + 1
      return item
    })
    this.title = title ? `${title} BINGO!` : 'BINGO!'
  }

  getRandomItemIndex () {
    const min = 1
    const max = this.bingoItems.length
    return Math.round(Math.random() * (max - min))
  }
  getItems (isFree) {
    let tmpItems = []
    for (let i = 0; i < 5; i++) {
      if (isFree && i === 2) {
        tmpItems.push('FREE')
      } else {
        let r = this.getRandomItemIndex()
        let tmpRandomItem = this.bingoItems[r]
        if (tmpRandomItem) {
          tmpItems.push(tmpRandomItem)
        } else {
          console.info('!!!!! undefined at ', r)
        }
      }
    }
    return tmpItems
  }

  getCardData () {
    const cardData = {
      B: this.getItems(),
      I: this.getItems(),
      N: this.getItems(true),
      G: this.getItems(),
      O: this.getItems()
    }
    return cardData
  }

  renderCard () {
    const card = this.getCardData()
    let renderedCard = `<h1>${this.title}</h1>\n<table>\n`
    renderedCard += `<thead><tr>`
    for (let item in card) {
      renderedCard += `<th>${item}</th>`
    }
    renderedCard += `</tr></thead>\n<tbody>\n`
    for (let item in card) {
      renderedCard += `<tr>${card[item].map(i => {return i = `<td><span>${i}</span></td>`}).join('')}</tr>\n`
    }
    renderedCard += `</tbody>\n</table>`

    return renderedCard
  }
}

const myBingo = new Bingo(bingoItems)
const bingoCard = document.createElement('section')
bingoCard.innerHTML = myBingo.renderCard()
let body = document.getElementsByTagName('body')[0]
body.appendChild(bingoCard)

