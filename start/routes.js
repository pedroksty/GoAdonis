const Route = use("Route");

Route.get("/", () => {
  return { SERVER: "ON" };
});

Route.post("users", "UserController.store");
Route.post("sessions", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");
