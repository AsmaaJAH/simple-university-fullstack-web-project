using Microsoft.EntityFrameworkCore;
using university.Models;

namespace university.Data
{
    public class UniversityContext : DbContext
    {
        public UniversityContext(DbContextOptions<UniversityContext> options) : base(options)
        {
        }

        public DbSet<StudentRegistration> StudentRegistrations { get; set; }= null!; // it will be initialized by EF Core
    }
}
