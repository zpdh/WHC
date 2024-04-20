// This code is DOGSHIT btw. Radiance stuff made by tomex/jhil.

const health = document.getElementById('health')
const healeff = document.getElementById('healeff')
const wtrdmg = document.getElementById('wtrdmg')
const result = document.getElementById('result')
const calcBtn = document.getElementById('calculate')
const mageBtn = document.getElementById('mage')
const shamanBtn = document.getElementById('shaman')
const modeText = document.getElementById('mode')
const baseHP = document.getElementById('basehp')

let mode = 'Shaman'

let radianceStatus = false
document.getElementById("radiance").addEventListener("click", () => {
    if (radianceStatus == false) {
        radianceStatus = true
    } else radianceStatus = false
}) 

function calculateHealing() {
    let healthNDP = health.value
    let healeffNDP = healeff.value
    let wtrdmgNDP = wtrdmg.value

    if (radianceStatus == true) {
        healthNDP = (health.value - baseHP.value)*1.2 + Number(baseHP.value)
        healeffNDP = healeff.value * 1.2
        wtrdmgNDP = wtrdmg.value * 1.2
    } if (mode == 'Shaman') {
        let value = (healthNDP/4) * (1+(healeffNDP/100)) * (1+((wtrdmgNDP/100)*0.3))
        value = Math.round(value * 10) / 10
        return value
    } else {
        let value = (healthNDP/5) * (1+(healeffNDP/100)) * (1+((wtrdmgNDP/100)*0.3))
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
    if (baseHP.value < 0){
        result.textContent = `Invalid base health value.`
    }else if (health.value < 0 || health.value > 100000) {
        result.textContent = `Invalid health value.`
    } else if (value < 0) {
        result.textContent = `invalid WD/HE/HP values.`
    } else result.textContent = `Heal/Spell: ${value}`
})
