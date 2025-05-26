using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace PetPlus_API.Models;

[Table("tbl_Usuarios")]
public class User
{
  [Key]
  public int Id { get; set; }

  [Required]
  [EmailAddress]
  public string Email { get; set; } = null!;

  [Required]
  [StringLength(100)]
  public string? FullName { get; set; }

  [Required]
  [StringLength(14)]
  public string? Cpf { get; set; }

  [StringLength(12)]
  public string? Rg { get; set; }

  [Required]
  public string? PersonType { get; set; } // "PF" ou "PJ"

  [Required]
  [StringLength(100, MinimumLength = 6, ErrorMessage = "A senha deve ter no mínimo 6 caracteres.")]
  public string Password { get; set; } = null!;

  [ForeignKey("Clinic")]
  public int ClinicId { get; set; }
  [JsonIgnore]
  public Clinic? Clinic { get; set; }
}