var nameCount = 0
var job = 'MAHDI ALAEI'
var typeIn = 0
var typeOff = 1
var off = job.length
var intervalTypeIn = setInterval(_type, 200)
var intervalTypeOff
function _type() {
    if (typeIn <= job.length) {
        $('h1').text(job.substring(0, typeIn))
    } else {
        clearInterval(intervalTypeIn)
        setTimeout(function () {
            intervalTypeOff = setInterval(_offType, 200)
            typeOff = 1
        }, 3000)
    }
    typeIn++
}
function _offType() {
    if (typeOff <= job.length) {
        $('h1').text($('h1').text().substring(0, off = job.length - typeOff))
        typeOff++
    }
    if (off == 0) {
        clearInterval(intervalTypeOff)
        intervalTypeIn = setInterval(_type, 200)
        typeIn = 0
        if (nameCount == 0) {
            job = 'Web developer'
            nameCount = 1
        } else {
            job = 'MAHDI ALAEI'
            nameCount = 0
        }
    }
}
