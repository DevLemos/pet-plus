using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace PetPlus_API.Models;

[Table("tbl_Clinica")]
public class Clinic
{
  [Key]
  public int Id { get; set; }

  [Required]
  [StringLength(100)]
  public string? Name { get; set; }

  [Required]
  [StringLength(18)]
  public string? Cnpj { get; set; }

  [Required]
  [StringLength(100)]
  public string? CorporateName { get; set; }

  [Required]
  public string? PersonType { get; set; }

  [Required]
  public string? PlanType { get; set; }

  [Required]
  [Range(typeof(bool), "true", "true", ErrorMessage = "Você deve aceitar os termos de uso.")]
  public bool AcceptedTerms { get; set; }

  [Required]
  public ICollection<User>? Users { get; set; }
}