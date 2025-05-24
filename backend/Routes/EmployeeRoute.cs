namespace backend.Routes;

public static class EmployeeRoute
{
  public static void EmployeeRoutes(this WebApplication app)
  {
    app.MapGet("employee", () => "Olá");
  }
}
