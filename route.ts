// An array of routes that are accessible to the public.
// These routes does not require authentication
// @type{string[]}

export const publicRoutes = [
  "/",
  // "/login",
  // "/register",
  // "/products",
  // "/product/[id]",
  // "/cart",
  // "/checkout",
  // "/thank-you",
];
// An array of routes that are used for authentication.
// These routes will redirect logged in users to /settings
// @type{string[]}

export const authRoutes = [
  "/login",
  "/register",
];
/* The prefix for API authentication routes
Routes that start with this prefix are used for API authentication purposes
@type{string}
*/
export const apiAuthPrefix = "/api/auth"
/*
The default redirect path after logging in.
@type{string}
*/


export const  DEFAULT_LOGIN_REDIRECT= "/settings"