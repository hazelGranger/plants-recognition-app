export const commonHeaders = {
  "Access-Control-Allow-Origin": "https://plants-recognition.netlify.app/",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export const createResponse = (
  statusCode: number,
  body: string,
  headers?: {
    [header: string]: string | number | boolean;
  }
) => {
  return {
    headers: { ...commonHeaders, ...headers },
    statusCode: statusCode,
    body: body,
  };
};
