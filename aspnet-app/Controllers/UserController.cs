using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace aspnet_app
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private readonly ApiDbContext _context;
        public UserController(
            ILogger<UserController> logger,
            ApiDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetAllUsers")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var user = new User()
                {
                    Name = "Jack",
                };

                _context.Add(user);
                await _context.SaveChangesAsync();

                var users = await _context.Users.ToListAsync();

                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
