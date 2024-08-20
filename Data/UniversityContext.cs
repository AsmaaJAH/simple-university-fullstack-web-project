using Microsoft.EntityFrameworkCore;

namespace university.Data
{
    public class UniversityContext : DbContext
    {
        public UniversityContext(DbContextOptions<UniversityContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }= default!;
    }

    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }= string.Empty;
        public string Email { get; set; }= string.Empty;
        public string AcademicYear { get; set; }= string.Empty;
    }
}

