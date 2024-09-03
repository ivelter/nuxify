export default function (videoTitle: string, usedAsReference: boolean = false) {

    let newVideoTitle = videoTitle

        // J'ai -> On a
        .replace(/\bJ'ai\b/g, 'On a')
        .replace(/\bJ'AI\b/g, 'ON A')
        .replace(/\bj'ai\b/gi, 'on a')

        // Je vous ai -> On vous a
        .replace(/\bJe vous ai\b/g, 'On vous a')
        .replace(/\bJE VOUS AI\b/g, 'ON VOUS A')
        .replace(/\bje vous ai\b/gi, 'on vous a')

        // Je suis -> On est
        .replace(/\bJe suis\b/g, 'On est')
        .replace(/\bJE SUIS\b/g, 'ON EST')
        .replace(/\bje suis\b/gi, 'on est')

        // Je me suis -> On s'est
        .replace(/\bJe me suis\b/g, 'On s\'est')
        .replace(/\bJE ME SUIS\b/g, 'ON S\'EST')
        .replace(/\bje me suis\b/gi, 'on s\'est')

        // Je pack -> on pack (???)
        .replace(/\bJe pack\b/g, 'On pack')
        .replace(/\bJE PACK\b/g, 'ON PACK')
        .replace(/\bje pack\b/gi, 'on pack')

        // J' -> On [+ espace]
        .replace(/\bJ'\b/g, 'On ')
        .replace(/\bj’\b/g, 'on ')

        // Je vais -> On va
        .replace(/\bJe vais\b/g, 'On va')
        .replace(/\bJE VAIS\b/g, 'ON VA')
        .replace(/\bje vais\b/gi, 'on va')

        // Je fais -> On fait
        .replace(/\bJe fais\b/g, 'On fait')
        .replace(/\bJE FAIS\b/g, 'ON FAIT')
        .replace(/\bje fais\b/gi, 'on fait')

        // Je veux -> On veut
        .replace(/\bJe veux\b/g, 'On veut')
        .replace(/\bJE VEUX\b/g, 'ON VEUT')
        .replace(/\bje veux\b/gi, 'on veut')

        // Je vous montre -> On vous montre
        .replace(/\bJe vous montre\b/g, 'On vous montre')
        .replace(/\bJE VOUS MONTRE\b/g, 'ON VOUS MONTRE')
        .replace(/\bje vous montre\b/gi, 'on vous montre')

        // Je réagis -> On réagit
        .replace(/\bJe réagis\b/g, 'On réagit')
        .replace(/\bJE RÉAGIS\b/g, 'ON RÉAGIT')
        .replace(/\bje réagis\b/gi, 'on réagit')

        // Mon -> Notre
        .replace(/\bMon\b/g, 'Notre')
        .replace(/\bMON\b/g, 'NOTRE')
        .replace(/\bmon\b/g, 'notre')

        // Je -> On
        .replace(/\bJe\b/g, 'On')
        .replace(/\bJE\b/g, 'ON')
        .replace(/\bje\b/g, 'on')

        // Moi -> Nous
        .replace(/\bMoi\b/g, 'Nous')
        .replace(/\bMOI\b/g, 'NOUS')
        .replace(/\bmoi\b/gi, 'nous')

        // Mes -> Nos
        .replace(/\bMes\b/g, 'Nos')
        .replace(/\bMES\b/g, 'NOS')
        .replace(/\bmes\b/gi, 'nos')

        // Me -> Nous
        .replace(/\bMe\b/g, 'Nous')
        .replace(/\bME\b/g, 'NOUS')
        .replace(/\bme\b/gi, 'nous')
        
        // Moi-même => nous-mêmes
        .replace(/\bMoi-même\b/g, 'Nous-mêmes')
        .replace(/\bMOI-MÊME\b/g, 'NOUS-MÊMES')
        .replace(/\bMOI-MEME\b/g, 'NOUS-MÊMES')
        .replace(/\bmoi-même\b/gi, 'nous-mêmes')
        .replace(/\bMoi même\b/g, 'Nous mêmes')
        .replace(/\bMOI MÊME\b/g, 'NOUS MÊMES')
        .replace(/\bMOI MEME\b/g, 'NOUS MÊMES')
        .replace(/\bmoi même\b/gi, 'nous mêmes')

    return newVideoTitle;
}