import * as config from "./config.mjs";

export const pushState = (state, title, url, target, bubbles = true) => {
  history.pushState(state, title, url);
  emitEvent("urlchange", target, bubbles);
};

export const emitEvent = (eventName, target, bubbles) => {
  const event = new Event(eventName, { bubbles });
  target.dispatchEvent(event);
};

export const request = async (url, options = {}) => {
  try {
    const fullURL = `${config.THE_MOVIE_DB_URL}${url}?api_key=${config.THE_MOVIE_DB_API_KEY}&language=en-US&page=1#`;
    const response = await fetch(fullURL, options);

    if (!response.ok)
      throw new Error(`ERROR ${response.status}: API Request failed`);

    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e.message);
  }
};

export const capitalizeFirstCharacter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
