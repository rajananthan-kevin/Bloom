export function timeElapsed(dateStr: string): string {
  
    const date = new Date(dateStr);
    const maintenant = new Date();
    const options: Intl.DateTimeFormatOptions = { timeZone: 'Europe/Paris', hour12: false };

    const maintenantParisStr = maintenant.toLocaleString('en-US', options);
    const maintenantParis = new Date(maintenantParisStr);


    const difference = maintenantParis.getTime() - date.getTime();

    const differenceHeures = difference / (1000 * 60 * 60);
    const differenceJours = differenceHeures / 24;


    const anneeDifference = maintenantParis.getUTCFullYear() - date.getUTCFullYear();
    const moisDifference = maintenantParis.getUTCMonth() - date.getUTCMonth();
    const totalMoisDifference = anneeDifference * 12 + moisDifference;


    if (totalMoisDifference >= 1) {
        return `${totalMoisDifference} mois`;
    }
    else if (differenceJours >= 1) {
        return `${Math.floor(differenceJours)} jours`;
    }
    else {
        return `${Math.floor(differenceHeures)} heures`;
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