namespace aspnet_app
{
    public class Card
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public int CategoryId { get; set; }
        public string Content { get; set; } = null!;
        public DateOnly CreatedAt { get; set; }
        public string Image { get; set; }
        public string Tags { get; set; }
        public TimeOnly TimeToRead { get; set; }
        public string Title { get; set; }
    }
}
