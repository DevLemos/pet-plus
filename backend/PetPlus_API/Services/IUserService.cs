using System.Threading.Tasks;
using PetPlus_API.Models;

namespace PetPlus_API.Services
{
  public interface IUserService
  {
    User? GetByEmail(string email);
  }

}