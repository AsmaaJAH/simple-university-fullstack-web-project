using System.ComponentModel.DataAnnotations;

namespace university.Models
{
    public class StudentRegistration
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string StudentId { get; set; }
        
        [Required]
        public bool ZewailStudent { get; set; }
        
        [Required]
        public int AcademicYear { get; set; }
        
        public int ApplyCount { get; set; }
    }
}
