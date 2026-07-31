import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-PG1J4NCVJ4");
};

export const trackPageView = (path) => {
    ReactGA.send({
        hitType: "pageview",
        page: path,
    });
};