using Microsoft.EntityFrameworkCore;

namespace university.Data
{
    public class UniversityContext : DbContext
    {
        public UniversityContext(DbContextOptions<UniversityContext> options)
            : base(options)
        {
        }

        public DbSet<Registration> Registrations { get; set; }= null!;
    }

    public class Registration
    {
        public int Id { get; set; }
        public string Name { get; set; }=string.Empty;
        public string ZewailEmail { get; set; }=string.Empty;
        public string AcademicYear { get; set; }=string.Empty;
    }
}

