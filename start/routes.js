const Route = use("Route");

Route.get("/", () => {
  return { SERVER: "ON" };
});

Route.post("users", "UserController.store").validator("User");
Route.post("sessions", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Route.get("/files/:id", "FileController.show");

Route.group(() => {
  Route.resource("/projects", "ProjectController").apiOnly();
  Route.resource("projects.tasks", "TaskController").apiOnly();
  Route.post("/files", "FileController.store");
}).middleware(["auth"]);
