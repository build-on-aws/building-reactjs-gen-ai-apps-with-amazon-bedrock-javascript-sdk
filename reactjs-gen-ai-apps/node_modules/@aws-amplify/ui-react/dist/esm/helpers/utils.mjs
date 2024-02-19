const getFormDataFromEvent = (event) => {
    const formData = new FormData(event.target);
    return Object.fromEntries(formData);
};

export { getFormDataFromEvent };
