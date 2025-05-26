using Microsoft.AspNetCore.Mvc;
using PetPlus_API.Models;
using PetPlus_API.Services;

namespace PetPlus_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private IUserService _userService;

    public UserController(IUserService userService)
    {
      _userService = userService;
    }

    // Controllers/UserController.cs
    [HttpPost("login")]
    public IActionResult Login([FromBody] Login login)
    {
      var user = _userService.GetByEmail(login.Email);

      if (user == null)
        return Unauthorized("Usuário não encontrado.");

      bool isPasswordValid = BCrypt.Net.BCrypt.Verify(login.PasswordHash, user.Password);

      if (!isPasswordValid)
        return Unauthorized("Senha incorreta.");


      return Ok(new
      {
        message = "Login bem-sucedido",
        user = new
        {
          user.Id,
          user.Email,
          user.FullName,
          user.ClinicId
        }
      });
    }


  }
}

