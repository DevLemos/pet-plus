using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using PetPlus_API.Data;
using PetPlus_API.Models;
using System.Threading.Tasks;
using System.Linq;

namespace PetPlus_API.Services
{
  public class EmployeesService : IEmployeeService
  {
    private readonly AppDbContext _context;

    public EmployeesService(AppDbContext context)
    {
      _context = context;
    }
    public async Task<IEnumerable<Employee>> GetEmployees()
    {
      try
      {
        return await _context.Employees.ToListAsync();
      }
      catch
      {
        throw;
      }
    }
    public async Task<IEnumerable<Employee>> GetEmployeesByName(string name)
    {
      IEnumerable<Employee> employees;
      if (!string.IsNullOrWhiteSpace(name))
      {
        employees = await _context.Employees.Where(n => n.ds_Name != null && n.ds_Name.Contains(name)).ToListAsync();
      }
      else
      {
        employees = await GetEmployees();
      }
      return employees;
    }
    public async Task<Employee> GetEmployee(int Id)
    {
      var employee = await _context.Employees.FindAsync(Id);
      if (employee == null)
        throw new Exception($"Funcionário com ID {Id} não encontrado.");

      return employee;
    }
    public async Task CreateEmployee(Employee employee)
    {
      // Verifica se a clínica existe
      var clinicExists = await _context.Clinics.AnyAsync(c => c.Id == employee.ClinicId);
      if (!clinicExists)
      {
        throw new ArgumentException("Clínica informada não existe.");
      }

      _context.Employees.Add(employee);
      await _context.SaveChangesAsync();
    }
    public async Task UpdateEmployee(Employee employee)
    {
      _context.Entry(employee).State = EntityState.Modified;
      await _context.SaveChangesAsync();
    }
    public async Task DeleteEmployee(Employee employee)
    {
      _context.Employees.Remove(employee);
      await _context.SaveChangesAsync();
    }
  }
}