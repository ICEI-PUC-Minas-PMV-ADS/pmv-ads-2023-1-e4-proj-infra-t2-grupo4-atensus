using API_AtenSUS.Models;
using API_AtenSUS.Services;
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


        [HttpGet("login/{cpf}/{senha}")]
        public async Task<IActionResult> GetLogin(string cpf, string senha)
        {
            var paciente = await _pacientesServices.GetPaciente(cpf, senha);

            if (paciente == null)
            {
                return NotFound();
            }

            return Ok(paciente);
        }


        [HttpPost]
        public async Task<IActionResult> PostPacientes(Pacientes pacientes)
        {
            //  pacientes.Senha = pacientes.CPF;
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

             await _pacientesServices.UpdateAsync( pacienteIn);

            return Ok(paciente);
        }

        [HttpPut("atualizar")]
        public async Task<IActionResult> PutPacientes([FromBody] Pacientes pacienteIn)
        {
            await _pacientesServices.UpdateAsync(pacienteIn);
            return Ok(pacienteIn);
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