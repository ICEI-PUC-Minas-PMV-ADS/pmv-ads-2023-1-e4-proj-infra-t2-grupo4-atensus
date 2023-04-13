using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using API_AtenSUS.Models;

namespace API_AtenSUS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private readonly IMongoCollection<Pacientes> _pacientes;

        public PacientesController(IMongoClient client)
        {
            var database = client.GetDatabase("nomedodatabase");
            _pacientes = database.GetCollection<Pacientes>("pacientes");
        }

        [HttpGet]
        public ActionResult<List<Pacientes>> Get()
        {
            return _pacientes.Find(p => true).ToList();
        }

        [HttpGet("{id:length(24)}", Name = "GetPacientes")]
        public ActionResult<Pacientes> GetById(string id)
        {
            var pacientes = _pacientes.Find(p => p.Id == id).FirstOrDefault();
            if (pacientes == null)
            {
                return NotFound();
            }
            return pacientes;
        }

        [HttpPost]
        public ActionResult<Pacientes> Create(Pacientes pacientes)
        {
            _pacientes.InsertOne(pacientes);
            return CreatedAtRoute("GetPacientes", new { id = pacientes.Id.ToString() }, pacientes);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Pacientes pacientesIn)
        {
            var pacientes = _pacientes.Find(p => p.Id == id).FirstOrDefault();
            if (pacientes == null)
            {
                return NotFound();
            }
            _pacientes.ReplaceOne(p => p.Id == id, pacientesIn);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var pacientes = _pacientes.Find(p => p.Id == id).FirstOrDefault();
            if (pacientes == null)
            {
                return NotFound();
            }
            _pacientes.DeleteOne(p => p.Id == id);
            return NoContent();
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        private readonly IMongoCollection<Hospital> _hospitais;

        public HospitalController(IMongoClient client)
        {
            var database = client.GetDatabase("nomedodatabase");
            _hospitais = database.GetCollection<Hospital>("hospitais");
        }

        [HttpGet]
        public ActionResult<List<Hospital>> Get()
        {
            return _hospitais.Find(h => true).ToList();
        }

        [HttpGet("{id:length(24)}", Name = "GetHospital")]
        public ActionResult<Hospital> GetById(string id)
        {
            var hospital = _hospitais.Find(h => h.Id == id).FirstOrDefault();
            if (hospital == null)
            {
                return NotFound();
            }
            return hospital;
        }

        [HttpPost]
        public ActionResult<Hospital> Create(Hospital hospital)
        {
            _hospitais.InsertOne(hospital);
            return CreatedAtRoute("GetHospital", new { id = hospital.Id.ToString() }, hospital);
        }
    }
}

