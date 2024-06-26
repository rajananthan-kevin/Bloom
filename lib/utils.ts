
export const timeElapsed = (datetime: string) => {
    const currentUTC = new Date();
    const parisOffset = 2; 
    const parisTime = new Date(currentUTC.getTime() + (parisOffset * 3600000)); 

    const previousTime = new Date(datetime);

    const timeDiff = parisTime.getTime() - previousTime.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return years === 1 ? `${years} an` : `${years} ans`;
    } else if (months > 0) {
        return months === 1 ? `${months} mois` : `${months} mois`;
    } else if (weeks > 0) {
        return weeks === 1 ? `${weeks} semaine` : `${weeks} semaines`;
    } else if (days > 0) {
        return days === 1 ? `${days} jour` : `${days} jours`;
    } else if (hours > 0) {
        return hours === 1 ? `${hours} heure` : `${hours} heures`;
    } else if (minutes > 0) {
        return minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
    } else {
        return "À l'instant";
    }
}


export function truncateText(texte: string, longueur: number = 40): string {
    if (texte.length <= longueur) {
        return texte;
    } else {
        return texte.substring(0, longueur) + '...';
    }
}

export function getValidString(value: string | null | undefined): string {
    return value ? value : "-";
  }