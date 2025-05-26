using Microsoft.AspNetCore.Mvc;
using PetPlus_API.Models;
using PetPlus_API.Services;

namespace PetPlus_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ClinicController : ControllerBase
  {
    private IClinicService _clinicService;

    public ClinicController(IClinicService clinicService)
    {
      _clinicService = clinicService;
    }

    [HttpGet("{id:int}", Name = "GetClinic")]
    public async Task<ActionResult<IAsyncEnumerable<Clinic>>> GetClinic(int id)
    {
      try
      {
        var clinic = await _clinicService.GetClinic(id);
        if (clinic == null)
        {
          return NotFound($"Não existe clinica com o id {id}");
        }
        return Ok(clinic);
      }
      catch
      {
        return BadRequest("Request Inválido");
      }
    }

    [HttpPost]
    public async Task<ActionResult> Create([FromBody] Clinic clinic)
    {
      try
      {
        await _clinicService.CreateClinic(clinic);
        return CreatedAtRoute(nameof(GetClinic), new { id = clinic.Id }, clinic);
      }
      catch
      {
        return BadRequest("Request Inválido");
      }
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Edit(int id, [FromBody] Clinic clinic)
    {
      try
      {
        if (clinic.Id == id)
        {
          await _clinicService.UpdateClinic(clinic);
          return Ok($"Clinica com id{id} foi atualizado com sucesso");
        }
        else
        {
          return BadRequest("Dados Inconsistentes");
        }
      }
      catch
      {
        return BadRequest("Request Inválido");
      }
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id)
    {
      try
      {

        var clinic = await _clinicService.GetClinic(id);
        if (clinic != null)
        {
          await _clinicService.DeleteClinic(clinic);
          return Ok($"Clinica com id {id} foi excluído com sucesso");
        }
        else
        {
          return NotFound($"Clinica com id {id} não encontrado");
        }
      }
      catch
      {
        return BadRequest("Request Inválido");
      }
    }

  }
}

