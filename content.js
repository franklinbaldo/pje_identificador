const changeColor = () => {
    const elements = ['barraSuperiorPrincipal', 'navbar'];

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundColor = 'red';
        }
    });
};

changeColor();
