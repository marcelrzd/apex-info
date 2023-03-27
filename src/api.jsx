// Base URL and API
const api_key = process.env.REACT_APP_API_KEY;
const base_url = "https://api.mozambiquehe.re";

// Map rotation url
export const all_map_rotationURL = () =>
  `${base_url}/maprotation?version=2&auth=${api_key}`;
export const br_map_rotationURL = () =>
  `${base_url}/maprotation?auth=${api_key}`;

// News url
export const newsURL = () => `${base_url}/news?auth=${api_key}&lang=en-US`;

// Player info
export const playerDetailsURL = (platform, player_name) =>
  `${base_url}/bridge?auth=${api_key}&player=${player_name}&platform=${platform}`;

// server status
export const serverStatusURL = () => `${base_url}/servers??auth=${api_key}`;

// crafting rotation
export const craftingURL = () => `${base_url}/crafting?auth=${api_key}`;
