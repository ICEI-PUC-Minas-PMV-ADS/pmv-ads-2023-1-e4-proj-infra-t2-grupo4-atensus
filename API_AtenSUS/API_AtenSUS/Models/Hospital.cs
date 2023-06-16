using MongoDB.Bson.Serialization.Attributes;

namespace API_AtenSUS.Models
{
    public class Hospital
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }
                               

        [BsonElement("EspecialidadeEncaminhada")]
        public string? EspecialidadeEncaminhada { get; set; }

        [BsonElement("Temperatura")]
        public int? Temperatura { get; set; }

        [BsonElement("Sintomas")]
        public string? Sintomas { get; set; }
    }

}
