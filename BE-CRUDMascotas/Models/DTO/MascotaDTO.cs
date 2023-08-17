namespace BE_CRUDMascotas.Models.DTO
{
    public class MascotaDTO
    {
        public int Id { get; set; }
        public string? nombreMascota { get; set; }
        public string? tipoMascota { get; set; }
        public string? razaMascota { get; set; }
        public string? generoMascota { get; set; }
        public string? colorMascota { get; set; }
        public int edadMascota { get; set; }
        public float pesoMascota { get; set; }

    }
}

