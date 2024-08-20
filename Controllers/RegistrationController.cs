using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using university.Data;
using university.Models;
using System.Threading.Tasks;

namespace university.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly UniversityContext _context;

        public RegistrationController(UniversityContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostRegistration([FromBody] StudentRegistration registration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.StudentRegistrations.Add(registration);
            await _context.SaveChangesAsync();
            return Ok(registration);
        }
    }
}
