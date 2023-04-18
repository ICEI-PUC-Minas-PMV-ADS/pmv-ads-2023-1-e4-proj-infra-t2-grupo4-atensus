using AtenSus.API.Entidade;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace AtenSus.API.Dados
{
    public class AtenSusContext : DbContext
    {
        public AtenSusContext(DbContextOptions<AtenSusContext> options) : base(options) 
        {
            
        }
        public DbSet<Hospital>Hospital { get; set; }
    }
}
