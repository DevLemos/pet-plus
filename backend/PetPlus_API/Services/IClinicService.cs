using System.Threading.Tasks;
using PetPlus_API.Models;

namespace PetPlus_API.Services
{
  public interface IClinicService
  {
    Task<Clinic> GetClinic(int Id);
    Task CreateClinic(Clinic clinic);

    Task UpdateClinic(Clinic clinic);

    Task DeleteClinic(Clinic clinic);
  }

}