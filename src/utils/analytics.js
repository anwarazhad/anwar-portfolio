import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-1747V3W073");
};

export const trackPageView = (path) => {
    ReactGA.send({
        hitType: "pageview",
        page: path,
    });
};