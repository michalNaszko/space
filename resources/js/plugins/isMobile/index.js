function isMobile() {
    return screen.width <= 768
}

export default {
    install: (app) => {
        app.config.globalProperties.$isMobile = isMobile;
    },
};
