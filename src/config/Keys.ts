import config from "./Config.json";

const envData = config[process.env.REACT_APP_ENV as keyof typeof config];
export const { serverPath, clientPath } = envData;
