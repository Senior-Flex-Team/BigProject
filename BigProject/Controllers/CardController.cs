using BigProject.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BigProject.Controllers
{
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

        public async Task<IActionResult> GetAllCards()
        {
            return Ok(await _context.Cards.ToListAsync());
        }

        public async Task<IActionResult> GetCardById(int id)
        {
            return Ok(await _context.Cards.FirstOrDefaultAsync(p => p.Id == id));
        }
    }
}
