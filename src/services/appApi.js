import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define a service user a base URL

const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://chat-backend-applicationsss.onrender.com",
    }),

    endpoints: (builder) => ({
        // creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: "https://chat-backend-applicationsss.onrender.com/users",
                method: "POST",
                body: user,
            }),
        }),

        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url: "https://chat-backend-applicationsss.onrender.com/users/login",
                method: "POST",
                body: user,
            }),
        }),

        // logout

        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "https://chat-backend-applicationsss.onrender.com/logout",
                method: "DELETE",
                body: payload,
            }),
        }),
    }),
});

export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation } = appApi;

export default appApi;
