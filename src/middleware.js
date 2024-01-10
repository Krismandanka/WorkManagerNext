// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   // console.log("middleware executer");
//   const authToken = request.cookies.get("authToken")?.value;
//     console.log(authToken);
// //   if (request.nextUrl.pathname === "/api/login") {
// //     return;
// //   }
// //   const loggedInUder =
// //     request.nextUrl.pathname === "/login" ||
// //     request.nextUrl.pathname === "/signup";
// //   if (loggedInUder) {
// //     if (authToken) {
// //       return NextResponse.redirect(new URL("/profile/user", request.url));
// //     }
// //   } else {
// //     if (!authToken) {
// //       return NextResponse.redirect(new URL("/login", request.url));
// //     }
// //   }

//   // console.log(authToken)

//   // return NextResponse.redirect(new URL("home",request.url));
// }

// export const config = {
//   matcher: [
//     "/",
//     "/login",
//     "/signup",
    
//     "/add_task",
//     "/show_task",
//     "/profile/:path*",
//   ],
// };
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const authToken = request.cookies.get("authToken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname == "/signup";
    

  if (loggedInUserNotAccessPaths) {
    // access not secured route
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    // accessing secured route

    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied !!",
            success: false,
          },
          {
            status: 401,
          }
        );
      }

      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      // varify...
    }
  }


    // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add_task",
    "/show_tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
