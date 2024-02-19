const isIconFilled = (currentIconIndex, ratingValue) => {
    if (currentIconIndex <= ratingValue)
        return true;
    return false;
};
const isIconEmpty = (currentIconIndex, ratingValue) => {
    if (currentIconIndex - 1 >= ratingValue)
        return true;
    return false;
};
const isIconMixed = (currentIconIndex, ratingValue) => {
    if (currentIconIndex > ratingValue && currentIconIndex - 1 < ratingValue) {
        return true;
    }
    return false;
};

export { isIconEmpty, isIconFilled, isIconMixed };
