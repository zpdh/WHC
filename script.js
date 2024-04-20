const health = document.getElementById('health')
const healeff = document.getElementById('healeff')
const wtrdmg = document.getElementById('wtrdmg')
const result = document.getElementById('result')
const calcBtn = document.getElementById('calculate')
const mageBtn = document.getElementById('mage')
const shamanBtn = document.getElementById('shaman')
const modeText = document.getElementById('mode')

let mode = 'Shaman'

function calculateHealing() {
    if (mode == 'Shaman') {
        let value = (health.value/4) * (1+(healeff.value/100)) * (1+((wtrdmg.value/100)*0.3))
        value = Math.round(value * 10) / 10
        return value
    } else {
        let value = (health.value/5) * (1+(healeff.value/100)) * (1+((wtrdmg.value/100)*0.3))
        value = Math.round(value * 10) / 10
        return value
    }
}

function resetValues() {
    health.value = ''
    healeff.value = ''
    wtrdmg.value = ''
}

mageBtn.addEventListener('click', () => {
    mode = 'Mage'
    modeText.textContent = `Mode: ${mode}`
    resetValues()
})

shamanBtn.addEventListener('click', () => {
    mode = 'Shaman'
    modeText.textContent = `Mode: ${mode}`
    resetValues()
})

calcBtn.addEventListener('click', () => {
    let value = calculateHealing()
    result.textContent = `Heal/Spell: ${value}`
})


