using MongoDB.Bson.Serialization.Attributes;

namespace API_AtenSUS.Models
{
    public class Pacientes
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; } = null;
        
        [BsonElement("Nome")]

       
        public int Numero { get; set; }
        [BsonElement("Idade")]
        public int Idade { get; set; }

        [BsonElement("Altura")]
        public int Altura { get; set; }

        [BsonElement("Peso")]
        public int Peso { get; set; }

        [BsonElement("Endereco")]
        public string Endereco { get; set; } = null;

        
        [BsonElement("Sintomas")]
        public string Sintomas { get; set; } = null;
    }

}
