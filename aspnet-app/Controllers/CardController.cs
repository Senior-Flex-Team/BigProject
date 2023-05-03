using aspnet_app.BLL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace aspnet_app
{
    [ApiController]
    [Route("[controller]")]
    public class CardController : Controller
    {
        private readonly ILogger<CardController> _logger;
        private readonly ApiDbContext _context;
        public CardController(
            ILogger<CardController> logger,
            ApiDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetAllCards")]
        public async Task<IActionResult> GetAllCards()
        {
            var e = _context.Card.ToList();
            var e2 = e.FirstOrDefault().CreatedAt.ToLocalTime();
            var result = await _context.Card.Select(card => new CardDTO
            {
                Id = card.Id,
                AuthorImage = card.Author.Image,
                AuthorName = card.Author.Name,
                CategoryName = card.Category.Name,
                Content = card.Content,
                CreatedAt = card.CreatedAt.ToString("MMM d").ToLower(),
                Image = card.Image,
                TimeToRead = $"{(int)Math.Round(card.TimeToRead.TotalMinutes)} min",
                Tags = card.Tags,
                Title = card.Title,
            }).AsNoTracking().ToListAsync();

            return Ok(result);
        }

        [HttpGet("GetCardById")]
        public async Task<IActionResult> GetCardById(int id)
        {
            return Ok(await _context.Card.AsNoTracking().FirstOrDefaultAsync(p => p.Id == id));
        }
    }
}
