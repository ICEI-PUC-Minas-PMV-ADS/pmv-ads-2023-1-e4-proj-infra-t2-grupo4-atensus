using API_AtenSUS.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace API_AtenSUS.Services
{
    public class HospitalServices
    {
        private readonly IMongoCollection<Hospital> _HospitalCollection; //Nome aleatório

        public HospitalServices(IOptions<HospitalDatabaseSettings> hospitalServices)
        { //O nome dado é o mesmo da class, porém com h minúsculo

            var mongoClient = new MongoClient(hospitalServices.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(hospitalServices.Value.DatabaseName);

            _HospitalCollection = mongoDatabase.GetCollection<Hospital>
                (hospitalServices.Value.HospitalCollectionName);
        }

        //Criação de métodos async da API, Get, Create, Update e Delete

        public async Task<List<Hospital>> GetAsync() =>
            await _HospitalCollection.Find(x => true).ToListAsync();

        public async Task<Hospital> GetAsync(string id) =>
            await _HospitalCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Hospital hospital) =>
            await _HospitalCollection.InsertOneAsync(hospital);

        public async Task UpdateAsync(string id, Hospital hospital) =>
            await _HospitalCollection.ReplaceOneAsync(x => x.Id == id, hospital);

        public async Task RemoveAsync(string id) =>
            await _HospitalCollection.DeleteOneAsync(x => x.Id == id);

    }
}
