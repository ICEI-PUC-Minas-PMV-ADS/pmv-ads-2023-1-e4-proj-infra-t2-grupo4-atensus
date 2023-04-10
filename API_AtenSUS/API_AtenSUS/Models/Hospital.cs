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
