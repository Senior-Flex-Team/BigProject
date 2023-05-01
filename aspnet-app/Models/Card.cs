using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace aspnet_app
{
    public class Card
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("AuthorId")]
        public int AuthorId { get; set; }

        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        public string? Image { get; set; }

        [StringLength(100)]
        public string? Tags { get; set; }

        [Required]
        public TimeSpan TimeToRead { get; set; }

        [Required]
        public string Title { get; set; }
    }
}
