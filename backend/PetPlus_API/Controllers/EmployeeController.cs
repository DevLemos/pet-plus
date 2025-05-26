using Microsoft.AspNetCore.Mvc;
using PetPlus_API.Models;
using PetPlus_API.Services;

namespace PetPlus_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EmployeeController : ControllerBase
  {
    private IEmployeeService _employeeService;

    public EmployeeController(IEmployeeService employeeService)
    {
      _employeeService = employeeService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<IAsyncEnumerable<Employee>>> GetEmployees()
    {
      try
      {
        var employee = await _employeeService.GetEmployees();
        return Ok(employee);
      }
      catch
      {
        return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter funcionários");
      }
    }

    [HttpGet("{id:int}", Name = "GetEmployee")]
    public async Task<ActionResult<Employee>> GetEmployee(int id)

    {
      try
      {
        var employee = await _employeeService.GetEmployee(id);
        if (employee == null)
        {
          return NotFound($"Não existe funcionário com o id {id}");
        }
        return Ok(employee);
      }
      catch
      {
        return BadRequest("Request Inválido");
      }
    }

    [HttpPost]
    public async Task<ActionResult> Create(Employee employee)
    {
      try
      {
        await _employeeService.CreateEmployee(employee);
        return CreatedAtRoute(nameof(GetEmployee), new { id = employee.Id }, employee);
      }
      catch (ArgumentException ex)
      {
        return BadRequest(ex.Message); // Clínica inválida, etc.
      }
      catch (Exception ex)
      {
        return BadRequest($"Erro ao criar funcionário: {ex.Message}");
      }
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Edit(int id, [FromBody] Employee employee)
    {
      try
      {
        if (employee.Id == id)
        {
          await _employeeService.UpdateEmployee(employee);
          return Ok(new { message = $"Funcionário com id {id} foi atualizado com sucesso" });

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

        var employee = await _employeeService.GetEmployee(id);
        if (employee != null)
        {
          await _employeeService.DeleteEmployee(employee);
          return Ok($"Funcionário com id {id} foi excluído com sucesso");
        }
        else
        {
          return NotFound($"Funcionário com id {id} não encontrado");
        }
      }
      catch
      {
        return BadRequest("Request Inválido");
      }
    }

  }
}

