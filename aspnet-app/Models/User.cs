using System.ComponentModel.DataAnnotations;

namespace aspnet_app
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(40)]
        public string Name { get; set; } = null!;
    }
}
