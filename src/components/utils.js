export const goUrl = (url) => {
    const newPageURL = url;
    window.open(newPageURL, '_blank');
}

export function convertSecToHMS(number) {
    const hours = Math.floor(number / 3600)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((number % 3600) / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (number % 60).toString().padStart(2, '0')
    const formattedTime = `${hours}:${minutes}:${seconds}` /*${hours}:*/
    return formattedTime
  }