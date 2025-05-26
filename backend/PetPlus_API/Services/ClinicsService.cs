using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using PetPlus_API.Data;
using PetPlus_API.Models;
using BCrypt.Net;
using System.Threading.Tasks;
using System.Linq;

namespace PetPlus_API.Services
{
  public class ClinicsService : IClinicService
  {
    private readonly AppDbContext _context;

    public ClinicsService(AppDbContext context)
    {
      _context = context;
    }
    public async Task<Clinic> GetClinic(int Id)
    {
      var clinic = await _context.Clinics.FindAsync(Id);
      if (clinic == null)
        throw new Exception($"Clinica com ID {Id} não encontrado.");

      return clinic;
    }
    public async Task CreateClinic(Clinic clinic)
    {
      if (clinic.Users != null && clinic.Users.Count > 0)
      {
        foreach (var user in clinic.Users)
        {
          user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

        }
      }
      _context.Clinics.Add(clinic);
      await _context.SaveChangesAsync();
    }
    public async Task UpdateClinic(Clinic clinic)
    {
      _context.Entry(clinic).State = EntityState.Modified;
      await _context.SaveChangesAsync();
    }
    public async Task DeleteClinic(Clinic clinic)
    {
      _context.Clinics.Remove(clinic);
      await _context.SaveChangesAsync();
    }
  }
}