export const goUrl = (url) => {
    const newPageURL = url;
    window.open(newPageURL, '_blank');
}

export function convertSecToHMS(number) {
    const days = Math.floor(number / 86400)
        .toString()
        .padStart(2, '0')
    const tmp1 = number % 86400;
    const hours = Math.floor(tmp1 / 3600)
        .toString()
        .padStart(2, '0')
    const tmp2 = tmp1 % 3600;
    const minutes = Math.floor(tmp2 / 60)
        .toString()
        .padStart(2, '0')
    const tmp3 = tmp2 % 60;
    const seconds = (tmp3 % 60).toString().padStart(2, '0')
    const formattedTime = `${days}days ${hours}:${minutes}:${seconds}` /*${hours}:*/
    return formattedTime
}