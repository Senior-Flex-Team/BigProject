using System.ComponentModel.DataAnnotations;

namespace aspnet_app
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(40)]
        public string Name { get; set; } = null!;
    }
}
