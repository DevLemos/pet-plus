namespace PetPlus_API.Models;

public class Login
{
  public string Email { get; set; } = null!;
  public string PasswordHash { get; set; } = null!;

}