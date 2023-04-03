using MongoDB.Bson.Serialization.Attributes;

namespace API_AtenSUS.Models
{
    public class Hospital
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; } = null;
        [BsonElement("Nome")]
        public string Nome { get; set; } = null;
        [BsonElement("Numero")]
        public int Numero { get; set; }
        [BsonElement("Idade")]
        public int Idade { get; set; }

        [BsonElement("Altura")]
        public int Altura { get; set; }

        [BsonElement("Peso")]
        public int Peso { get; set; }

        [BsonElement("Endereco")]
        public string Endereco { get; set; } = null;

        [BsonElement("EspecialidadeEncaminhada")]
        public string EspecialidadeEncaminhada { get; set; } = null;

        [BsonElement("Temperatura")]
        public int Temperatura { get; set; }

        [BsonElement("Sintomas")]
        public string Sintomas { get; set; } = null;
    }

}
