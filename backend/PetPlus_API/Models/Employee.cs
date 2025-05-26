using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace PetPlus_API.Models;

[Table("tbl_Funcionarios")]
public class Employee
{
  [Key]
  public int Id { get; set; }

  [Required]
  [StringLength(80)]
  public string? ds_Name { get; set; }

  [Required]
  [StringLength(14)]
  public string? ds_CPF { get; set; }

  [Required]
  [StringLength(12)]
  public string? ds_RG { get; set; }

  [Required]
  public string? ds_Genero { get; set; }

  [Required]
  [DataType(DataType.Date)]
  public DateTime dt_DataNascimento { get; set; }

  [Required]
  [EmailAddress]
  public string ds_Email_Pessoal { get; set; } = null!;

  [Phone]
  public string? nr_Telefone { get; set; }

  [Required]
  public string? ds_CEP { get; set; }

  public string? ds_Rua { get; set; }

  public string? ds_Bairro { get; set; }

  public string? nr_Numero { get; set; }

  public string? ds_Cidade { get; set; }

  [Required]
  public string? ds_Cargo { get; set; }

  public string? nr_CRM { get; set; }

  [Required]
  public string? ds_Status { get; set; }

  [Required]
  [DataType(DataType.Date)]
  public DateTime dt_DataContratacao { get; set; }

  [Required]
  public string? ds_Usuario { get; set; }

  [Required]
  [EmailAddress]
  public string ds_Email { get; set; } = null!;

  [Required]
  [StringLength(100, MinimumLength = 6, ErrorMessage = "A senha deve ter no mínimo 6 caracteres.")]
  public string ds_Password { get; set; } = null!;

  [Required]
  public string? ds_Acesso { get; set; }

  [ForeignKey("Clinic")]
  public int ClinicId { get; set; }
  [JsonIgnore]
  public Clinic? Clinic { get; set; }
}