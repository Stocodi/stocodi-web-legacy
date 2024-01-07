export const ParseVideoId = (link: string) => {
    return link.replace("https://www.youtube.com/watch?v=", "").split("&")[0];
};
