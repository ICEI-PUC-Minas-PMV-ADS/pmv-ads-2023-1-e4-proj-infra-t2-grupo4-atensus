using MongoDB.Bson.Serialization.Attributes;

namespace API_AtenSUS.Models
{
    public class Pacientes
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Nome")]
        public string Nome { get; set; }

        [BsonElement("Idade")]
        public int Idade { get; set; }

        [BsonElement("Altura")]
        public double Altura { get; set; }

        [BsonElement("Peso")]
        public double Peso { get; set; }

        [BsonElement("Endereco")]
        public string Endereco { get; set; } = null;

        [BsonElement("Sintomas")]
        public string Sintomas { get; set; } = null;

        [BsonElement("Descricao")]
        public string Descricao { get; set; } = null;

        [BsonElement("CPF")]
        public string CPF { get; set; }

        [BsonElement("Senha")]
        public string Senha { get; set; }
    }
}
