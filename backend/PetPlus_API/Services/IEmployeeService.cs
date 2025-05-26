using System.Threading.Tasks;
using PetPlus_API.Models;

namespace PetPlus_API.Services
{
  public interface IEmployeeService
  {
    Task<IEnumerable<Employee>> GetEmployees();
    Task<Employee> GetEmployee(int Id);
    Task CreateEmployee(Employee employee);

    Task UpdateEmployee(Employee employee);

    Task DeleteEmployee(Employee employee);
  }

}