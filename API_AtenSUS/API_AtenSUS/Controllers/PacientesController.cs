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

        [HttpGet]
        public async Task<List<Pacientes>> GetPacientes() =>
            await _pacientesServices.GetAsync();

        [HttpPost]
        public async Task<Pacientes> PostPacientes(Pacientes pacientes)
        {
            await _pacientesServices.CreateAsync(pacientes);
            return pacientes;
        }
    }

}
