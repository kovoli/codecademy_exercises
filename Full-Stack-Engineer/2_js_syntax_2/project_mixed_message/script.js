var quotes = [
    'Есть только один успех — потратить свою жизнь так, как ты хочешь.',
    'Успех — это умение двигаться от неудачи к неудаче, не теряя энтузиазма.',
    'Главный секрет Мужчин, которые преуспевают в жизни — Любимая Женщина!',
    'Закройте за собой дверь страха, и вы быстро увидите ,как быстро дверь успеха откроется перед вами.',
    'Считают, что успех приходит к тем, кто рано встает. Нет: успех приходит к тем, кто встает в хорошем настроении.',
    'Успех — это движение от неудачи к неудаче без потери энтузиазма.',
    'Если Вы хотите добиться успеха, избегайте 6-ти пороков: сонливости, лени, страха, гнева, праздности и нерешительности',
    '…внимание — ключ к успеху во всем.'
]

function quotesGeneratorator()  {
    return {
        quotes: [],
        generate() {
            if (this.quotes.length === 0) {
                console.log('The Quote generator is empty TAP: object.generateQuotes() in the Console')
                console.log('Or create your own List with Quotes TAP: object.addQuotes("You qoute")')
            } else {
                console.log(this.quotes[Math.floor(Math.random() * this.quotes.length)])
            }
        },
        addQuotes(quote) {
            if (typeof quote === 'string' && quote.length > 5) {
                this.quotes.push(quote + ' You quote has been add to collection')
                console.log(this.quotes[this.quotes.length - 1])
            } else {
                console.log('It is not a quote, please give a correct qoute')
            }
        },
        generateQuotes() {
            for (let i=0; i < quotes.length; i++) {
                // console.log(quotes[i])
                this.quotes.push(quotes[i])
            }
            //
        }
    }
}

const gen = quotesGeneratorator()
console.log(gen.quotes)
gen.generate()
gen.addQuotes('Dreame yor life')
gen.generateQuotes()
gen.generate()
