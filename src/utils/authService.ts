import presistFactory from './presistFactory';

const Authkey = '__tk__';

const testToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmQ0NzdiOWNkZjQ3ZTAwMGI3ZmY2YWIiLCJwbGF0Zm9ybSI6ImZlaXNodSIsIm5hbWUiOiLmsZ_lsI_pvZAiLCJzb3VyY2VJZCI6Im91X2E5MzFhOGE1NzlmYjAwYjE2NDFjMTIyZTMzNWQ0YTRiIiwiY29tcGFueUlkIjoiNWZkNDc3YjljZGY0N2UwMDBiN2ZmNmFhIiwiY29tcGFueVNvdXJjZUlkIjoiMmMyMmQ2OTc3NmNlMTc1ZSIsImlhdCI6MTYwNzc1OTg2MSwiZXhwIjoyMjEyNTU5ODYxfQ.-u__3biGyJ3jEunWT1oJCD_5lDRQ_a98rS_YdKLhJX8';

const defaultValue = process.env.TARGET === 'dev' ? testToken : '';
// export default presistFactory(testToken, Authkey);

export default presistFactory(defaultValue, Authkey);
