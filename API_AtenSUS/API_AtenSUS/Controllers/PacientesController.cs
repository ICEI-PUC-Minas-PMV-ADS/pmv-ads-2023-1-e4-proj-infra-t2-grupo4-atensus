using API_AtenSUS.Models;
using API_AtenSUS.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_AtenSUS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private readonly PacientesServices _pacientesServices;

        public PacientesController(PacientesServices pacientesServices)
        {
            _pacientesServices = pacientesServices;
        }

        //Adição dos métodos
        //Adicionado rota de comprimento do id para 24 caracteres
        //Isso garante que o ID tenha o formato correto antes de ser usado para acessar o banco de dados.
        //POST, é retornado um código de status 201 Created com um cabeçalho Location que aponta para a URL do recurso recém-criado.
        //PUT, é verificado se o paciente com o ID fornecido existe e, em seguida, é chamado o método UpdateAsync para atualizar os dados.
        //DELETE, também é verificado se o paciente com o ID fornecido existe e, em seguida, é chamado o método DeleteAsync para removê-lo do banco de dados.

        [HttpGet("{id:length(24)}")]
        public async Task<IActionResult> GetPacientes(string id)
        {
            var paciente = await _pacientesServices.GetAsync(id);

            if (paciente == null)
            {
                return NotFound();
            }

            return Ok(paciente);
        }

        [HttpPost]
        public async Task<IActionResult> PostPacientes(Pacientes pacientes)
        {
            await _pacientesServices.CreateAsync(pacientes);

            return CreatedAtAction(nameof(GetPacientes), new { id = pacientes.Id }, pacientes);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> PutPacientes(string id, Pacientes pacienteIn)
        {
            var paciente = await _pacientesServices.GetAsync(id);

            if (paciente == null)
            {
                return NotFound();
            }

            await _pacientesServices.UpdateAsync(id, pacienteIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> DeletePacientes(string id)
        {
            var paciente = await _pacientesServices.GetAsync(id);

            if (paciente == null)
            {
                return NotFound();
            }

            await _pacientesServices.DeleteAsync(paciente.Id);

            return NoContent();
        }

    }

}
