using Microsoft.AspNetCore.Mvc;
using university.Data;

namespace university.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly UniversityContext _context;

        public StudentController(UniversityContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post(Student student)
        {
            _context.Students.Add(student);
            _context.SaveChanges();
            return Ok(new { message = "submitted successfully!" });

        }
    }
}

