using API_AtenSUS.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
 
namespace API_AtenSUS.Services
{
    public class PacientesServices
    {
        private readonly IMongoCollection<Pacientes> _pacientesCollection;

        public PacientesServices(IOptions<PacientesDatabaseSettings> pacientesDatabaseSettings)
        {
            var client = new MongoClient(pacientesDatabaseSettings.Value.ConnectionString);
            var database = client.GetDatabase(pacientesDatabaseSettings.Value.DatabaseName);

            _pacientesCollection = database.GetCollection<Pacientes>(pacientesDatabaseSettings.Value.PacientesCollectionName);
        }

        public async Task<List<Pacientes>> GetAsync(string cpf, string senha) =>
            await _pacientesCollection.Find(x => true).ToListAsync();

        public async Task<Pacientes> GetPaciente(string cpf, string senha) =>
           await _pacientesCollection.Find(x => x.CPF.Equals(cpf) && x.Senha.Equals(senha)).FirstOrDefaultAsync();

        public async Task<Pacientes> GetAsync(string id) =>
            await _pacientesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Pacientes paciente) =>
            await _pacientesCollection.InsertOneAsync(paciente);

        public async Task UpdateAsync(Pacientes pacienteIn) =>
           await _pacientesCollection.ReplaceOneAsync(x => x.Id == pacienteIn.Id, pacienteIn);

        public async Task RemoveAsync(Pacientes pacienteIn) =>
            await _pacientesCollection.DeleteOneAsync(x => x.Id == pacienteIn.Id);

        public async Task RemoveAsync(string id) =>
            await _pacientesCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<List<Pacientes>> GetByQueryAsync(string cpf, string senha) =>
            await _pacientesCollection.Find(p => p.CPF == cpf && p.Senha == senha).ToListAsync();

        internal Task DeleteAsync(string? id)
        {
            throw new NotImplementedException();
        }
    }
}
