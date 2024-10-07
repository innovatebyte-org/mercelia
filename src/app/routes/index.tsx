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
          {
            path: "forgot-password",
            lazy: async () => {
              const { ForgotPasswordRoute } = await import(
                "./auth/forgot-password"
              );
              return { Component: ForgotPasswordRoute };
            },
          },
          {
            path: "verify",
            lazy: async () => {
              const { VerifyRoute } = await import("./auth/verify");
              return { Component: VerifyRoute };
            },
          },
          {
            path: "change-password",
            lazy: async () => {
              const { ChangePasswordRoute } = await import(
                "./auth/change-password"
              );
              return { Component: ChangePasswordRoute };
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
          {
            path: "checkout",
            lazy: async () => {
              const { CheckoutRoute } = await import("./checkout");
              return { Component: CheckoutRoute };
            },
          },
          {
            path: "dashboard",
            lazy: async () => {
              const { DashboardRoute } = await import("./dashboard");
              return { Component: DashboardRoute };
            },
          },
          {
            path: "delivery",
            lazy: async () => {
              const { DeliverySettingsRoute } = await import("./delivery");
              return { Component: DeliverySettingsRoute };
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
                path: "all",
                lazy: async () => {
                  const { AllShoesRoute } = await import("./shoes/all");
                  return { Component: AllShoesRoute };
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
