using Microsoft.EntityFrameworkCore;
using PetPlus_API.Models;

namespace PetPlus_API.Data;

public class AppDbContext : DbContext
{
  public DbSet<Employee> Employees { get; set; }
  public DbSet<Clinic> Clinics { get; set; }
  public DbSet<User> Users { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    optionsBuilder.UseSqlite("Data Source=sqlite.db;");
    base.OnConfiguring(optionsBuilder);
  }

}