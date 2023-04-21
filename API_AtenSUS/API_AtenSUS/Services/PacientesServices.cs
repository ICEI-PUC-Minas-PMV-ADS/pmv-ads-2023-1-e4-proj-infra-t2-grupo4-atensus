using API_AtenSUS.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace API_AtenSUS.Services
{
    public class PacientesServices
    {
        private readonly IMongoCollection<Pacientes> _PacientesCollection; //Nome aleatório

        public PacientesServices(IOptions<PacientesDatabaseSettings> pacientesServices) { //O nome dado é o mesmo da class, porém com p minúsculo
           
            var mongoClient = new MongoClient(pacientesServices.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(pacientesServices.Value.DatabaseName);

            _PacientesCollection = mongoDatabase.GetCollection<Pacientes>
                (pacientesServices.Value.PacientesCollectionName);
        }

        //Criação de métodos async da API, Get, Create, Update e Delete

        public async Task<List<Pacientes>> GetAsync() =>
            await _PacientesCollection.Find(x => true).ToListAsync();

        public async Task<Pacientes> GetAsync(string id) =>
            await _PacientesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Pacientes pacientes) =>
            await _PacientesCollection.InsertOneAsync(pacientes);

        public async Task UpdateAsync(string id, Pacientes pacientes) =>
            await _PacientesCollection.ReplaceOneAsync(x => x.Id == id, pacientes);

        public async Task RemoveAsync(string id) =>
            await _PacientesCollection.DeleteOneAsync(x => x.Id == id);

        internal Task DeleteAsync(string? id)
        {
            throw new NotImplementedException();
        }
    }
}
