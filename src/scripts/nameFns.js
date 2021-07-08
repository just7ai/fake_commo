function getRandomName (forWhom, gender) {
    gender = gender || 'm';
    if (names[forWhom]) {
        return getRandomEl(names[forWhom][gender]);
    } else {
        return '';
    }
}
