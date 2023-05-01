using System.ComponentModel.DataAnnotations;

namespace aspnet_app
{
    public class Author
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; } = null!;

        public string? Image { get; set; }
    }
}
