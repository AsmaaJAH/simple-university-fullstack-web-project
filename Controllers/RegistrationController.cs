using Microsoft.AspNetCore.Mvc;
using university.Data;
using System.Threading.Tasks;

namespace university.Controllers
{
    [ApiController]
    [Route("registration")]
    public class RegistrationController : ControllerBase
    {
        private readonly UniversityContext _context;

        public RegistrationController(UniversityContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostRegistration([FromBody] Registration registration)
        {
            if (ModelState.IsValid)
            {
                _context.Registrations.Add(registration);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
}

