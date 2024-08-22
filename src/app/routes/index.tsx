import { createBrowserRouter } from "react-router-dom";
import { ShoesRoot } from "./shoes/root";
import { ShoeRoot } from "./shoes/[shoeName]/root";
import { RootLayout } from "@/components/layout";

export const createRoutes = () => {
  return createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            path: "/",
            lazy: async () => {
              const { HomeRoute } = await import("./home");
              return { Component: HomeRoute };
            },
          },
          // auth
          {
            path: "login",
            lazy: async () => {
              const { LoginRoute } = await import("./auth/login");
              return { Component: LoginRoute };
            },
          },
          {
            path: "register",
            lazy: async () => {
              const { RegisterRoute } = await import("./auth/register");
              return { Component: RegisterRoute };
            },
          },
          // app
          {
            path: "cart",
            lazy: async () => {
              const { CartRoute } = await import("./cart");
              return { Component: CartRoute };
            },
          },
          // app >> shoes
          {
            path: "shoes",
            element: <ShoesRoot />, // protect route
            children: [
              {
                path: "",
                lazy: async () => {
                  const { ShoesListRoute } = await import("./shoes");
                  return { Component: ShoesListRoute };
                },
              },
              {
                path: "add",
                lazy: async () => {
                  const { AddNewShoeRoute } = await import("./shoes/add");
                  return { Component: AddNewShoeRoute };
                },
              },
              {
                path: ":shoeSlug",
                element: <ShoeRoot />,
                children: [
                  {
                    path: "",
                    lazy: async () => {
                      const { ViewShoeRoute } = await import(
                        "./shoes/[shoeName]"
                      );
                      return { Component: ViewShoeRoute };
                    },
                  },
                  {
                    path: "edit",
                    lazy: async () => {
                      const { EditShoeRoute } = await import(
                        "./shoes/[shoeName]/edit"
                      );
                      return { Component: EditShoeRoute };
                    },
                  },
                  {
                    path: "buy",
                    lazy: async () => {
                      const { BuyShoeRoute } = await import(
                        "./shoes/[shoeName]/buy"
                      );
                      return { Component: BuyShoeRoute };
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    { basename: import.meta.env.BASE_URL },
  );
};
