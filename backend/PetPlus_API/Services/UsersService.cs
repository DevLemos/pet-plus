using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using PetPlus_API.Data;
using PetPlus_API.Models;
using BCrypt.Net;
using System.Threading.Tasks;
using System.Linq;

namespace PetPlus_API.Services
{
  public class UsersService : IUserService
  {
    private readonly AppDbContext _context;

    public UsersService(AppDbContext context)
    {
      _context = context;
    }
    public User? GetByEmail(string email)
    {
      return _context.Users.FirstOrDefault(u => u.Email == email);
    }
  }
}