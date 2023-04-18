using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AtenSus.API.Entidade
{
    public class Paciente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        public string Nome { get; set; }

        public int Idade { get; set; }

        public double Altura { get; set; }

        public double Peso { get; set; }

        public string Endereco { get; set; }

        public string Sintomas { get; set; }

    }

}

