using API_AtenSUS.Models;
using API_AtenSUS.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_AtenSUS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        private readonly HospitalServices _hospitalServices;

        public HospitalController(HospitalServices hospitalServices)
        {
            _hospitalServices = hospitalServices;
        }

        [HttpGet]
        public async Task<List<Hospital>> GetPacientes() =>
            await _hospitalServices.GetAsync();

        [HttpPost]
        public async Task<Hospital> PostPacientes(Hospital hospital)
        {
            await _hospitalServices.CreateAsync(hospital);
            return hospital;
        }
    }

}
