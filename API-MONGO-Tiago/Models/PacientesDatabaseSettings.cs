namespace API_AtenSUS.Models
{
    public class PacientesDatabaseSettings
    {
        public string? ConnectionString { get; set; } = null;

        public string? DatabaseName { get; set; } = null;

        public string? PacientesCollectionName { get; set; } = null;
    }
}
